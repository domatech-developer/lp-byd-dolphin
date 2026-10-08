import { InfoModalData } from "./InfoModal";

const maps = (address: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Servopa ${address}`)}`;

export const locationsModalContent: InfoModalData = {
  title: "Localização",
  columns: 1,
  items: [
    {
      label: "Curitiba Rebouças",
      value: "Rua Rockefeller, 1217 - 80230-130",
      href: maps("Rua Rockefeller, 1217 - 80230-130"),
      target: "_blank"
    },
    {
      label: "Curitiba Mário Tourinho",
      value: "R. Gen. Mário Tourinho, 1215 - Campina do Siqueira, Curitiba - PR, 80740-000",
      href: maps("R. Gen. Mário Tourinho, 1215 - Campina do Siqueira, Curitiba - PR, 80740-000"),
      target: "_blank"
    },
    {
      label: "Maringá",
      value: "Avenida Bento Munhoz da Rocha Neto, 1282 - 87030-010",
      href: maps("Avenida Bento Munhoz da Rocha Neto, 1282 - 87030-010"),
      target: "_blank"
    },
    {
      label: "Londrina",
      value: "Avenida Tiradentes, 2611 - 86071-000",
      href: maps("Avenida Tiradentes, 2611 - 86071-000"),
      target: "_blank"
    },
    {
      label: "São José dos Pinhais",
      value: "Avenida das Torres, 2080 - 83040-300",
      href: maps("Avenida das Torres, 2080 - 83040-300"),
      target: "_blank"
    },
    {
      label: "Cascavel",
      value: "Av. Brasil, 1809 - Pacaembu, Cascavel - PR, 85816-302",
      href: maps("Av. Brasil, 1809 - Pacaembu, Cascavel - PR, 85816-302"),
      target: "_blank"
    },
    {
      label: "Ponta Grossa",
      value: "Av. Visc. de Mauá, 1770 - Oficinas, Ponta Grossa - PR, 84045-100",
      href: maps("Av. Visc. de Mauá, 1770 - Oficinas, Ponta Grossa - PR, 84045-100"),
      target: "_blank"
    },
    {
      label: "Portão",
      value: "Rua João Bettega, 127, Portão - 81070-000",
      href: maps("Rua João Bettega, 127, Portão - 81070-000"),
      target: "_blank"
    },
    {
      label: "Umuarama",
      value: "Av. Tiradentes, 2000 - Jardim Paraíso, Umuarama - PR, 87505-090",
      href: maps("Av. Tiradentes, 2000 - Jardim Paraíso, Umuarama - PR, 87505-090"),
      target: "_blank"
    }
  ]
};
