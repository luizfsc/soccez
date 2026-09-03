import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Menu, X } from 'lucide-react'
import { BR, US } from 'country-flag-icons/react/3x2'

const ticketUrl = 'https://ticketez.com.br'
const stages = [
  { image: '/assets/etapa-belo-horizonte.png', propertyLogo: '/assets/supermercados-bh.png' },
  { image: '/assets/hero.jpg.png', propertyLogo: '/assets/supermercados-bh.png' },
  { image: '/assets/etapa-uberaba.png', propertyLogo: '/assets/supermercados-bh.png' },
  { image: '/assets/etapa-contagem.png', propertyLogo: '/assets/coimbra.png' },
  { image: '/assets/hero.jpg.png', propertyLogo: '/assets/cruzeiro.png' },
]

function LanguageSwitch() {
  const { i18n } = useTranslation()
  const current = i18n.language.startsWith('en') ? 'en' : 'pt'
  const Flag = { pt: BR, en: US }
  return <div className="language-switch" aria-label="Language selector">
    {['pt', 'en'].map(lang => <button key={lang} className={current === lang ? 'active' : ''} onClick={() => i18n.changeLanguage(lang)} aria-label={lang === 'pt' ? 'Português' : 'English'}>
      {(() => { const FlagIcon = Flag[lang]; return <FlagIcon /> })()} <span>{lang.toUpperCase()}</span>
    </button>)}
  </div>
}

function App() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(true)
  const [stage, setStage] = useState(0)

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  const nav = [['property', 'propriedade'], ['stages', 'etapas'], ['audiences', 'publicos'], ['partners', 'parceiros'], ['technology', 'tecnologia']]
  const partnerLogos = [
    ['/assets/supermercados-bh.png', 'Supermercados BH'],
    ['/assets/ticketez.png', 'TicketEZ'],
    ['/assets/coimbra.png', 'Coimbra FC Porto'],
    ['/assets/cruzeiro.png', 'Cruzeiro Esporte Clube'],
  ]
  const propertyCards = [
    ['/assets/etapa-belo-horizonte.png', '/assets/supermercados-bh.png'],
    ['/assets/hero.jpg.png', '/assets/cruzeiro.png'],
    ['/assets/etapa-contagem.png', '/assets/coimbra.png'],
    ['/assets/ticketez-mineirao-v2.png', '/assets/ticketez.png'],
  ]

  return <div className="app-shell">
    {modalOpen && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="simulation-title">
      <div className="modal-card">
        <span className="eyebrow">{t('modal.label')}</span>
        <h2 id="simulation-title">{t('modal.title')}</h2>
        <p>{t('modal.text')}</p>
        <button className="button primary" onClick={() => setModalOpen(false)}>{t('modal.close')}</button>
      </div>
    </div>}

    <header className="site-header">
      <a href="#top" className="brand"><img src="/assets/soccez-logo.png" alt="Soccez" /></a>
      <nav className={menuOpen ? 'open' : ''}>
        {nav.map(([key, id]) => <a key={key} href={`#${id}`} onClick={() => setMenuOpen(false)}>{t(`nav.${key}`)}</a>)}
        <LanguageSwitch />
      </nav>
      <div className="header-actions">
        <LanguageSwitch />
        <a className="button header-cta" href={ticketUrl} target="_blank" rel="noreferrer">{t('nav.registrations')} <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Menu">{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>

    <main id="top">
      <section className="hero">
        <img src="/assets/hero.jpg.png" alt="" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content page-width">
          <span className="eyebrow light">{t('hero.eyebrow')}</span>
          <h1>{t('hero.title1')} <em>{t('hero.title2')}</em></h1>
          <p>{t('hero.text')}</p>
          <div className="hero-actions"><a className="button primary" href="#etapas">{t('hero.primary')}</a><a href="#propriedade" className="text-link">{t('hero.secondary')} <ArrowDown size={16} /></a></div>
        </div>
        <div className="hero-stamp"><small>{t('hero.stamp')}</small><strong>{t('hero.stamp2')}</strong></div>
      </section>

      <section id="propriedade" className="section manifesto page-width">
        <div><span className="eyebrow">{t('manifesto.eyebrow')}</span><h2>{t('manifesto.title1')} <em>{t('manifesto.title2')}</em></h2></div>
        <div className="manifesto-side"><p>{t('manifesto.text')}</p>{[1,2,3].map(n => <div className="line-link" key={n}>{t(`manifesto.link${n}`)} <ArrowUpRight size={18} /></div>)}</div>
      </section>

      <section id="etapas" className="section stages">
        <div className="page-width">
          <span className="eyebrow">{t('stages.eyebrow')}</span>
          <div className="section-title-row"><h2>{t('stages.title')}</h2><p>{t('stages.text')}</p></div>
          <div className="stage-frame">
            <img src={stages[stage].image} alt={t(`stages.items.${stage}.1`)} />
            <div className="stage-shade" />
            <div className="stage-sponsors"><span>Realização e tecnologia</span><img src="/assets/supermercados-bh.png" alt="Supermercados BH"/><img src="/assets/ticketez.png" alt="TicketEZ"/></div>
            <div className="stage-copy"><span>0{stage + 1}</span><div className="stage-heading"><div className="stage-name"><img src={stages[stage].propertyLogo} alt=""/><h3>{t(`stages.items.${stage}.0`)}</h3></div><strong className="stage-location">{t(`stages.items.${stage}.1`)}</strong></div><div><p>{t('stages.soon')}</p><a href={ticketUrl} target="_blank" rel="noreferrer">{t('stages.ticket')} <ArrowUpRight size={18} /></a></div></div>
          </div>
          <div className="carousel-controls"><button onClick={() => setStage((stage + stages.length - 1) % stages.length)} aria-label={t('stages.previous')}><ArrowLeft /></button><div className="progress">{stages.map((_, i) => <i className={i === stage ? 'active' : ''} key={i} />)}</div><button onClick={() => setStage((stage + 1) % stages.length)} aria-label={t('stages.next')}><ArrowRight /></button></div>
        </div>
      </section>

      <section id="publicos" className="section business-section">
        <div className="page-width"><span className="eyebrow">{t('business.eyebrow')}</span><h2>{t('business.title')}</h2>
          <div className="business-grid">
            <article className="business-card academy-card"><span>01</span><h3>{t('business.academyTitle')}</h3><p>{t('business.academyText')}</p><ul>{t('business.academyItems',{returnObjects:true}).map(item=><li key={item}><CheckCircle2 size={17}/>{item}</li>)}</ul><a className="button primary" href="mailto:contato@soccez.com.br?subject=Escolinha%20parceira">{t('business.academyCta')} <ArrowUpRight size={17}/></a></article>
            <article className="business-card club-card"><span>02</span><h3>{t('business.clubTitle')}</h3><p>{t('business.clubText')}</p><ul>{t('business.clubItems',{returnObjects:true}).map(item=><li key={item}><CheckCircle2 size={17}/>{item}</li>)}</ul><a className="button primary" href="mailto:contato@soccez.com.br?subject=Evento%20oficial%20do%20clube">{t('business.clubCta')} <ArrowUpRight size={17}/></a></article>
            <article className="business-card brand-card"><span>03</span><h3>{t('business.brandTitle')}</h3><p>{t('business.brandText')}</p><ul>{t('business.brandItems',{returnObjects:true}).map(item=><li key={item}><CheckCircle2 size={17}/>{item}</li>)}</ul><a className="button white" href="mailto:contato@soccez.com.br?subject=Patrocínio">{t('business.brandCta')} <ArrowUpRight size={17}/></a></article>
          </div>
        </div>
      </section>

      <section className="section numbers"><div className="page-width numbers-inner"><div><span className="eyebrow">{t('numbers.eyebrow')}</span><h2>{t('numbers.title')}</h2></div><div className="number-grid">{t('numbers.items', { returnObjects: true }).map(([value,label]) => <div className="number-card" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div></section>

      <section className="section owned-properties">
        <div className="page-width"><span className="eyebrow">{t('properties.eyebrow')}</span><h2>{t('properties.title')}</h2><article className="property-feature"><div className="property-art"><img src="/assets/leandro-cup.png" alt="Leandro Guerreiro Cup"/><span>{t('properties.badge')}</span></div><div><span className="property-index">01 / PROPRIEDADE</span><h3>{t('properties.cupTitle')}</h3><p>{t('properties.cupText')}</p><a href="#contato">Produced by Soccez <ArrowUpRight size={17}/></a></div></article>
          <div className="property-grid">{propertyCards.map(([image,logo],i)=>{const copy=t(`properties.items.${i}`,{returnObjects:true});return <article className="property-card" key={copy[0]}><img className="property-bg" src={image} alt=""/><div className="property-card-shade"/><img className="property-logo" src={logo} alt={copy[0]}/><div><span>0{i+2} / {t('properties.collaboration')}</span><h3>{copy[0]}</h3><p>{copy[1]}</p></div></article>})}</div>
        </div>
      </section>

      <section id="parceiros" className="section partners page-width"><span className="eyebrow">{t('partners.eyebrow')}</span><h2>{t('partners.title')}</h2><p>{t('partners.text')}</p><div>{partnerLogos.map(([src,alt],i)=><div className={`partner-logo ${i===0?'featured':''}`} key={src}><img src={src} alt={alt}/></div>)}</div></section>

      <section id="tecnologia" className="technology-banners">
        <a className="ticket-cover page-width" href={ticketUrl} target="_blank" rel="noreferrer"><img src="/assets/ticketez-mineirao-v2.png" alt="Menino entrando no Mineirão para uma experiência de futebol com a TicketEZ"/><div className="ticket-cover-shade"/><div><img src="/assets/ticketez.png" alt="TicketEZ"/><span>{t('ticket.eyebrow')}</span><h3>{t('ticket.title1')} {t('ticket.title2')}</h3><strong>{t('ticket.cta')} <ArrowUpRight size={17}/></strong></div></a>
        <div className="tech-light page-width"><img className="tech-light-bg" src="/assets/drafut-matchos-light.png" alt="Infraestrutura tecnológica clara para análise e scouting no futebol"/><div className="tech-light-shade"/><div className="tech-light-content"><span className="eyebrow">{t('tech.eyebrow')}</span><div className="tech-brands"><img src="/assets/drafut.png" alt="DRAFuT"/><b>+</b><strong>MatchOS</strong></div><h2>{t('tech.title2')}</h2><p>{t('tech.text')}</p><div className="tech-pills">{t('tech.chips',{returnObjects:true}).map(c=><span key={c}>{c}</span>)}</div></div></div>
      </section>
      <section id="contato" className="section closing"><div className="page-width closing-inner"><div><span className="eyebrow light">{t('closing.eyebrow')}</span><h2>{t('closing.title1')} <em>{t('closing.title2')}</em></h2></div><a className="button white" href="mailto:contato@soccez.com.br">{t('closing.cta')} <ArrowUpRight size={17}/></a></div></section>
    </main>

    <footer><div className="page-width footer-inner"><img src="/assets/soccez-logo.png" alt="Soccez"/><p>{t('footer.text')}</p><div><a href="#">{t('footer.privacy')}</a><a href="#">{t('footer.terms')}</a></div></div></footer>
  </div>
}

export default App
