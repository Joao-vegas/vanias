export const site = {
  name: "Vânia Amaral",
  role: "Fisioterapia • Estética • Atendimento Domiciliar",
  crefito: "CREFITO 456836-F",
  phoneDisplay: "(11) 96659-4904",
  whatsappNumber: "5511966594904",
  whatsappMessage:
    "Olá Vânia! Vim pelo site e gostaria de agendar um horário.",
  instagram: "vaniafisioestetica",
  instagramUrl: "https://instagram.com/vaniafisioestetica",
  location: "São Paulo – SP",
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export function whatsappFor(service: string) {
  const msg = `Olá Vânia! Vim pelo site e tenho interesse em: ${service}. Gostaria de agendar um horário.`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

export const services = [
  {
    title: "Fisioterapia",
    icon: "🦴",
    duration: "60 minutos",
    description:
      "Avaliação e tratamento personalizado para dores, lesões, limitações funcionais e reabilitação.",
  },
  {
    title: "Atendimento Domiciliar",
    icon: "🏠",
    duration: "Sob agendamento",
    description:
      "Atendimento realizado no conforto da sua residência, incluindo pós-operatório e reabilitação neurológica e ortopédica.",
  },
  {
    title: "Drenagem Linfática",
    icon: "💆",
    duration: "70 minutos",
    description:
      "Auxilia na redução do inchaço, melhora da circulação e proporciona uma sensação de leveza.",
  },
  {
    title: "Limpeza de Pele Profunda",
    icon: "✨",
    duration: "90 minutos",
    description:
      "Procedimento completo para remoção de impurezas, controle da oleosidade e revitalização da pele.",
    includes: [
      "Higienização",
      "Esfoliação",
      "Emoliência",
      "Extração",
      "Alta frequência",
      "Máscara calmante",
      "Proteção solar",
    ],
  },
  {
    title: "Revitalização Facial",
    icon: "🌸",
    duration: "60 minutos",
    description:
      "Tratamento voltado para hidratação, luminosidade e renovação da pele.",
  },
];

export const videos = [
  {
    src: "/videos/reabilitacao-ombro.mp4",
    title: "Reabilitação de ombro",
    tag: "Fisioterapia",
  },
  {
    src: "/videos/artrose.mp4",
    title: "Alívio de dor na artrose",
    tag: "Fisioterapia",
  },
  {
    src: "/videos/dor-lombar.mp4",
    title: "Tratamento e orientações para dor lombar",
    tag: "Fisioterapia",
  },
  {
    src: "/videos/domiciliar.mp4",
    title: "Atendimento de fisioterapia domiciliar",
    tag: "Domiciliar",
  },
  {
    src: "/videos/terapias-manuais.mp4",
    title: "Terapias manuais",
    tag: "Fisioterapia",
  },
  {
    src: "/videos/drenagem.mp4",
    title: "Drenagem linfática manual • Pré e pós-operatório",
    tag: "Estética",
  },
];

export const problems = [
  {
    pain: "Dor que não passa",
    solution: "Avaliação que encontra a causa e plano feito para o seu corpo.",
  },
  {
    pain: "Pós-operatório com medo de se machucar",
    solution: "Recuperação segura, no seu ritmo e dentro de casa.",
  },
  {
    pain: "Inchaço e sensação de peso",
    solution: "Drenagem linfática que reduz o inchaço e devolve a leveza.",
  },
  {
    pain: "Dificuldade de se deslocar",
    solution: "Atendimento domiciliar completo, sem você sair de casa.",
  },
  {
    pain: "Pele sem viço ou com impurezas",
    solution: "Limpeza profunda e revitalização que renovam a autoestima.",
  },
];

export const audience = [
  {
    icon: "🩹",
    title: "Em recuperação de cirurgia ou lesão",
    text: "Pós-operatório, fraturas e reabilitação ortopédica com acompanhamento próximo.",
  },
  {
    icon: "👵",
    title: "Idosos e pessoas com mobilidade reduzida",
    text: "Atendimento gentil e domiciliar, sem o desgaste do deslocamento.",
  },
  {
    icon: "💢",
    title: "Quem convive com dores crônicas",
    text: "Lombar, ombro, artrose e tensões que limitam a rotina e o sono.",
  },
  {
    icon: "🧠",
    title: "Reabilitação neurológica e funcional",
    text: "Recuperação de movimento, força e independência no dia a dia.",
  },
  {
    icon: "🌷",
    title: "Quem quer cuidar da pele e da autoestima",
    text: "Limpeza de pele, revitalização facial e drenagem com resultado visível.",
  },
  {
    icon: "⏳",
    title: "Quem não tem tempo a perder",
    text: "Agenda flexível e atendimento no conforto da sua casa ou do consultório.",
  },
];

export const benefits = [
  "Maior conforto",
  "Sem deslocamento",
  "Atendimento individualizado",
  "Mais praticidade para idosos e pacientes em recuperação",
  "Flexibilidade de horários",
];

export const testimonials = [
  {
    name: "Ana Facion",
    headline: "Saí desinchada e com medidas visivelmente menores",
    service: "Limpeza de Pele + Detox",
    text: "Maravilhosa! Excelente trabalho! Fiz uma limpeza de pele que me surpreendeu!!! O Detox é sensacional, saí de lá com medidas visivelmente menores e desinchada.",
  },
  {
    name: "Cristiane Theodoro de Paula",
    headline: "Atendimento top — amei o resultado",
    service: "Massagem + Tratamento de Pele",
    text: "Atendimento top! Vânia tem muito conhecimento e utiliza produtos de alta qualidade. Tanto a massagem como o tratamento de pele, amei o resultado. Só tenho a agradecer pelo ótimo atendimento.",
  },
  {
    name: "Roberto Costa Moreira",
    headline: "Minha sogra de 91 anos amou o atendimento",
    service: "Atendimento Domiciliar",
    text: "A Dra. Vânia é muito eficiente e atenciosa. Minha sogrinha de 91 anos amou o atendimento dela. Eu super recomendo.",
  },
  {
    name: "Carol Steidl",
    headline: "A massagem é maravilhosa e o rosto fica impecável",
    service: "Massagem + Limpeza de Pele",
    text: "Fisioterapeuta atenciosa, explica o procedimento e como vai funcionar. Produtos de ótima qualidade. A massagem dela é maravilhosa e a limpeza de pele deixa o rosto impecável.",
  },
  {
    name: "Paulo Roberto",
    headline: "Recuperei minha clavícula bem acompanhado",
    service: "Fisioterapia / Reabilitação",
    text: "Os exercícios e orientações me ajudaram bastante na recuperação da minha clavícula. Me senti muito bem acompanhado durante todo o processo. Obrigado pelo profissionalismo e atenção!",
  },
  {
    name: "Cibele Santos",
    headline: "Mãos maravilhosas e muito cuidado com o cliente",
    service: "Estética",
    text: "Minha experiência foi ótima, a Vânia tem uma ótima energia e mãos maravilhosas. Dá muita atenção e tem muito cuidado com os clientes. Voltarei mais vezes com certeza.",
  },
  {
    name: "Renata Sales e Souza",
    headline: "Recomendo de olhos fechados",
    service: "Estética",
    text: "Excelente profissional, recomendo de olhos fechados. Dedicada, cuidadosa, atenciosa e prestativa, tira todas as dúvidas antes de realizar cada procedimento.",
  },
  {
    name: "Marcia Camargo",
    headline: "Gosto muito do tratamento que ela faz",
    service: "Tratamento contínuo",
    text: "Excelente profissional, gosto muito do tratamento que ela faz. Recomendo.",
  },
  {
    name: "Aline Peixoto",
    headline: "Lugar acolhedor e profissional excelente",
    service: "Atendimento no consultório",
    text: "Lugar muito acolhedor, organizado e a profissional é excelente. Recomendo muito!",
  },
  {
    name: "Ruth Medeiros",
    headline: "Simpática, cuidadosa e delicada",
    service: "Estética",
    text: "Local de fácil acesso. Ótima profissional, simpática, cuidadosa e delicada. Ótimos serviços.",
  },
];

export const reviewShots = [
  "/depoimentos/google-1.jpeg",
  "/depoimentos/google-2.jpeg",
  "/depoimentos/google-3.jpeg",
  "/depoimentos/google-4.jpeg",
  "/depoimentos/google-5.jpeg",
];

export const faq = [
  {
    q: "Vocês atendem a domicílio?",
    a: "Sim. Atendemos em diversas regiões de São Paulo mediante agendamento. Entre em contato pelo WhatsApp para verificarmos a disponibilidade na sua região.",
  },
  {
    q: "Emitem recibo para reembolso?",
    a: "Sim. Fornecemos toda a documentação necessária para solicitação de reembolso junto ao seu convênio. Combine os detalhes pelo WhatsApp.",
  },
  {
    q: "Como funciona o agendamento?",
    a: "É simples e rápido: basta clicar em qualquer botão de WhatsApp do site. Você escolhe o serviço, o melhor horário e se prefere atendimento no consultório ou domiciliar.",
  },
  {
    q: "Quais formas de atendimento estão disponíveis?",
    a: "Atendimento presencial e domiciliar, sempre individualizado e respeitando as necessidades de cada paciente.",
  },
];
