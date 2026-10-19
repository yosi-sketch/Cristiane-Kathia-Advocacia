// Dados públicos fornecidos pelo cliente em 18/10/2026.
export const brand = {
  name: "Cristiane & Kathia",
  businessName: "Cristiane & Kathia — Advocacia Previdenciária",
  phone: "(38) 99816-2682",
  phoneDigits: "5538998162682",
  whatsappDigits: "5538998162682",
  address: "Rua Cap. Bernadino, 36 — Brasília de Minas — MG, 39330-000",
  location: "Brasília de Minas · MG",
  logo: "/cristiane-kathia-logo.png",
  portrait: "/cristiane-kathia-retrato.png",
  institutionalPhoto: "/cristiane-kathia-institucional.png",
  googleReviewCount: 54,
  googleRating: 5,
  googleReviewsProvidedOn: "18/10/2026",
  instagram: "https://www.instagram.com/cristiane.kathiaadvogadas/",
  instagramHandle: "@cristiane.kathiaadvogadas",
  professionals: [
    { name: "Dra. Cristiane Rocha", instagram: "https://www.instagram.com/dra.cristianerocha/" },
    { name: "Dra. Kathia Veloso", instagram: "https://www.instagram.com/dra.kathiaveloso/" },
  ],
};

export function whatsappFor(subject?: string) {
  const message = subject
    ? `Olá, Cristiane e Kathia! Gostaria de informações sobre ${subject}.`
    : "Olá, Cristiane e Kathia! Gostaria de informações para agendar um atendimento jurídico.";
  return `https://wa.me/${brand.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export const whatsapp = whatsappFor();
export const contact = whatsapp;
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = "https://www.google.com/maps?cid=12021962043276666392";
export const reviews = maps;
