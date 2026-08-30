import { ArrowDownRight, ArrowUpRight, ChevronDown, Mail, MapPin, Menu, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { raianaPortraitDataUrl } from "./hero-asset";

const message = "Olá, Raiana. Conheci seu trabalho pelo site e gostaria de saber mais sobre a psicoterapia.";
const whatsappUrl = `https://wa.me/5531987080657?text=${encodeURIComponent(message)}`;
const phases = [
  ["01", "Adolescência", "Um espaço de escuta para atravessar mudanças, experiências, relações e questões próprias desse momento da vida.", "Saber mais", "phase-rose"],
  ["02", "Vida adulta", "Um espaço para olhar com mais atenção para aquilo que tem atravessado sua história, suas relações, escolhas e diferentes momentos da vida.", "Agendar uma conversa", "phase-sage"],
  ["03", "Envelhecimento", "A psicoterapia também pode acompanhar processos de mudança, reflexão, vínculos e experiências que atravessam o envelhecimento.", "Conhecer o atendimento", "phase-blue"],
];
const faqs = [
  ["Como funciona o primeiro contato?", "Você pode enviar uma mensagem pelo WhatsApp para saber mais e conversar sobre o agendamento."],
  ["Para quem é a psicoterapia?", "Raiana Fernandes atua com psicoterapia para adolescentes, adultos e idosos."],
  ["Como funciona o agendamento?", "O atendimento é realizado sob agendamento. Entre em contato pelo WhatsApp para iniciar a conversa."],
  ["Onde fica o atendimento?", "Rua Poema, 220, Metalúrgico."],
];

function WhatsAppLink({ children, className = "" }: Readonly<{ children: ReactNode; className?: string }>) {
  return <a href={whatsappUrl} className={className} target="_blank" rel="noreferrer">{children}</a>;
}

export default function Home() {
  return <main>
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <header className="site-header" aria-label="Navegação principal">
      <a className="brand" href="#inicio" aria-label="Raiana Fernandes, início"><span>Raiana</span><span>Fernandes</span></a>
      <nav className="desktop-nav" aria-label="Seções do site"><a href="#psicoterapia">Psicoterapia</a><a href="#fases">Fases da vida</a><a href="#contato">Contato</a></nav>
      <WhatsAppLink className="header-cta"><span>Agendar uma conversa</span><ArrowUpRight size={16} aria-hidden="true" /></WhatsAppLink>
      <details className="mobile-menu"><summary aria-label="Abrir menu"><Menu size={22} /></summary><nav aria-label="Menu móvel"><a href="#psicoterapia">Psicoterapia</a><a href="#fases">Fases da vida</a><a href="#contato">Contato</a></nav></details>
    </header>

    <section className="hero hero-split" id="inicio" aria-labelledby="hero-title">
      <div className="hero-content content-wrap"><div className="hero-copy"><p className="eyebrow hero-kicker">Psicologia e psicoterapia</p>
        <h1 id="hero-title">Cada fase da vida traz perguntas diferentes.<em> Escuta para atravessar o que pede atenção.</em></h1>
        <p className="hero-summary">Psicoterapia para adolescentes, adultos e idosos, com atendimento sob agendamento.</p>
        <div className="hero-actions"><WhatsAppLink className="button button-dark">Agendar uma conversa <ArrowUpRight size={18} aria-hidden="true" /></WhatsAppLink><a className="text-link" href="#psicoterapia">Conhecer a psicoterapia <ArrowDownRight size={18} aria-hidden="true" /></a></div>
      </div><div className="hero-portrait" aria-label="Retrato editorial de Raiana Fernandes"><div className="portrait-arch"><img src={raianaPortraitDataUrl} alt="Raiana Fernandes em retrato profissional, sentada em um ambiente claro e acolhedor" /></div><div className="hero-seal"><span>Escuta</span><strong>Presença</strong></div><p className="hero-side-note">Adolescência · vida adulta · envelhecimento</p></div></div><p className="hero-index" aria-hidden="true">01 / 05</p>
    </section>

    <div id="conteudo">
      <section className="intro section content-wrap" aria-labelledby="intro-title"><p className="eyebrow">Raiana Fernandes</p><div className="intro-grid"><h2 id="intro-title">Cuidado que começa por reconhecer a sua história.</h2><div><p className="body-large">Cada pessoa vive relações, escolhas e mudanças de um jeito único. A psicoterapia pode ser um espaço para olhar com atenção para o que está sendo vivido.</p><a className="text-link" href="#fases">Entender como posso ajudar <ArrowDownRight size={18} aria-hidden="true" /></a></div></div></section>

      <section className="phases" id="fases" aria-labelledby="phases-title"><div className="content-wrap phases-heading"><p className="eyebrow">Diferentes fases da vida</p><h2 id="phases-title">Diferentes formas de precisar de cuidado.</h2></div><div className="phase-list">{phases.map(([number, title, copy, action, tone]) => <article className={`phase ${tone}`} key={number}><div className="content-wrap phase-inner"><span className="phase-number">{number}</span><div className="phase-copy"><h3>{title}</h3><p>{copy}</p><WhatsAppLink className="text-link">{action} <ArrowUpRight size={18} aria-hidden="true" /></WhatsAppLink></div><div className="phase-mark" aria-hidden="true">{number}</div></div></article>)}</div></section>

      <section className="therapy section content-wrap" id="psicoterapia" aria-labelledby="therapy-title"><div className="therapy-label"><span className="line" /><p className="eyebrow">Psicoterapia</p></div><div className="therapy-grid"><h2 id="therapy-title">Um espaço construído a partir da escuta.</h2><div className="therapy-copy"><p className="body-large">Psicoterapia é um processo de conversa, reflexão e compreensão. Um tempo reservado para elaborar experiências e olhar para o que faz sentido na sua própria trajetória.</p><p>Sem respostas prontas. Com atenção à singularidade de cada pessoa e ao momento que ela está vivendo.</p><WhatsAppLink className="button button-dark">Quero saber mais <ArrowUpRight size={18} aria-hidden="true" /></WhatsAppLink></div></div></section>

      <section className="editorial-quote" aria-label="Mensagem sobre escuta"><div className="content-wrap"><p className="quote-mark" aria-hidden="true">“</p><p>Cada pessoa chega com uma história diferente.</p><span>Por isso, o cuidado também precisa começar pela escuta.</span></div></section>

      <section className="about section content-wrap" aria-labelledby="about-title"><div className="about-visual"><img src={raianaPortraitDataUrl} alt="Retrato profissional de Raiana Fernandes em ambiente acolhedor" /><div className="about-orbit" aria-hidden="true" /></div><div className="about-copy"><p className="eyebrow">Sobre Raiana</p><h2 id="about-title">Presença, clareza e respeito à sua singularidade.</h2><p className="body-large">Raiana Fernandes atua com psicoterapia para adolescentes, adultos e idosos.</p><p>Mais informações sobre trajetória, formação e abordagem serão apresentadas aqui assim que estiverem disponíveis.</p></div></section>

      <section className="start section content-wrap" aria-labelledby="start-title"><div className="start-card"><p className="eyebrow">Primeiro contato</p><h2 id="start-title">Você não precisa saber exatamente o que dizer para começar.</h2><p>O primeiro contato também pode ser um espaço para entender melhor sua necessidade e conhecer como funciona o atendimento.</p><WhatsAppLink className="button button-olive">Falar com Raiana <MessageCircle size={18} aria-hidden="true" /></WhatsAppLink></div></section>

      <section className="details section content-wrap" id="contato" aria-labelledby="contact-title"><div className="details-heading"><p className="eyebrow">Atendimento e contato</p><h2 id="contact-title">Quando fizer sentido, a conversa pode começar por aqui.</h2></div><div className="contact-grid"><WhatsAppLink className="contact-item"><MessageCircle size={22} aria-hidden="true" /><span>WhatsApp</span><strong>(31) 98708-0657</strong><ArrowUpRight size={18} aria-hidden="true" /></WhatsAppLink><a className="contact-item" href="mailto:raiana@raianafernandes.com.br"><Mail size={22} aria-hidden="true" /><span>E-mail</span><strong>raiana@raianafernandes.com.br</strong><ArrowUpRight size={18} aria-hidden="true" /></a><div className="contact-item contact-static"><MapPin size={22} aria-hidden="true" /><span>Endereço</span><strong>Rua Poema, 220, Metalúrgico</strong><small>Atendimento sob agendamento</small></div></div></section>

      <section className="faq section content-wrap" aria-labelledby="faq-title"><div className="faq-heading"><p className="eyebrow">Antes de começar</p><h2 id="faq-title">Perguntas que podem ajudar nesse primeiro passo.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question} className="faq-item"><summary><span>{question}</span><ChevronDown size={21} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

      <section className="final-cta" aria-labelledby="final-title"><div className="content-wrap"><p className="eyebrow">Um começo possível</p><h2 id="final-title">Talvez o primeiro passo não precise ser ter todas as respostas.</h2><p>Pode ser apenas começar uma conversa.</p><WhatsAppLink className="button button-light">Falar com Raiana <ArrowUpRight size={18} aria-hidden="true" /></WhatsAppLink></div></section>
    </div>

    <footer className="site-footer content-wrap"><div className="footer-brand"><span>Raiana Fernandes</span><p>Psicoterapia para adolescentes, adultos e idosos.</p></div><div className="footer-links"><a href="https://www.instagram.com/psi.raianafernandes" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a><a href="mailto:raiana@raianafernandes.com.br"><Mail size={17} aria-hidden="true" /> E-mail</a></div><p className="copyright">© {new Date().getFullYear()} Raiana Fernandes</p></footer>
    <WhatsAppLink className="floating-whatsapp"><MessageCircle size={22} aria-hidden="true" /><span>WhatsApp</span></WhatsAppLink>
  </main>;
}
