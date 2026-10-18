"use client";

import Image from "next/image";
import { useEffect, useState, useRef, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageCircle,
  MapPin,
  Menu,
  MessageSquareText,
  FileSearch,
  ShieldCheck,
  Camera,
  Star,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";
import { brand, contact, whatsapp, telephone, whatsappFor, maps, reviews } from "./lib/brand";
import { googleReviews } from "./lib/reviews";

function WhatsAppMark({size = 16, strokeWidth = 1.8}: {size?: number; strokeWidth?: number}) { return <MessageCircle size={size} strokeWidth={strokeWidth} aria-hidden="true" />; }

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
};

const areas = [
  {
    title: "Orientação jurídica", icon: MessageSquareText,
    summary: "Uma conversa para compreender sua situação, esclarecer dúvidas e entender os próximos passos.",
    details: "O atendimento começa pela sua história. Compartilhe sua dúvida com a Rodrigues de Carvalho Advogados para receber informações sobre a consulta e a orientação jurídica adequada à sua demanda.",
    topics: ["Escuta da sua situação", "Esclarecimento das dúvidas iniciais", "Informações sobre o agendamento", "Orientação sobre os documentos necessários"],
  },
  {
    title: "Análise individual", icon: FileSearch,
    summary: "Atenção ao contexto e aos documentos que ajudam a compreender a sua demanda.",
    details: "Cada situação jurídica tem suas particularidades. A análise considera os fatos e os documentos apresentados para esclarecer as questões envolvidas e conversar sobre as alternativas cabíveis, com sigilo e responsabilidade.",
    topics: ["Compreensão do contexto da demanda", "Análise dos documentos apresentados", "Esclarecimento de direitos e responsabilidades", "Explicação dos caminhos possíveis"],
  },
  {
    title: "Acompanhamento jurídico", icon: ShieldCheck,
    summary: "Comunicação clara para você compreender as etapas e as providências relacionadas ao seu caso.",
    details: "Compreender o andamento de uma demanda faz parte do atendimento. Converse com a equipe sobre as etapas, as providências e as formas de acompanhamento aplicáveis à sua situação. O escopo do trabalho é definido conforme a análise do caso.",
    topics: ["Explicação das etapas do atendimento", "Orientação sobre providências e documentos", "Esclarecimento de dúvidas ao longo do trabalho", "Comunicação com a equipe do escritório"],
  },
];

function Heading({
  children,
  description,
  light = false,
}: {
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">

      <h2
        className={
          light
            ? "font-display text-[2rem] leading-[1.18] tracking-[-0.025em] text-white sm:text-[2.5rem] lg:text-[3rem]"
            : "font-display text-[2rem] leading-[1.18] tracking-[-0.025em] text-ink sm:text-[2.5rem] lg:text-[3rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-brand-100"
              : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] =
    useState<(typeof areas)[number] | null>(null);

  const dialogRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    if (!activeArea) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const content = contentRef.current;
    content?.setAttribute("inert", "");
    const timer = window.setTimeout(() => dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus(), 0);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
      if (event.key !== "Tab") return;
      const controls = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
      content?.removeAttribute("inert");
      previousFocus?.focus();
    };
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-ivory text-ink">
        <div ref={contentRef}>
        <a href="#inicio" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-none focus:bg-white focus:p-4 focus:text-ink">Ir para o conteúdo</a>
        <header className="brand-header sticky top-0 z-40 border-b border-white/15 bg-brand-950 text-white">
          <div className="mx-auto flex h-[100px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[112px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Rodrigues de Carvalho Advogados — início"
              onClick={closeMenu}
              className="shrink-0"
            >
              <Image
                src={brand.logo}
                width={1774}
                height={887}
                alt={brand.businessName}
                preload
                className="h-auto w-[152px] min-[360px]:w-[170px] sm:w-[190px]"
                sizes="(max-width: 359px) 152px, (max-width: 640px) 170px, 190px"
              />
            </a>
            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#atuacao">
                Atendimento
              </a>
              <a className="nav-link" href="#sobre">
                Sobre
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações
              </a>
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </nav>
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={contact}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da Rodrigues de Carvalho Advogados"
                className="grid size-11 place-items-center rounded-none border border-white/25 text-gold-muted transition-colors hover:border-brand-400 hover:bg-brand-900"
              >
                <WhatsAppMark size={17} strokeWidth={1.7} />
              </a>
              <GlowingButton
                href={whatsapp}
                target="_blank"
                size="sm"
                className="rounded-none"
              >
                WhatsApp <ArrowUpRight size={14} />
              </GlowingButton>
            </div>
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 shrink-0 place-items-center rounded-none border border-white/25 text-gold-muted lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="absolute inset-x-0 top-full overflow-hidden border-b border-ink/10 bg-ivory px-6 lg:hidden"
              >
                <div className="mx-auto flex max-h-[calc(100dvh-96px)] max-w-7xl flex-col gap-1 overflow-y-auto py-4 sm:max-h-[calc(100dvh-112px)]">
                  {[
                    ["Início", "#inicio"],
                    ["Atendimento", "#atuacao"],
                    ["Sobre", "#sobre"],
                    ["Avaliações no Google", "#avaliacoes"],
                    ["Contato", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm text-ink-soft transition-colors hover:text-brand-700"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-none bg-gold-muted px-5 py-3.5 text-sm font-semibold text-brand-950"
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    <Phone size={15} /> WhatsApp
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        <section
          id="inicio"
          className="brand-hero relative isolate overflow-hidden scroll-mt-28 border-b border-white/15 bg-brand-950"
        >
          <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[640px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-12 lg:py-16">
            <motion.div
              initial={false}
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.h1
                variants={reveal}
                className="max-w-[720px] font-display text-[2.25rem] leading-[1.18] tracking-[-0.025em] text-ink sm:text-[3rem] lg:text-[3.25rem]"
              >
                Seus direitos merecem{" "}
                <span className="text-brand-700">atenção e clareza.</span>
              </motion.h1>
              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Na Rodrigues de Carvalho Advogados, cada situação começa com uma escuta atenta. Orientação jurídica com responsabilidade e proximidade, em Manhumirim, Minas Gerais.
              </motion.p>
              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={whatsapp}
                  target="_blank"
                  size="lg"
                  className="rounded-none"
                >
                  <WhatsAppMark size={17} /> Fale com nossa equipe
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-1 py-3 text-sm font-medium text-ink transition-colors hover:text-brand-700"
                >
                  Nosso atendimento{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>
              <motion.div
                variants={reveal}
                className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/10 pt-5 text-xs text-ink-soft"
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} className="text-brand-700" />
                  {brand.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MessageCircle size={15} className="text-brand-700" />
                  Atendimento com agendamento
                </span>
                <a href="#avaliacoes" className="inline-flex items-center gap-2 py-2 text-sm text-brand-700 underline underline-offset-4">
                  <Star size={15} aria-hidden="true" /> Avaliações no Google
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[520px] lg:ml-auto lg:mr-0"
            >
              <figure className="hero-signature">
                <Image
                  src={brand.portrait}
                  alt="Equipe da Rodrigues de Carvalho Advogados no escritório em Manhumirim"
                  width={680}
                  height={453}
                  preload
                  sizes="(max-width: 640px) 90vw, (max-width: 1023px) 520px, 480px"
                  className="h-auto w-full"
                />
                <figcaption className="flex flex-col gap-2 border-t border-gold-muted/40 bg-brand-900 px-5 py-5 text-left leading-6 text-brand-100">
                  <span className="font-sans text-sm font-semibold leading-6 tracking-[0.02em] text-white">Rodrigues de Carvalho Advogados</span>
                  <span className="text-xs tracking-[0.06em]">Manhumirim · Minas Gerais</span>
                </figcaption>
              </figure>
            </motion.div>
          </div>
        </section>

        <section
          aria-label="Informações de atendimento"
          className="brand-assurance border-b border-white/15 bg-brand-900"
        >
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["Atenção", "Escuta e análise do seu caso"],
              ["Proximidade", "Diálogo com nossa equipe"],
              ["Clareza", "Orientação em cada etapa"],
            ].map(([value, label], index) => (
              <div
                key={value}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-display text-2xl text-brand-700 sm:text-[1.7rem]">
                  {value}
                </span>
                <span className="max-w-[145px] text-[11px] leading-5 text-ink-soft">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="atuacao"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading

                description="Da primeira conversa à análise do seu caso, um atendimento pautado pela escuta, pelo sigilo e pela clareza."
              >
                Escuta para compreender.{" "}
                <span className="text-brand-700">Clareza para orientar.</span>
              </Heading>
              <p className="max-w-[250px] pb-1 text-xs leading-6 text-ink-soft">
                Conheça os pilares do nosso atendimento. Fale com a equipe para conversar sobre a sua demanda.
              </p>
            </motion.div>
            <motion.div
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 divide-y divide-ink/15 border-y border-ink/15"
            >
              {areas.map((area) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.title}
                    variants={reveal}
                    className="group grid items-start gap-5 py-8 sm:grid-cols-[48px_1fr_auto] sm:gap-7 sm:py-9"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-none border border-ink/20 text-ink">
                        <Icon size={21} strokeWidth={1.5} />
                      </span>
                    </div>
                    <div>
                    <h3 className="max-w-xl font-display text-[1.55rem] sm:text-[1.8rem] leading-tight text-ink">
                      {area.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[13px] leading-6 text-ink-soft">
                      {area.summary}
                    </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      aria-haspopup="dialog"
                      aria-label={`Saiba mais sobre ${area.title.toLowerCase()}`}
                      className="group/link inline-flex min-h-11 w-fit items-center gap-2 text-xs font-semibold text-brand-800 hover:text-brand-700 sm:self-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-700"
                    >
                      Saiba mais{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section id="sobre" className="brand-about scroll-mt-28 bg-brand-950 py-20 sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-12">
            <figure className="mx-auto flex w-full max-w-[460px] flex-col justify-center bg-brand-950 px-7 py-14 sm:px-10 lg:mx-0">
              <Image src={brand.logo} alt="Rodrigues de Carvalho Advogados — logotipo original" width={1774} height={887} sizes="(max-width: 640px) 80vw, 380px" className="h-auto w-full" />
              <figcaption className="mt-5 border-t border-brand-400/30 py-5 text-sm text-brand-100">Responsabilidade em cada orientação.</figcaption>
            </figure>
            <div>
              <Heading>Compromisso com o Direito.{" "}<span className="text-brand-700">Atenção às pessoas.</span></Heading>
              <h3 className="about-wordmark mt-8 font-sans text-sm font-semibold uppercase leading-6 tracking-[0.08em] text-brand-800">Rodrigues de Carvalho Advogados</h3>
              <p className="about-tenure mt-3 text-xs font-medium leading-6 tracking-[0.04em] text-ink-soft">Mais de três décadas de atuação · Manhumirim, Minas Gerais</p>
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft">Fundada há mais de três décadas, a Rodrigues de Carvalho Advogados construiu uma trajetória pautada pela ética, pela integridade e pelo rigor técnico. Em Manhumirim, Minas Gerais, reunimos experiência e formação especializada para oferecer orientação jurídica com atenção às particularidades de cada caso.</p>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft">Nossa prática alia profundidade acadêmica, atenção aos detalhes e compromisso com a justiça. Buscamos soluções que atendam às necessidades de cada cliente, com transparência e responsabilidade em todas as etapas do atendimento.</p>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft">Colocamos nosso conhecimento e nossa experiência a serviço de quem busca orientação para compreender seus direitos e decidir os próximos passos.</p>
              <a href={contact} target="_blank" rel="noopener noreferrer" className="about-link group mt-8 inline-flex min-h-11 items-center gap-2 border-b border-brand-700/40 py-2 text-sm font-semibold text-brand-800 transition-colors hover:text-brand-700">Conheça o atendimento <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-white/10 bg-brand-900 py-20 text-white sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20 lg:px-12">
            <Heading

              light
              description="Decisões sobre seus direitos merecem informação e cuidado. Do primeiro contato ao acompanhamento, entenda como funciona o atendimento."
            >
              Clareza para compreender cada{" "}
              <span className="text-brand-200">etapa.</span>
            </Heading>
            <motion.div
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/15"
            >
              {[
                [
                  "Primeiro, a sua história",
                  "Conte sua situação pelo WhatsApp e receba informações para agendar um atendimento com nossa equipe em Manhumirim.",
                ],
                [
                  "Depois, os documentos",
                  "Seu histórico e os documentos apresentados são analisados com atenção às particularidades da sua demanda.",
                ],
                [
                  "Um caminho compreensível",
                  "Você recebe explicações sobre as alternativas, os próximos passos e o acompanhamento da sua demanda, com atenção e sigilo.",
                ],
              ].map(([title, description]) => (
                <motion.div
                  key={title}
                  variants={reveal}
                  className="py-6 first:pt-0 sm:py-7"
                >
                  <div>
                    <h3 className="font-display text-2xl">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-brand-100">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-linen py-20 sm:py-24" aria-labelledby="questions-title">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
            <h2 id="questions-title" className="font-display text-3xl leading-tight text-ink sm:text-4xl">Antes da nossa primeira conversa.</h2>
            <div className="divide-y divide-ink/15 border-y border-ink/15">
              {[
                ["Como funciona o primeiro contato?", `Envie uma mensagem pelo WhatsApp ou ligue para ${brand.phone}. Conte brevemente sua situação para receber informações sobre o atendimento e os documentos iniciais necessários.`],
                ["Onde fica o escritório?", `O escritório fica na ${brand.address}. Entre em contato para combinar sua visita.`],
                ["Como agendar uma consulta?", "Fale com a equipe pelo WhatsApp ou por telefone. Você receberá informações sobre a disponibilidade, a modalidade do atendimento e os documentos iniciais para sua demanda."],
                ["Quais documentos devo separar?", "Os documentos variam conforme a situação. Documentos pessoais e registros relacionados à sua demanda podem ajudar na análise. No agendamento, você receberá orientação sobre o que apresentar para o seu caso."],
              ].map(([question, answer]) => (
                <details key={question} className="group py-6">
                  <summary className="cursor-pointer text-base font-semibold text-ink marker:text-brand-700">{question}</summary>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-ink-soft">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <Heading description="Trechos de avaliações publicadas no perfil da Rodrigues de Carvalho Advogados no Google.">
                Conheça outras{" "}
                <span className="text-brand-700">experiências.</span>
              </Heading>
              <a href={reviews} target="_blank" rel="noopener noreferrer" aria-label={`Nota ${brand.googleRating.toFixed(1).replace(".", ",")} de 5. Ver as ${brand.googleReviewCount} avaliações no Google`} className="group flex w-fit flex-col gap-3 border-l border-ink/15 py-1 pl-6 text-ink transition-colors hover:text-brand-700">
                <span className="flex items-baseline gap-3">
                  <span className="text-4xl font-semibold tracking-[-0.03em]">{brand.googleRating.toFixed(1).replace(".", ",")}</span>
                  <span className="text-sm text-ink-soft">de 5 no Google</span>
                </span>
                <span className="flex gap-1 text-brand-700" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill="currentColor" strokeWidth={1.5} />)}
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-semibold">{brand.googleReviewCount} avaliações no Google <ArrowUpRight size={15} aria-hidden="true" /></span>
              </a>
            </div>
            <div className="mt-12 grid divide-y divide-ink/15 border-y border-ink/15 md:grid-cols-3 md:divide-x md:divide-y-0">
              {googleReviews.map((review) => (
                <figure key={review.author} className="flex min-w-0 flex-col gap-6 py-8 md:px-8 md:first:pl-0 md:last:pr-0">
                  <span className="flex gap-1 text-brand-700" role="img" aria-label={`${review.rating} de 5 estrelas`}>
                    {Array.from({ length: review.rating }, (_, index) => <Star key={index} size={15} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />)}
                  </span>
                  <blockquote className="flex-1 text-lg font-medium leading-8 text-ink">
                    <p>“{review.excerpt}”</p>
                  </blockquote>
                  <figcaption className="flex flex-col items-start gap-2">
                    <span className="text-sm font-semibold text-ink">{review.author}</span>
                    <a href={review.url} target="_blank" rel="noopener noreferrer" aria-label={`Ler a avaliação de ${review.author} no Google`} className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-brand-700 underline underline-offset-4 transition-colors hover:text-brand-800">Ler no Google <ArrowUpRight size={14} aria-hidden="true" /></a>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-ink-soft">Trechos de avaliações públicas. Nota e quantidade consultadas em {brand.googleReviewsCheckedOn}. Leia os relatos completos no Google.</p>
          </div>

        </section>

        <section
          id="contato"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading

                description="Precisa de orientação jurídica? Fale com a Rodrigues de Carvalho Advogados para receber informações e agendar seu atendimento."
              >
                Um primeiro contato com{" "}
                <span className="text-brand-700">tranquilidade.</span>
              </Heading>
              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={whatsapp}
                  target="_blank"
                  size="lg"
                  className="rounded-none"
                >
                  <WhatsAppMark size={17} /> Fale com nossa equipe
                </GlowingButton>
                <a href={telephone} className="inline-flex min-h-11 items-center gap-2 text-sm text-brand-700 hover:text-brand-800"><Phone size={16} /> Ligue: {brand.phone}</a>
                <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="contact-handle inline-flex min-h-11 max-w-full items-center gap-2 py-2 text-sm text-brand-700 hover:text-brand-800"><Camera size={16} /> {brand.instagramHandle}</a>
              </div>
            </div>
            <div className="relative overflow-hidden border border-ink/10 bg-white p-7 sm:p-10">
              <div className="absolute right-0 top-0 h-1 w-28 bg-brand-600" />
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-none bg-brand-50 text-brand-700">
                  <MapPin size={21} strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink">Nosso escritório em Manhumirim</h3>
                </div>
              </div>
              <p className="mt-6 text-sm font-semibold text-brand-700">Rodrigues de Carvalho Advogados</p>
              <address className="mt-2 max-w-md not-italic text-[14px] leading-7 text-ink-soft">
                {brand.address}
              </address>
              <div className="my-7 h-px bg-ink/10" />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Entre em contato para agendar sua visita.
                </p>
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-none border border-ink/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
                >
                  Ver no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/15 bg-brand-950 px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
                O primeiro passo é conversar.
              </h2>
            </div>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-none bg-white px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-800 transition-transform hover:-translate-y-0.5"
            >
              Fale pelo WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <footer className="brand-footer bg-brand-950 px-5 py-12 text-brand-100 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <div className="inline-flex">
                <Image
                  src={brand.logo}
                  width={1774}
                  height={887}
                  alt={brand.businessName}
                  className="h-auto w-[240px]"
                  sizes="240px"
                />
              </div>
              <p className="mt-4 max-w-xs text-xs leading-6 text-ink-soft">
                Orientação jurídica com atenção, clareza e responsabilidade em Manhumirim, Minas Gerais.
              </p>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-ink-soft">
                <a className="footer-link" href="#atuacao">
                  Nosso atendimento
                </a>
                <a className="footer-link" href="#sobre">
                  Sobre o escritório
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Perfil no Google
                </a>
                <a className="footer-link" href="#contato">
                  Contato e endereço
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                Informações
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-ink-soft">
                <a
                  href={telephone}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Phone size={14} /> {brand.phone}
                </a>
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  {brand.address}
                </a>
                <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="contact-handle footer-link inline-flex max-w-full items-center gap-2"><Camera size={14} /> {brand.instagramHandle}</a>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-ink/15 pt-5 text-[10px] text-ink-soft sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {brand.businessName}. Todos os direitos
              reservados.
            </p>
            <p>
              Conteúdo informativo. Cada situação deve ser analisada
              individualmente.
            </p>
          </div>
        </footer>

        </div>
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-ink/55 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90dvh] w-full overflow-y-auto rounded-t-sm bg-ivory p-7 shadow-card sm:max-w-xl sm:rounded-none sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes do atendimento"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-none border border-ink/15 text-ink transition-colors hover:text-brand-700"
                >
                  <X size={18} />
                </button>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-display text-[1.7rem] leading-tight text-ink sm:text-3xl"
                >
                  {activeArea.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>
                <ul className="mt-6 space-y-3">
                  {activeArea.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-3 text-sm leading-6 text-ink"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-none bg-brand-700" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <GlowingButton
                  href={whatsappFor(activeArea.title.toLowerCase())}
                  target="_blank"
                  size="md"
                  className="mt-8 w-full rounded-none sm:w-auto"
                >
                  <Phone size={15} /> Conversar sobre este atendimento
                  <ArrowUpRight size={15} />
                </GlowingButton>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
