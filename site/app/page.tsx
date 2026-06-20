import Image from "next/image";
import Header from "./components/Header";
import WhatsappFloat from "./components/WhatsappFloat";
import Reveal from "./components/Reveal";
import {
  site,
  whatsappUrl,
  whatsappFor,
  services,
  videos,
  benefits,
  problems,
  audience,
  reviewShots,
  faq,
} from "@/lib/site";

function Stars() {
  return (
    <div className="flex gap-0.5 text-blush-400" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78-4.21-4.1 5.82-.85z" />
        </svg>
      ))}
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Vânia Amaral — Fisioterapia & Estética",
  description:
    "Fisioterapia, estética e atendimento domiciliar em São Paulo. Reabilitação física, drenagem linfática, pós-operatório, limpeza de pele e revitalização facial.",
  image: "https://vaniaamaral.com.br/vania.jpg",
  url: "https://vaniaamaral.com.br",
  telephone: "+5511966594904",
  areaServed: "São Paulo e região",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: ["https://instagram.com/vaniafisioestetica"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: 50,
  },
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.description },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <WhatsappFloat />
      <main id="topo">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blush-50 via-cream to-cream pt-28 pb-20 lg:pt-36 lg:pb-28">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blush-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-blush-100/60 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-blush-200 bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-blush-600 backdrop-blur">
                Fisioterapeuta • {site.crefito}
              </span>
              <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-plum-900 text-balance sm:text-6xl lg:text-7xl">
                Recupere seu movimento e viva sem dor
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-plum-800/75">
                Fisioterapia com avaliação e tratamento individualizado em São
                Paulo. Um cuidado que vai à causa da sua dor para devolver
                movimento e qualidade de vida — também com estética e atendimento
                domiciliar quando você precisar.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-blush-600 px-8 py-4 text-center font-semibold text-white shadow-xl shadow-blush-600/30 transition-all hover:bg-blush-700 hover:shadow-blush-600/50"
                >
                  Agendar meu horário
                </a>
                <a
                  href="#servicos"
                  className="rounded-full border border-blush-300 px-8 py-4 text-center font-semibold text-plum-800 transition-colors hover:bg-blush-50"
                >
                  Ver serviços
                </a>
              </div>
              <div className="mt-10 flex items-center gap-5">
                <Stars />
                <p className="text-sm text-plum-800/70">
                  <span className="font-semibold text-plum-900">Avaliação 5,0</span>{" "}
                  de pacientes no Google
                </p>
              </div>
            </Reveal>

            <Reveal delay={150} className="relative">
              <div className="relative mx-auto max-w-sm">
                <div className="floaty absolute -left-6 -top-6 -z-10 h-full w-full rounded-[2.5rem] bg-blush-200/50" />
                <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-plum-900/20 ring-1 ring-white/60">
                  <Image
                    src="/vania.jpg"
                    alt="Vânia Amaral, fisioterapeuta"
                    width={1080}
                    height={1440}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl shadow-plum-900/10">
                  <span className="text-2xl">📍</span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-plum-900">
                      Atendimento em SP
                    </p>
                    <p className="text-xs text-plum-800/60">Presencial e domiciliar</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROBLEMA / SOLUÇÃO (MECANISMO) */}
        <section id="como-ajudo" className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blush-500">
                Se você se identifica
              </span>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-plum-900 sm:text-5xl text-balance">
                Cada incômodo tem um caminho de cuidado
              </h2>
              <p className="mt-4 text-lg text-plum-800/70">
                O foco não é só aliviar o sintoma — é entender a causa e tratar
                você por inteiro, com técnica e acolhimento.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((p, i) => (
                <Reveal key={p.pain} delay={(i % 3) * 70}>
                  <div className="h-full rounded-2xl bg-white p-5 shadow-sm shadow-plum-900/5 ring-1 ring-blush-100/60">
                    <p className="font-semibold text-plum-900">{p.pain}</p>
                    <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-plum-800/70">
                      <span className="text-blush-400">✨</span>
                      {p.solution}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120} className="mt-10 text-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-blush-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blush-600/30 transition-all hover:bg-blush-700"
              >
                Quero resolver isso — falar com a Vânia
              </a>
            </Reveal>
          </div>
        </section>

        {/* PARA QUEM É */}
        <section id="para-quem" className="bg-sand py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blush-500">
                Para quem é
              </span>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">
                Esse cuidado é para você se…
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {audience.map((a, i) => (
                <Reveal key={a.title} delay={(i % 3) * 80}>
                  <div className="flex h-full gap-4 rounded-3xl bg-white p-6 shadow-sm shadow-plum-900/5 ring-1 ring-blush-100/60">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blush-50 text-2xl">
                      {a.icon}
                    </span>
                    <div>
                      <h3 className="font-semibold text-plum-900">{a.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-plum-800/70">
                        {a.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blush-500">
                Nossos serviços
              </span>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">
                Cuidado completo para corpo e pele
              </h2>
              <p className="mt-4 text-lg text-plum-800/70">
                Tratamentos personalizados que unem saúde, recuperação e autoestima.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <div className="group flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm shadow-plum-900/5 ring-1 ring-blush-100/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blush-600/10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blush-50 text-3xl transition-colors group-hover:bg-blush-100">
                      {s.icon}
                    </div>
                    <h3 className="mt-5 font-serif text-2xl font-semibold text-plum-900">
                      {s.title}
                    </h3>
                    <p className="mt-3 flex-1 leading-relaxed text-plum-800/70">
                      {s.description}
                    </p>
                    {s.includes && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {s.includes.map((inc) => (
                          <li
                            key={inc}
                            className="rounded-full bg-blush-50 px-3 py-1 text-xs font-medium text-blush-700"
                          >
                            {inc}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-6 flex items-center justify-between border-t border-blush-100 pt-4">
                      <span className="text-sm font-medium text-plum-800/60">
                        ⏱️ {s.duration}
                      </span>
                      <a
                        href={whatsappFor(s.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-blush-600 transition-colors hover:text-blush-700"
                      >
                        Agendar →
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* Card de benefícios domiciliar */}
              <Reveal delay={services.length * 80}>
                <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-blush-600 to-plum-700 p-7 text-white shadow-xl shadow-blush-600/20">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold">
                      Por que o atendimento domiciliar?
                    </h3>
                    <ul className="mt-5 space-y-2.5">
                      {benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-white/90">
                          <span className="mt-0.5">✅</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={whatsappFor("Atendimento Domiciliar")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 rounded-full bg-white px-6 py-3 text-center font-semibold text-blush-700 transition-transform hover:scale-[1.02]"
                  >
                    Quero atendimento em casa
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* RESULTADOS / VÍDEOS */}
        <section id="resultados" className="bg-sand py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blush-500">
                Na prática
              </span>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">
                Veja o cuidado em movimento
              </h2>
              <p className="mt-4 text-lg text-plum-800/70">
                Alguns momentos reais de atendimento, reabilitação e tratamentos.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((v, i) => (
                <Reveal key={v.src} delay={i * 70}>
                  <div className="overflow-hidden rounded-3xl bg-plum-900 shadow-lg shadow-plum-900/15 ring-1 ring-blush-100/40">
                    <video
                      className="aspect-[9/16] w-full bg-black object-cover"
                      controls
                      preload="metadata"
                      playsInline
                      poster={v.src
                        .replace("/videos/", "/videos/posters/")
                        .replace(".mp4", ".jpg")}
                    >
                      <source src={`${v.src}#t=0.1`} type="video/mp4" />
                    </video>
                    <div className="flex items-center justify-between gap-3 px-4 py-3">
                      <p className="text-sm font-medium text-white">{v.title}</p>
                      <span className="shrink-0 rounded-full bg-blush-500/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-blush-200">
                        {v.tag}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section id="depoimentos" className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blush-500">
                Depoimentos
              </span>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">
                Quem cuida com a Vânia, recomenda
              </h2>
              <div className="mt-4 flex items-center justify-center gap-3">
                <Stars />
                <span className="text-sm font-medium text-plum-800/70">
                  Avaliações reais do Google
                </span>
              </div>
            </Reveal>

            <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
              {reviewShots.map((src, i) => (
                <Reveal key={src} delay={(i % 3) * 80}>
                  <div className="break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-md shadow-plum-900/10 ring-1 ring-blush-100/60">
                    <Image
                      src={src}
                      alt={`Avaliação real no Google sobre a Vânia Amaral ${i + 1}`}
                      width={1080}
                      height={1200}
                      className="h-auto w-full"
                    />
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120} className="mt-12 text-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-blush-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blush-600/30 transition-all hover:bg-blush-700"
              >
                Quero esse cuidado também
              </a>
            </Reveal>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="bg-sand py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1fr_1.2fr]">
            <Reveal className="order-2 lg:order-1">
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-plum-900/15">
                  <Image
                    src="/vania.jpg"
                    alt="Vânia Amaral em atendimento"
                    width={1080}
                    height={1440}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -right-4 -bottom-4 rounded-2xl bg-blush-600 px-6 py-4 text-white shadow-lg">
                  <p className="font-serif text-3xl font-semibold leading-none">+10</p>
                  <p className="text-xs uppercase tracking-wide opacity-90">
                    anos cuidando<br />de pessoas
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="order-1 lg:order-2">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blush-500">
                Quem cuida de você
              </span>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">
                Olá, sou a Vânia Amaral
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-plum-800/75">
                Sou fisioterapeuta especializada em promover saúde, recuperação
                funcional e bem-estar. Meu objetivo é oferecer um atendimento
                individualizado, respeitando as necessidades de cada paciente —
                seja no consultório ou através do atendimento domiciliar.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-plum-800/75">
                Acredito em um cuidado que une técnica e acolhimento. Atuo com foco em:
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Reabilitação física",
                  "Fisioterapia domiciliar",
                  "Drenagem linfática",
                  "Pós-operatório",
                  "Limpeza de pele",
                  "Revitalização facial",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium text-plum-800 shadow-sm shadow-plum-900/5"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blush-100 text-blush-600">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-5">
            <Reveal className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blush-500">
                Perguntas frequentes
              </span>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-plum-900 sm:text-5xl">
                Tirando suas dúvidas
              </h2>
            </Reveal>

            <div className="mt-12 space-y-4">
              {faq.map((item, i) => (
                <Reveal key={item.q} delay={i * 60}>
                  <details className="group rounded-2xl bg-white p-5 shadow-sm shadow-plum-900/5 ring-1 ring-blush-100/60 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-plum-900">
                      {item.q}
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blush-50 text-blush-600 transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 leading-relaxed text-plum-800/70">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO / CTA */}
        <section
          id="contato"
          className="relative overflow-hidden bg-gradient-to-br from-plum-800 via-blush-700 to-blush-600 py-20 text-white lg:py-28"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative mx-auto max-w-3xl px-5 text-center">
            <Reveal>
              <h2 className="font-serif text-4xl font-semibold sm:text-5xl text-balance">
                Pronta para cuidar de você?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
                Agende seu horário pelo WhatsApp e escolha entre atendimento no
                consultório ou no conforto da sua casa.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-9 py-4 font-semibold text-blush-700 shadow-xl shadow-black/20 transition-transform hover:scale-105"
              >
                👉 Agendar meu horário
              </a>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-white/10 px-5 py-5 backdrop-blur transition-colors hover:bg-white/20"
                >
                  <p className="text-2xl">📲</p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-white/60">
                    WhatsApp
                  </p>
                  <p className="mt-1 font-semibold">{site.phoneDisplay}</p>
                </a>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-white/10 px-5 py-5 backdrop-blur transition-colors hover:bg-white/20"
                >
                  <p className="text-2xl">📸</p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-white/60">
                    Instagram
                  </p>
                  <p className="mt-1 font-semibold">@{site.instagram}</p>
                </a>
                <div className="rounded-2xl bg-white/10 px-5 py-5 backdrop-blur">
                  <p className="text-2xl">📍</p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-white/60">
                    Localização
                  </p>
                  <p className="mt-1 font-semibold">{site.location}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-plum-900 py-10 text-center text-white/70">
          <div className="mx-auto max-w-6xl px-5">
            <p className="font-serif text-2xl font-semibold text-white">
              Vânia Amaral
            </p>
            <p className="mt-1 text-sm">{site.role}</p>
            <p className="mt-1 text-xs text-white/50">{site.crefito}</p>
            <div className="mt-5 flex items-center justify-center gap-5 text-sm">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blush-300"
              >
                WhatsApp
              </a>
              <span className="text-white/20">•</span>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blush-300"
              >
                Instagram
              </a>
            </div>
            <p className="mt-6 text-xs text-white/40">
              © {new Date().getFullYear()} Vânia Amaral — Fisioterapia & Estética.
              Atendimento presencial e domiciliar em São Paulo.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
