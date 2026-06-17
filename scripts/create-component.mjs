#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import readline from 'readline';

const DIRS = {
  component: path.resolve(process.cwd(), 'src/components'),
  module: path.resolve(process.cwd(), 'src/Modules'),
  screen: path.resolve(process.cwd(), 'src/screens'),
};

const LABELS = { component: 'componente', module: 'módulo', screen: 'screen' };
const RELS = { component: 'src/components', module: 'src/Modules', screen: 'src/screens' };
const TAG = { component: 'div', module: 'section' };

// ── helpers ──────────────────────────────────────────────────────────────────

const toCamelCase = str => str.charAt(0).toLowerCase() + str.slice(1);

function prompt(rl, question) {
  return new Promise(resolve => rl.question(question, resolve));
}

function printOptions(options, selectedIndex) {
  options.forEach((opt, i) => {
    console.log(`${i === selectedIndex ? '❯ ' : '  '}${opt}`);
  });
}

function clearLines(n) {
  for (let i = 0; i < n; i++) {
    process.stdout.moveCursor(0, -1);
    process.stdout.clearLine(1);
  }
}

async function selectOption(options, label) {
  return new Promise(resolve => {
    let selected = 0;
    console.log(`\n${label}`);
    printOptions(options, selected);

    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) process.stdin.setRawMode(true);

    const onKey = (_, key) => {
      if (!key) return;
      if (key.name === 'up') selected = (selected - 1 + options.length) % options.length;
      if (key.name === 'down') selected = (selected + 1) % options.length;

      if (key.name === 'return') {
        process.stdin.setRawMode(false);
        process.stdin.removeListener('keypress', onKey);
        process.stdin.pause();
        console.log(`\n✔ ${options[selected]}\n`);
        resolve(options[selected]);
        return;
      }

      clearLines(options.length);
      printOptions(options, selected);
    };

    process.stdin.on('keypress', onKey);
  });
}

function isPascalCase(str) {
  return /^[A-Z][a-zA-Z0-9]+$/.test(str);
}

// ── templates ────────────────────────────────────────────────────────────────

function tsxTemplate(name, type) {
  if (type === 'module') return moduleTsxTemplate(name);
  return componentTsxTemplate(name);
}

function componentTsxTemplate(name) {
  const cls = toCamelCase(name);
  return `import './${name}.scss'
import React, { FC } from 'react';
import ComponentDefault from '@/components/ComponentDefault/ComponentDefault';

type ${name}Props = {
  data: any;
  debug?: boolean;
}

const ${name}: FC<${name}Props> = ({ data }) => {
  return (
    <ComponentDefault className='${cls}' check={data?.section_check}>
    </ComponentDefault>
  );
};

export default ${name};
`;
}

function moduleTsxTemplate(name) {
  const cls = toCamelCase(name);
  return `import './${name}.scss'
import React, { FC } from 'react';
import SectionDefault from '@/components/SectionDefault/SectionDefault';

type ${name}Props = {
  data: any;
  debug?: boolean;
}

const ${name}: FC<${name}Props> = ({ data, debug = false }) => {
  const content = data;
  if (!content || !content.section_check) return null;

  return (
    <SectionDefault className='${cls}'>
    </SectionDefault>
  );
};

export default ${name};
`;
}

function screenTsxTemplate(name, menu) {
  return `import { FC } from "react";
import "./${name}.scss";
import MainDefault from "@/components/Main/Main";

interface ${name}Props {
  data: any;
  general: any;
  locale?: any;
  debug?: boolean;
}

const ${name}: FC<${name}Props> = async ({ data, debug = false, general, locale }) => {
  const content = data;
  if (!content) return null;

  // debug
  const debugData = { content };
  debug ? console.log("${name}", debugData) : null;

  return (
    <MainDefault id="${toCamelCase(name)}" setMenuFooter="${menu}" {...{ data, general, debug }}>
    </MainDefault>
  );
};

export default ${name};
`;
}

function scssTemplate(name) {
  const cls = toCamelCase(name);
  return `.${cls} {
  &__container {
  }
}
`;
}

function moduleScssTemplate(name) {
  const cls = toCamelCase(name);
  return `.${cls} {
  &__container {
    @include container;
  }
}
`;
}

// ── resolveTemplate auto-register ────────────────────────────────────────────

const VALID_MENUS = ['b2c', 'b2b', 'none'];
const RESOLVE_TEMPLATE_PATH = path.resolve(process.cwd(), 'src/config/resolveTemplate.ts');

function registerInResolveTemplate(name) {
  if (!fs.existsSync(RESOLVE_TEMPLATE_PATH)) {
    console.warn(`\n⚠  ${RESOLVE_TEMPLATE_PATH} não encontrado — pulando registro automático.\n`);
    return;
  }

  let src = fs.readFileSync(RESOLVE_TEMPLATE_PATH, 'utf8');

  const alreadyImported = new RegExp(`^import\\s+${name}\\s+from\\s+"@/screens/${name}/${name}";`, 'm').test(src);
  const alreadyInMap = new RegExp(`(^|[\\s,{])${name}(?=[,\\s}])`, 'm').test(src);

  if (alreadyImported && alreadyInMap) {
    console.log(`ℹ  ${name} já registrado em resolveTemplate.ts — nada a fazer.`);
    return;
  }

  // 1. Append import após o último `import ... from "@/screens/...";`
  if (!alreadyImported) {
    const importRegex = /import [A-Z][A-Za-z0-9]+ from "@\/screens\/[^"]+";\n/g;
    let lastImportEnd = -1;
    let m;
    while ((m = importRegex.exec(src)) !== null) {
      lastImportEnd = m.index + m[0].length;
    }
    if (lastImportEnd === -1) {
      console.warn('\n⚠  Não localizei imports de "@/screens/..." em resolveTemplate.ts — registro automático abortado.\n');
      return;
    }
    const importLine = `import ${name} from "@/screens/${name}/${name}";\n`;
    src = src.slice(0, lastImportEnd) + importLine + src.slice(lastImportEnd);
  }

  // 2. Append entry no map — adiciona vírgula na última entrada (se faltar) e insere nova linha antes do fechamento.
  if (!alreadyInMap) {
    const mapBlockRegex = /(const map: Record<string, any> = \{[\s\S]*?)\n(\s*)\};/;
    const match = src.match(mapBlockRegex);
    if (!match) {
      console.warn('\n⚠  Bloco do map não encontrado em resolveTemplate.ts — registro automático abortado.\n');
      return;
    }
    let body = match[1];
    const closeIndent = match[2];

    // Garantir vírgula no último identificador do body
    body = body.replace(/([A-Z][A-Za-z0-9]+)(\s*)$/, (_full, ident, ws) => `${ident},${ws}`);

    // Indentação de 6 espaços (padrão das entradas existentes)
    src = src.replace(mapBlockRegex, `${body}\n      ${name}\n${closeIndent}};`);
  }

  fs.writeFileSync(RESOLVE_TEMPLATE_PATH, src);
  console.log(`✅ ${name} registrado em src/config/resolveTemplate.ts`);
}

// ── ensure dependencies ───────────────────────────────────────────────────────

function ensureComponentDefault() {
  const dest = path.join(DIRS.component, 'ComponentDefault', 'ComponentDefault.tsx');
  if (fs.existsSync(dest)) return;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, `import React, { FC } from "react";

type ComponentDefaultProps = {
  className: string;
  children?: React.ReactNode;
  check?: boolean;
  noContainer?: boolean;
  debug?: boolean;
} & React.ComponentProps<"div">;

const ComponentDefault: FC<ComponentDefaultProps> = ({
  className,
  children,
  check,
  noContainer = false,
  debug = false,
  ...rest
}) => {
  if (!check) return null;

  debug && console.log(className, { children });

  return (
    <div className={className} {...rest}>
      {noContainer ? children : <div className={\`\${className}__container\`}>{children}</div>}
    </div>
  );
};

export default ComponentDefault;
`);
  console.log('✅ ComponentDefault criado em src/components/ComponentDefault/');
}

// ── create ────────────────────────────────────────────────────────────────────

function createItem(type, name, menu) {
  if (type === 'component') ensureComponentDefault();

  const dest = path.join(DIRS[type], name);
  fs.mkdirSync(dest, { recursive: true });
  const tsx = type === 'screen' ? screenTsxTemplate(name, menu) : tsxTemplate(name, type);
  const scss = type === 'module' ? moduleScssTemplate(name) : scssTemplate(name);
  fs.writeFileSync(path.join(dest, `${name}.tsx`), tsx);
  fs.writeFileSync(path.join(dest, `${name}.scss`), scss);
  console.log(`\n✅ ${type} criado em ${RELS[type]}/${name}/\n`);

  if (type === 'screen') registerInResolveTemplate(name);
}

// ── inline mode ──────────────────────────────────────────────────────────────

function runInline(type, args) {
  if (args.length === 0) {
    const example = type === 'screen'
      ? `pnpm create-component screen NomeDaScreen b2c`
      : `pnpm create-component ${type} NomeDoComponente`;
    console.error(`\n⚠  Informe ao menos um nome. Ex: ${example}\n`);
    process.exit(1);
  }

  let menu;
  let names;

  if (type === 'screen') {
    // Último arg = menu obrigatório (b2c | b2b); demais = nomes (suporta múltiplos com mesmo menu).
    if (args.length < 2) {
      console.error(`\n⚠  Screen exige menu como último argumento (${VALID_MENUS.join(' | ')}).\n   Ex: pnpm create-component screen NomeDaScreen b2c\n`);
      process.exit(1);
    }
    menu = args[args.length - 1];
    names = args.slice(0, -1);
    if (!VALID_MENUS.includes(menu)) {
      console.error(`\n⚠  Menu inválido: "${menu}". Use: ${VALID_MENUS.join(' | ')}\n`);
      process.exit(1);
    }
  } else {
    names = args;
  }

  for (const name of names) {
    if (!isPascalCase(name)) {
      console.error(`\n⚠  "${name}" não está em PascalCase. Ex: BannerProduct\n`);
      process.exit(1);
    }
  }

  for (const name of names) {
    const dest = path.join(DIRS[type], name);
    if (!fs.existsSync(dest)) {
      createItem(type, name, menu);
      return;
    }
    console.log(`⚠  ${type} "${name}" já existe.`);
  }

  console.error(`\n❌ Todos os nomes fornecidos já existem. Nenhum item criado.\n`);
  process.exit(1);
}

// ── interactive mode ─────────────────────────────────────────────────────────

async function runInteractive() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  console.log('\n🛠  Gerador de Componentes\n');

  const typeRaw = await selectOption(['Component', 'Module', 'Screen'], 'Selecione o tipo:');
  const type = typeRaw.toLowerCase();

  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  let name = '';

  while (true) {
    name = (await prompt(rl, `Nome do ${LABELS[type]} (PascalCase): `)).trim();

    if (!isPascalCase(name)) {
      console.log('⚠  Use PascalCase. Ex: BannerProduct\n');
      continue;
    }

    const dest = path.join(DIRS[type], name);
    if (fs.existsSync(dest)) {
      console.log(`⚠  ${typeRaw} "${name}" já existe. Escolha outro nome.\n`);
      continue;
    }

    break;
  }

  rl.close();
  process.stdin.resume();

  let menu;
  if (type === 'screen') {
    menu = await selectOption(VALID_MENUS, 'Selecione o menu/footer:');
  }

  createItem(type, name, menu);
}

// ── entry ─────────────────────────────────────────────────────────────────────

const [, , typeArg, ...nameArgs] = process.argv;

if (typeArg) {
  const type = typeArg.toLowerCase();
  if (!DIRS[type]) {
    console.error(`\n⚠  Tipo inválido: "${typeArg}". Use: component, module ou screen\n`);
    process.exit(1);
  }
  runInline(type, nameArgs);
} else {
  runInteractive().catch(err => { console.error(err); process.exit(1); });
}
