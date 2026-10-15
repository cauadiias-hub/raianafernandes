import {
  ArrowDownRight, ArrowUpRight, Brain, BriefcaseBusiness, Building2, Check,
  ChevronDown, Compass, HeartHandshake, Mail, Menu, MessageCircle, ShieldCheck,
  Target, Users,
} from "lucide-react";
import type { FormEvent, ReactNode } from "react";
import { raianaLogoDataUrl } from "./logo-asset";

const phone = "5531987080657";
const clinicalMessage = "Olá, Raiana. Conheci seu trabalho pelo site e gostaria de saber mais sobre a psicoterapia.";
const clinicalWhatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(clinicalMessage)}`;

const organizationalServices = [
  { icon: ShieldCheck, title: "Riscos psicossociais relacionados ao trabalho", copy: "Apoio técnico na identificação, avaliação e prevenção de fatores psicossociais, conforme o escopo contratado e as necessidades reais da organização." },
  { icon: HeartHandshake, title: "Saúde mental no trabalho", copy: "Consultoria e orientação para fortalecer práticas de cuidado, relações profissionais e ambientes de trabalho mais saudáveis." },
  { icon: Users, title: "Desenvolvimento de lideranças", copy: "Ações voltadas à comunicação, gestão de conflitos, relações de confiança e desenvolvimento de lideranças mais conscientes." },
  { icon: Brain, title: "Educação e desenvolvimento humano", copy: "Palestras, ações educativas e programas construídos de acordo com o contexto, os objetivos e o público de cada organização." },
];

const values = [
  ["01", "Ciência e responsabilidade", "Conhecimento técnico, aprimoramento contínuo e respeito aos princípios éticos da Psicologia."],
  ["02", "Dignidade e singularidade", "Cada pessoa possui uma história, necessidades e possibilidades próprias de desenvolvimento."],
  ["03", "Acolhimento com clareza", "Escuta sensível, segurança, limites profissionais e responsabilidade técnica."],
  ["04", "Integridade e coerência", "Verdade, ética e transparência na relação com pessoas e organizações."],
  ["05", "Desenvolvimento humano", "Autoconhecimento, autonomia, aprendizagem e relações mais conscientes."],
  ["06", "Saúde mental compartilhada", "O bem-estar no trabalho também depende da liderança, das relações e da organização do trabalho."],
];

const faqs = [
  ["A quem se destina a psicoterapia?", "O atendimento clínico é voltado principalmente para adultos. A disponibilidade para adolescentes e idosos pode ser confirmada no primeiro contato."],
  ["Qual é a abordagem clínica?", "A condução é fundamentada na Terapia Cognitivo-Comportamental (TCC), abordagem baseada em evidências que considera a relação entre pensamentos, emoções e comportamentos."],
  ["Como funciona o primeiro contato clínico?", "O primeiro contato é feito diretamente pelo WhatsApp para esclarecer dúvidas sobre disponibilidade, modalidade e agendamento. Não é necessário relatar informações sensíveis pelo site."],
  ["Como são definidos os serviços para empresas?", "Cada projeto começa pela compreensão do contexto e da demanda. O escopo, as entregas e os limites técnicos são definidos em proposta específica, sem promessa de conformidade automática ou resultado garantido."],
  ["A consultoria substitui avaliações legais ou de saúde ocupacional?", "Não. A atuação psicológica organizacional integra uma análise técnica específica e, quando necessário, deve dialogar com outros profissionais e áreas responsáveis."],
];

function WhatsAppLink({ children, className = "", url = clinicalWhatsappUrl }: Readonly<{ children: ReactNode; className?: string; url?: string }>) {
  return <a href={url} className={className} target="_blank" rel="noreferrer">{children}</a>;
}

function handleCorporateSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    "Olá, Raiana. Conheci sua atuação organizacional pelo site e gostaria de conversar.", "",
    `Nome: ${data.get("nome") ?? ""}`, `Empresa: ${data.get("empresa") ?? ""}`,
    `E-mail: ${data.get("email") ?? ""}`, `WhatsApp: ${data.get("whatsapp") ?? ""}`,
    `Interesse: ${data.get("interesse") ?? ""}`,
  ].join("\n");
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

export default function Home() {
  return <main>
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <header className="site-header" aria-label="Navegação principal">
      <a className="brand" href="#inicio" aria-label="Raiana Fernandes, início"><img src={raianaLogoDataUrl} alt="Raiana Fernandes Psicóloga Clínica e Organizacional" /></a>
      <nav className="desktop-nav" aria-label="Seções do site"><a href="#clinica">Clínica</a><a href="#organizacional">Organizacional</a><a href="#sobre">Sobre mim</a><a href="#contato">Contato</a></nav>
      <a className="header-cta" href="#frentes"><span>Conhecer a atuação</span><ArrowDownRight size={16} aria-hidden="true" /></a>
      <details className="mobile-menu"><summary aria-label="Abrir menu"><Menu size={23} /></summary><nav aria-label="Menu móvel"><a href="#clinica">Clínica</a><a href="#organizacional">Organizacional</a><a href="#sobre">Sobre mim</a><a href="#contato">Contato</a></nav></details>
    </header>

    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="content-wrap hero-grid">
        <div className="hero-copy"><p className="eyebrow hero-kicker">Psicologia Clínica e Organizacional</p><h1 id="hero-title">Psicologia para pessoas.<em> Desenvolvimento para organizações.</em></h1><p className="hero-summary">Ciência, cuidado humano e estratégia para promover saúde mental, desenvolvimento emocional e relações de trabalho mais saudáveis.</p><div className="hero-actions"><a className="button button-dark" href="#clinica">Psicologia Clínica <ArrowDownRight size={18} aria-hidden="true" /></a><a className="button button-outline" href="#organizacional">Soluções para empresas <ArrowDownRight size={18} aria-hidden="true" /></a></div></div>
        <div className="hero-concept" aria-label="Duas frentes de atuação conectadas por um mesmo propósito"><div className="concept-orbit" aria-hidden="true"><span /><span /></div><p>Duas frentes.<br /><strong>Um mesmo propósito.</strong></p><div className="concept-label concept-label-one"><span>01</span> Pessoas</div><div className="concept-label concept-label-two"><span>02</span> Organizações</div></div>
      </div><p className="hero-side-note">Cuidar de pessoas · desenvolver relações · transformar ambientes</p>
    </section>

    <div id="conteudo">
      <section className="fronts section content-wrap" id="frentes" aria-labelledby="fronts-title">
        <div className="section-heading split-heading"><p className="eyebrow">Frentes de atuação</p><h2 id="fronts-title">O humano em todas as suas dimensões.</h2><p>As duas áreas se encontram no mesmo compromisso: compreender pessoas, fortalecer relações e contribuir para contextos mais saudáveis.</p></div>
        <div className="front-grid">
          <article className="front-card front-clinical"><span className="card-number">01</span><HeartHandshake size={28} aria-hidden="true" /><p className="eyebrow">Para pessoas</p><h3>Psicologia Clínica</h3><p>Um espaço de acolhimento, segurança e respeito à singularidade para desenvolver autoconhecimento, recursos emocionais e novas formas de se posicionar.</p><a className="text-link" href="#clinica">Conhecer a atuação clínica <ArrowDownRight size={18} aria-hidden="true" /></a></article>
          <article className="front-card front-organizational"><span className="card-number">02</span><Building2 size={28} aria-hidden="true" /><p className="eyebrow">Para empresas</p><h3>Psicologia Organizacional</h3><p>Saúde mental no trabalho, desenvolvimento de lideranças e prevenção de riscos psicossociais com olhar humano, técnico e estratégico.</p><a className="text-link" href="#organizacional">Conhecer as soluções <ArrowDownRight size={18} aria-hidden="true" /></a></article>
        </div>
      </section>

      <section className="clinic section" id="clinica" aria-labelledby="clinic-title"><div className="content-wrap clinic-grid"><div className="sticky-heading"><p className="eyebrow">Psicologia Clínica</p><h2 id="clinic-title">Um espaço de acolhimento, ciência e transformação.</h2></div><div className="clinic-content"><p className="body-large">Na clínica, o cuidado começa pela compreensão da sua história, das relações e dos contextos que influenciam a forma como você pensa, sente e age.</p><p>A Terapia Cognitivo-Comportamental oferece uma base científica para reconhecer padrões, desenvolver recursos emocionais e construir respostas mais conscientes para situações da vida cotidiana.</p><div className="clinical-pillars"><div><Brain size={22} aria-hidden="true" /><strong>Compreender</strong><span>Pensamentos, emoções e comportamentos.</span></div><div><Compass size={22} aria-hidden="true" /><strong>Desenvolver</strong><span>Autonomia e recursos emocionais.</span></div><div><Target size={22} aria-hidden="true" /><strong>Transformar</strong><span>Escolhas e formas de se posicionar.</span></div></div><div className="care-note"><strong>Público atendido</strong><p>Atendimento direcionado principalmente a adultos. A disponibilidade para adolescentes e idosos pode ser confirmada no primeiro contato.</p></div><WhatsAppLink className="button button-dark">Conversar sobre psicoterapia <MessageCircle size={18} aria-hidden="true" /></WhatsAppLink></div></div></section>

      <section className="organizational section" id="organizacional" aria-labelledby="organizational-title"><div className="content-wrap"><div className="section-heading organizational-heading"><p className="eyebrow">Psicologia Organizacional e Saúde Mental no Trabalho</p><h2 id="organizational-title">Cuidar das pessoas também é uma decisão estratégica.</h2><p className="body-large">A saúde mental no trabalho é influenciada pelas relações, pelas práticas de liderança, pelas condições e pela forma como o trabalho é organizado.</p></div><div className="services-grid">{organizationalServices.map(({ icon: Icon, title, copy }, index) => <article key={title} className="service-card"><div className="service-top"><Icon size={25} aria-hidden="true" /><span>0{index + 1}</span></div><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="scope-note"><BriefcaseBusiness size={28} aria-hidden="true" /><div><strong>Projetos construídos com responsabilidade técnica</strong><p>Cada trabalho parte da análise do contexto e da definição de um escopo específico. A atuação não promete eliminação de riscos, resultado garantido ou conformidade automática com a NR-1.</p></div><a className="button button-light" href="#contato-empresa">Solicitar uma conversa <ArrowDownRight size={18} aria-hidden="true" /></a></div></div></section>

      <section className="about section content-wrap" id="sobre" aria-labelledby="about-title">
        <div className="about-intro"><p className="eyebrow">Sobre mim</p><h2 id="about-title">Raiana Fernandes</h2><p className="about-role">Psicóloga, administradora e profissional de gestão e desenvolvimento humano.</p></div>
        <div className="about-story"><p className="body-large">Minha trajetória foi construída ao longo de mais de 15 anos nas áreas de crédito, finanças, gestão e desenvolvimento de pessoas.</p><p>Atuei em ambientes corporativos, na liderança de equipes e na gestão integrada de Desenvolvimento Humano Organizacional. Essa experiência ampliou minha compreensão sobre relações de trabalho, desafios de liderança, culturas organizacionais e a busca por resultados sustentáveis.</p><p>Na Psicologia, integro conhecimento científico, estratégia e humanidade. Na clínica, ofereço um espaço de acolhimento e desenvolvimento. Na atuação organizacional, uno Psicologia e experiência em gestão para apoiar empresas na construção de relações profissionais mais saudáveis e na prevenção de riscos psicossociais.</p><blockquote>“Resultados consistentes não precisam ser construídos à custa da saúde das pessoas.”</blockquote></div>
        <div className="career-grid" aria-label="Formação e trajetória profissional"><article className="career-feature"><span>15+</span><strong>anos de experiência</strong><p>Crédito, finanças, gestão, liderança e desenvolvimento humano.</p></article><div className="career-list"><p className="eyebrow">Formação e desenvolvimento</p><div><Check size={18} aria-hidden="true" /><span><strong>Graduação em Administração</strong></span></div><div><Check size={18} aria-hidden="true" /><span><strong>Graduação em Psicologia</strong></span></div><div><Check size={18} aria-hidden="true" /><span><strong>MBA em Gestão Financeira, Controladoria e Auditoria</strong></span></div><div><Check size={18} aria-hidden="true" /><span><strong>Pós-graduação em Neurociência</strong></span></div><div><Compass size={18} aria-hidden="true" /><span><strong>Em andamento:</strong> MBA em Gestão dos Fatores de Riscos Psicossociais da NR-1</span></div><div><Users size={18} aria-hidden="true" /><span><strong>2023:</strong> Programa de Aceleração de Carreira de Mulheres Negras da Vale</span></div></div></div>
      </section>

      <section className="purpose section" aria-labelledby="purpose-title"><div className="content-wrap"><div className="purpose-head"><p className="eyebrow">O que orienta esta atuação</p><h2 id="purpose-title">Ciência, estratégia e humanidade.</h2></div><div className="mission-vision"><article><span>Missão</span><p>Promover saúde mental e desenvolvimento humano por meio de uma atuação ética, científica e humanizada, fortalecendo pessoas e apoiando organizações na construção de ambientes mais saudáveis.</p></article><article><span>Visão</span><p>Ser reconhecida pela integração entre Psicologia, desenvolvimento humano e estratégia organizacional, contribuindo para que o cuidado com a saúde mental faça parte da vida, das relações e da gestão.</p></article></div><div className="values-grid">{values.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

      <section className="contact section content-wrap" id="contato" aria-labelledby="contact-title">
        <div className="contact-heading"><p className="eyebrow">Contato</p><h2 id="contact-title">Escolha por onde a conversa começa.</h2><p>Pessoas e organizações encontram caminhos de contato separados, com clareza e respeito à privacidade.</p></div>
        <div className="contact-paths"><article className="clinical-contact"><HeartHandshake size={29} aria-hidden="true" /><p className="eyebrow">Atendimento clínico</p><h3>Quero saber mais sobre psicoterapia</h3><p>Fale diretamente pelo WhatsApp para informações sobre disponibilidade, modalidade e agendamento.</p><p className="privacy-hint"><ShieldCheck size={17} aria-hidden="true" /> Não envie relatos clínicos ou dados sensíveis neste primeiro contato.</p><WhatsAppLink className="button button-dark">Falar com Raiana <MessageCircle size={18} aria-hidden="true" /></WhatsAppLink></article>
          <form className="corporate-form" id="contato-empresa" onSubmit={handleCorporateSubmit}><div className="form-heading"><Building2 size={29} aria-hidden="true" /><div><p className="eyebrow">Contato empresarial</p><h3>Vamos compreender a necessidade da sua organização</h3></div></div><div className="form-grid"><label>Nome<input name="nome" type="text" autoComplete="name" required /></label><label>Empresa<input name="empresa" type="text" autoComplete="organization" required /></label><label>E-mail profissional<input name="email" type="email" autoComplete="email" required /></label><label>WhatsApp<input name="whatsapp" type="tel" autoComplete="tel" required /></label><label className="form-full">Assunto de interesse<select name="interesse" required defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Riscos psicossociais relacionados ao trabalho</option><option>Saúde mental no trabalho</option><option>Desenvolvimento de lideranças</option><option>Palestras e ações educativas</option><option>Outro projeto organizacional</option></select></label></div><label className="consent"><input type="checkbox" required /><span>Autorizo o uso destes dados exclusivamente para responder ao meu contato. Li o <a href="#privacidade">aviso de privacidade</a>.</span></label><p className="form-note">O site não armazena os dados preenchidos. Ao enviar, uma mensagem será preparada no WhatsApp.</p><button className="button button-olive" type="submit">Preparar mensagem <ArrowUpRight size={18} aria-hidden="true" /></button></form>
        </div>
      </section>

      <section className="faq section content-wrap" aria-labelledby="faq-title"><div className="faq-heading"><p className="eyebrow">Antes de começar</p><h2 id="faq-title">Informações importantes.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question} className="faq-item"><summary><span>{question}</span><ChevronDown size={21} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

      <section className="privacy-section content-wrap" id="privacidade" aria-labelledby="privacy-title"><details className="privacy-details"><summary><ShieldCheck size={19} aria-hidden="true" /><span id="privacy-title">Aviso de privacidade e proteção de dados</span><ChevronDown size={20} aria-hidden="true" /></summary><div><p>Os dados informados no contato empresarial são utilizados somente para preparar a mensagem que será enviada pelo próprio usuário via WhatsApp. Este site não possui banco de dados e não armazena as informações do formulário.</p><p>Evite compartilhar informações de saúde, diagnósticos, relatos clínicos ou outros dados pessoais sensíveis em formulários ou mensagens iniciais. O tratamento de dados realizado posteriormente nos canais de atendimento deve observar finalidade, necessidade, segurança, sigilo profissional e os direitos previstos na LGPD.</p><p>Para dúvidas sobre privacidade, utilize o e-mail <a href="mailto:raiana@raianafernandes.com.br">raiana@raianafernandes.com.br</a>.</p></div></details></section>

      <section className="final-cta" aria-labelledby="final-title"><div className="content-wrap"><p className="eyebrow">Um propósito integrado</p><h2 id="final-title">Cuidar de pessoas. Desenvolver relações. Transformar ambientes.</h2><p>Psicologia, saúde mental e desenvolvimento humano a serviço de pessoas e organizações.</p><a className="button button-light" href="#contato">Iniciar uma conversa <ArrowUpRight size={18} aria-hidden="true" /></a></div></section>
    </div>

    <footer className="site-footer content-wrap"><div className="footer-brand"><img src={raianaLogoDataUrl} alt="Raiana Fernandes Psicóloga" /><p>Psicologia Clínica e Organizacional</p></div><div className="footer-links"><a href="#clinica">Clínica</a><a href="#organizacional">Organizacional</a><a href="#sobre">Sobre mim</a><a href="#privacidade">Privacidade</a></div><div className="footer-contact"><a href="https://www.instagram.com/psi.raianafernandes" target="_blank" rel="noreferrer">Instagram profissional <ArrowUpRight size={14} aria-hidden="true" /></a><a href="mailto:raiana@raianafernandes.com.br"><Mail size={15} aria-hidden="true" /> raiana@raianafernandes.com.br</a></div><p className="professional-id">Raiana Fernandes · Psicóloga e Administradora · Identificação profissional de Psicologia sujeita à confirmação do CRP antes da divulgação final.</p><p className="copyright">© {new Date().getFullYear()} Raiana Fernandes</p></footer>
    <WhatsAppLink className="floating-whatsapp"><MessageCircle size={22} aria-hidden="true" /><span>WhatsApp</span></WhatsAppLink>
  </main>;
}
