// Dados públicos fornecidos pelo cliente em 18/10/2026.
export const brand = {
  name: "Micaela Alves",
  businessName: "Micaela Alves Advocacia",
  registration: "OAB/MG 220.712",
  phone: "(31) 99734-1475",
  phoneDigits: "5531997341475",
  whatsappDigits: "5531997341475",
  address: "Av. Gov. Valadares, 440 — Centro, Igarapé — MG, 32900-000",
  location: "Igarapé · Minas Gerais",
  logo: "/micaela-alves-logo.png",
  portrait: "/micaela-alves-retrato.png",
  googleReviewCount: 119,
  googleRating: 5,
  googleReviewsProvidedOn: "18/10/2026",
  instagram: "https://www.instagram.com/micaelaalvesadv/",
  instagramHandle: "@micaelaalvesadv",
};

export function whatsappFor(subject?: string) {
  const message = subject
    ? `Olá, Micaela! Gostaria de informações sobre ${subject}.`
    : "Olá, Micaela! Gostaria de informações para agendar um atendimento jurídico.";
  return `https://wa.me/${brand.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export const whatsapp = whatsappFor();
export const contact = whatsapp;
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = "https://www.google.com/maps?cid=12951392828992382296";
export const reviews = maps;
