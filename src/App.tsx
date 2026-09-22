import { ArrowDownRight, ArrowUpRight, Brain, ChevronDown, Mail, MapPin, Menu, MessageCircle, Scale, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { raianaPortraitDataUrl } from "./hero-asset";
import { raianaLogoDataUrl } from "./logo-asset";

const message = "Olá, Raiana. Conheci seu trabalho pelo site e gostaria de saber mais sobre a psicoterapia.";
const whatsappUrl = `https://wa.me/5531987080657?text=${encodeURIComponent(message)}`;
const phases = [
  ["01", "Vida adulta", "Um espaço para compreender padrões, fortalecer sua autonomia e construir mais segurança para se posicionar nas relações, no trabalho e diante das próprias escolhas.", "Agendar uma conversa", "phase-sage"],
  ["02", "Adolescência", "Acompanhamento para atravessar mudanças, relações e desafios próprios dessa fase, favorecendo consciência, recursos emocionais e autonomia.", "Saber mais", "phase-rose"],
  ["03", "Envelhecimento", "A psicoterapia também pode acompanhar processos de mudança, reflexão, vínculos e experiências que atravessam o envelhecimento.", "Conhecer o atendimento", "phase-blue"],
];
const faqs = [
  ["Como funciona o primeiro contato?", "Você pode enviar uma mensagem pelo WhatsApp para saber mais e conversar sobre o agendamento."],
  ["Para quem é a psicoterapia?", "O trabalho é voltado principalmente para adultos. Adolescentes e idosos também podem ser acompanhados, de acordo com a necessidade de cada pessoa."],
  ["Qual é a abordagem utilizada?", "A condução é baseada na Terapia Cognitivo-Comportamental (TCC), uma abordagem fundamentada em evidências científicas que investiga a relação entre pensamentos, emoções e comportamentos."],
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
      <a className="brand" href="#inicio" aria-label="Raiana Fernandes, início"><img src={raianaLogoDataUrl} alt="Raiana Fernandes Psicóloga" /></a>
      <nav className="desktop-nav" aria-label="Seções do site"><a href="#psicoterapia">Psicoterapia</a><a href="#abordagem">Abordagem</a><a href="#sobre">Quem sou eu</a><a href="#contato">Contato</a></nav>
      <WhatsAppLink className="header-cta"><span>Agendar uma conversa</span><ArrowUpRight size={16} aria-hidden="true" /></WhatsAppLink>
      <details className="mobile-menu"><summary aria-label="Abrir menu"><Menu size={22} /></summary><nav aria-label="Menu móvel"><a href="#psicoterapia">Psicoterapia</a><a href="#abordagem">Abordagem</a><a href="#sobre">Quem sou eu</a><a href="#contato">Contato</a></nav></details>
    </header>

    <section className="hero hero-split" id="inicio" aria-labelledby="hero-title">
      <div className="hero-content content-wrap"><div className="hero-copy"><p className="eyebrow hero-kicker">Psicologia e psicoterapia</p>
        <h1 id="hero-title">Mais clareza para fazer escolhas.<em> Mais segurança para se posicionar.</em></h1>
        <p className="hero-summary">Psicoterapia para adultos com base na Terapia Cognitivo-Comportamental: um processo para compreender padrões, assumir o próprio papel e construir mudanças possíveis.</p>
        <div className="hero-actions"><WhatsAppLink className="button button-dark">Agendar uma conversa <ArrowUpRight size={18} aria-hidden="true" /></WhatsAppLink><a className="text-link" href="#psicoterapia">Conhecer a psicoterapia <ArrowDownRight size={18} aria-hidden="true" /></a></div>
      </div><div className="hero-portrait" aria-label="Retrato editorial de Raiana Fernandes"><div className="portrait-arch"><img src={raianaPortraitDataUrl} alt="Raiana Fernandes em retrato profissional, sentada em um ambiente claro e acolhedor" /></div><div className="hero-seal"><span>Consciência</span><strong>Autonomia</strong></div><p className="hero-side-note">TCC · acolhimento · responsabilidade</p></div></div><p className="hero-index" aria-hidden="true">01 / 05</p>
    </section>

    <div id="conteudo">
      <section className="intro section content-wrap" aria-labelledby="intro-title"><p className="eyebrow">Psicoterapia para adultos</p><div className="intro-grid"><h2 id="intro-title">Posicionar-se começa por compreender o que orienta suas escolhas.</h2><div><p className="body-large">A psicoterapia pode ajudar você a reconhecer pensamentos, emoções e padrões de comportamento para agir com mais consciência — sem terceirizar decisões que pertencem à sua própria vida.</p><a className="text-link" href="#psicoterapia">Entender como posso ajudar <ArrowDownRight size={18} aria-hidden="true" /></a></div></div></section>

      <section className="phases" id="fases" aria-labelledby="phases-title"><div className="content-wrap phases-heading"><p className="eyebrow">Públicos atendidos</p><h2 id="phases-title">A vida adulta no centro do cuidado.</h2><p className="phases-intro">O atendimento é direcionado principalmente a adultos. Adolescentes e idosos também encontram espaço de acompanhamento, respeitando as particularidades de cada fase.</p></div><div className="phase-list">{phases.map(([number, title, copy, action, tone]) => <article className={`phase ${tone}`} key={number}><div className="content-wrap phase-inner"><span className="phase-number">{number}</span><div className="phase-copy"><h3>{title}</h3><p>{copy}</p><WhatsAppLink className="text-link">{action} <ArrowUpRight size={18} aria-hidden="true" /></WhatsAppLink></div><div className="phase-mark" aria-hidden="true">{number}</div></div></article>)}</div></section>

      <section className="therapy section content-wrap" id="psicoterapia" aria-labelledby="therapy-title"><div className="therapy-label"><span className="line" /><p className="eyebrow">Psicoterapia</p></div><div className="therapy-grid"><h2 id="therapy-title">Acolhimento para compreender. Clareza para agir.</h2><div className="therapy-copy"><p className="body-large">O processo terapêutico oferece espaço para olhar com profundidade para sua história, suas relações e a forma como você tem respondido ao que vive.</p><p>Não se trata de receber respostas prontas, mas de desenvolver recursos para reconhecer o que está ao seu alcance, assumir responsabilidade pelas próprias escolhas e se posicionar com mais segurança.</p><WhatsAppLink className="button button-dark">Quero saber mais <ArrowUpRight size={18} aria-hidden="true" /></WhatsAppLink></div></div></section>

      <section className="approach section" id="abordagem" aria-labelledby="approach-title"><div className="content-wrap"><div className="approach-heading"><p className="eyebrow">Terapia Cognitivo-Comportamental</p><h2 id="approach-title">Ciência, acolhimento e participação ativa no processo.</h2><p className="body-large">A TCC é uma abordagem baseada em evidências científicas que ajuda a compreender como pensamentos, emoções e comportamentos se relacionam. A partir dessa leitura, o processo terapêutico constrói caminhos mais conscientes e aplicáveis à vida real.</p></div><div className="approach-grid"><article><Brain size={26} aria-hidden="true" /><span>01</span><h3>Compreender padrões</h3><p>Identificar pensamentos, reações e comportamentos que se repetem e influenciam suas experiências.</p></article><article><Scale size={26} aria-hidden="true" /><span>02</span><h3>Reconhecer seu papel</h3><p>Diferenciar o que não depende de você daquilo que pode ser escolhido, cuidado e transformado.</p></article><article><Sparkles size={26} aria-hidden="true" /><span>03</span><h3>Construir novas respostas</h3><p>Desenvolver recursos para agir com mais autonomia, coerência e segurança em diferentes contextos.</p></article></div></div></section>

      <section className="editorial-quote" aria-label="Mensagem sobre posicionamento"><div className="content-wrap"><p className="quote-mark" aria-hidden="true">“</p><p>Posicionar-se não é ter todas as certezas.</p><span>É reconhecer seus limites, sustentar suas escolhas e agir de forma mais coerente com quem você é.</span></div></section>

      <section className="about section content-wrap" id="sobre" aria-labelledby="about-title"><div className="about-visual"><img src={raianaPortraitDataUrl} alt="Retrato profissional de Raiana Fernandes em ambiente acolhedor" /></div><div className="about-copy"><p className="eyebrow">Quem sou eu</p><h2 id="about-title">Raiana Fernandes, psicóloga clínica e organizacional.</h2><p className="body-large">Minha atuação parte de uma visão ampla do desenvolvimento humano, considerando pensamentos, emoções, comportamentos, relações e os contextos dos quais cada pessoa faz parte.</p><p>Na clínica, conduzo o processo pela Terapia Cognitivo-Comportamental, unindo conhecimento técnico, escuta e direcionamentos claros. Meu trabalho é acolher sem retirar da pessoa o protagonismo sobre a própria história.</p><div className="credentials" aria-label="Formação e atuação profissional"><div><strong>Formação profissional</strong><span>Psicologia · atuação clínica e organizacional</span></div><div><strong>Abordagem clínica</strong><span>Terapia Cognitivo-Comportamental (TCC)</span></div><div><strong>Princípios de trabalho</strong><span>Ética · evidências científicas · autonomia</span></div></div></div></section>

      <section className="start section content-wrap" aria-labelledby="start-title"><div className="start-card"><p className="eyebrow">Primeiro contato</p><h2 id="start-title">Você não precisa ter tudo resolvido para começar a se posicionar.</h2><p>O primeiro contato pode ser um espaço para compreender sua necessidade, conhecer o atendimento e dar um passo possível em direção à mudança.</p><WhatsAppLink className="button button-olive">Falar com Raiana <MessageCircle size={18} aria-hidden="true" /></WhatsAppLink></div></section>

      <section className="details section content-wrap" id="contato" aria-labelledby="contact-title"><div className="details-heading"><p className="eyebrow">Atendimento e contato</p><h2 id="contact-title">Quando fizer sentido, a conversa pode começar por aqui.</h2></div><div className="contact-grid"><WhatsAppLink className="contact-item"><MessageCircle size={22} aria-hidden="true" /><span>WhatsApp</span><strong>(31) 98708-0657</strong><ArrowUpRight size={18} aria-hidden="true" /></WhatsAppLink><a className="contact-item" href="mailto:raiana@raianafernandes.com.br"><Mail size={22} aria-hidden="true" /><span>E-mail</span><strong>raiana@raianafernandes.com.br</strong><ArrowUpRight size={18} aria-hidden="true" /></a><div className="contact-item contact-static"><MapPin size={22} aria-hidden="true" /><span>Endereço</span><strong>Rua Poema, 220, Metalúrgico</strong><small>Atendimento sob agendamento</small></div></div></section>

      <section className="faq section content-wrap" aria-labelledby="faq-title"><div className="faq-heading"><p className="eyebrow">Antes de começar</p><h2 id="faq-title">Perguntas que podem ajudar nesse primeiro passo.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question} className="faq-item"><summary><span>{question}</span><ChevronDown size={21} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

      <section className="final-cta" aria-labelledby="final-title"><div className="content-wrap"><p className="eyebrow">Um começo possível</p><h2 id="final-title">Talvez o primeiro passo não precise ser ter todas as respostas.</h2><p>Pode ser apenas começar uma conversa.</p><WhatsAppLink className="button button-light">Falar com Raiana <ArrowUpRight size={18} aria-hidden="true" /></WhatsAppLink></div></section>
    </div>

    <footer className="site-footer content-wrap"><div className="footer-brand"><img src={raianaLogoDataUrl} alt="Raiana Fernandes Psicóloga" /><p>Psicoterapia para adultos com base na Terapia Cognitivo-Comportamental.</p></div><div className="footer-links"><a href="https://www.instagram.com/psi.raianafernandes" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a><a href="mailto:raiana@raianafernandes.com.br"><Mail size={17} aria-hidden="true" /> E-mail</a></div><p className="copyright">© {new Date().getFullYear()} Raiana Fernandes</p></footer>
    <WhatsAppLink className="floating-whatsapp"><MessageCircle size={22} aria-hidden="true" /><span>WhatsApp</span></WhatsAppLink>
  </main>;
}
