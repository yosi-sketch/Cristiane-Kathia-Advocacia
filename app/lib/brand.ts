// Dados institucionais do material enviado; avaliações sem integração ao vivo.
export const brand = {
  name: "Rodrigues de Carvalho",
  businessName: "Rodrigues de Carvalho Advogados",
  phone: "(33) 99998-8635",
  phoneDigits: "5533999988635",
  whatsappDigits: "5533999988635",
  // O material contém dois números de rua. Mantemos a localização confirmada.
  address: "Rua João Maroni · Edifício Shopping Center · sala 08 — Centro, Manhumirim — MG, 36970-000",
  location: "Manhumirim · Minas Gerais",
  logo: "/rodrigues-de-carvalho-logo.png",
  portrait: "/rodrigues-de-carvalho-equipe.png",
  googleReviewCount: 11,
  googleRating: 5,
  googleReviewsCheckedOn: "17/10/2026",
  instagram: "https://www.instagram.com/rodriguesdecarvalho.advogados/",
  instagramHandle: "@rodriguesdecarvalho.advogados",
};

export function whatsappFor(subject?: string) {
  const message = subject
    ? `Olá, Rodrigues de Carvalho Advogados! Gostaria de informações sobre ${subject}.`
    : "Olá, Rodrigues de Carvalho Advogados! Gostaria de informações para agendar um atendimento jurídico.";
  return `https://wa.me/${brand.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export const whatsapp = whatsappFor();
export const contact = whatsapp;
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = "https://www.google.com/maps?cid=17098868018538276325";
export const reviews = maps;
