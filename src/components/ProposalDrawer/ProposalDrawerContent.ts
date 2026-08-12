type ContactOption = {
  value: string;
  label: string;
  checked?: boolean;
};

type ProposalDrawerContent = {
  section_check: boolean;
  title: string;
  cityLabel: string;
  modelLabel: string;
  defaultModel: string;
  cities: string[];
  models: string[];
  fields: {
    name_placeholder: string;
    email_placeholder: string;
    phone_placeholder: string;
    city_placeholder: string;
    model_placeholder: string;
  };
  contact: {
    title: string;
    options: ContactOption[];
  };
  privacy: {
    label: string;
    url?: string;
    target?: string;
  };
  submit_label: string;
};

export const proposalDrawerContent: ProposalDrawerContent = {
  section_check: true,
  title: "Fale com a BYD Servopa",
  cityLabel: "Cidade",
  modelLabel: "Carro de interesse",
  defaultModel: "BYD Dolphin SE",
  cities: [
    "Curitiba Rebouças",
    "Curitiba Mário Tourinho",
    "Maringá",
    "Londrina",
    "São José dos Pinhais",
    "Cascavel",
    "Ponta Grossa",
    "Portão",
    "Umuarama"
  ],
  models: ["BYD Dolphin", "BYD Dolphin Mini", "BYD Dolphin Plus", "BYD Dolphin SE"],
  fields: {
    name_placeholder: "Nome",
    email_placeholder: "E-mail",
    phone_placeholder: "Telefone",
    city_placeholder: "Selecione uma cidade",
    model_placeholder: "Selecione um modelo"
  },
  contact: {
    title: "Quero receber contato por:",
    options: [
      { value: "phone", label: "Telefone", checked: true },
      { value: "email", label: "E-mail", checked: true },
      { value: "whatsapp", label: "Whatsapp", checked: true }
    ]
  },
  privacy: {
    label: "Aceito a política de privacidade",
    url: "/politica-de-privacidade",
    target: "_blank"
  },
  submit_label: "Enviar"
};
