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

  const nav = [['property', 'propriedade'], ['stages', 'etapas'], ['audiences', 'publicos'], ['technology', 'tecnologia']]
  const audienceKeys = ['athlete', 'club', 'brand']
  const partnerLogos = [
    ['/assets/supermercados-bh.png', 'Supermercados BH'],
    ['/assets/ticketez.png', 'TicketEZ'],
    ['/assets/coimbra.png', 'Coimbra FC Porto'],
    ['/assets/cruzeiro.png', 'Cruzeiro Esporte Clube'],
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
            <div className="stage-copy"><span>0{stage + 1} · {t(`stages.items.${stage}.1`)}</span><div className="stage-name"><img src={stages[stage].propertyLogo} alt=""/><h3>{t(`stages.items.${stage}.0`)}</h3></div><div><p>{t('stages.soon')}</p><a href={ticketUrl} target="_blank" rel="noreferrer">{t('stages.ticket')} <ArrowUpRight size={18} /></a></div></div>
          </div>
          <div className="carousel-controls"><button onClick={() => setStage((stage + stages.length - 1) % stages.length)} aria-label={t('stages.previous')}><ArrowLeft /></button><div className="progress">{stages.map((_, i) => <i className={i === stage ? 'active' : ''} key={i} />)}</div><button onClick={() => setStage((stage + 1) % stages.length)} aria-label={t('stages.next')}><ArrowRight /></button></div>
        </div>
      </section>

      <section className="ticket-section">
        <div className="ticket-image"><img src="/assets/ticketez-football.png" alt="TicketEZ football" /></div>
        <div className="ticket-copy"><img src="/assets/ticketez.png" alt="TicketEZ" /><span className="eyebrow light">{t('ticket.eyebrow')}</span><h2>{t('ticket.title1')} <em>{t('ticket.title2')}</em></h2><p>{t('ticket.text')}</p><a href={ticketUrl} target="_blank" rel="noreferrer" className="button white">{t('ticket.cta')} <ArrowUpRight size={17} /></a></div>
      </section>

      <section id="publicos" className="section audiences page-width">
        <span className="eyebrow">{t('audiences.eyebrow')}</span><h2>{t('audiences.title')}</h2>
        <div className="audience-grid">{audienceKeys.map((key, i) => { const copy = t(`audiences.${key}`, { returnObjects: true }); return <article key={key}><span>0{i+1}</span><div><small>{copy[0]}</small><h3>{copy[1]}</h3><p>{copy[2]}</p></div><a href="#contato">{t('audiences.more')} <ArrowUpRight size={16}/></a></article> })}</div>
      </section>

      <section className="section business-section">
        <div className="page-width"><span className="eyebrow">{t('business.eyebrow')}</span><h2>{t('business.title')}</h2>
          <div className="business-grid">
            <article className="business-card club-card"><span>01</span><h3>{t('business.clubTitle')}</h3><p>{t('business.clubText')}</p><ul>{t('business.clubItems',{returnObjects:true}).map(item=><li key={item}><CheckCircle2 size={17}/>{item}</li>)}</ul><a className="button primary" href="mailto:contato@soccez.com.br?subject=Clube%20parceiro">{t('business.clubCta')} <ArrowUpRight size={17}/></a></article>
            <article className="business-card brand-card"><span>02</span><h3>{t('business.brandTitle')}</h3><p>{t('business.brandText')}</p><ul>{t('business.brandItems',{returnObjects:true}).map(item=><li key={item}><CheckCircle2 size={17}/>{item}</li>)}</ul><a className="button white" href="mailto:contato@soccez.com.br?subject=Patrocínio">{t('business.brandCta')} <ArrowUpRight size={17}/></a></article>
          </div>
        </div>
      </section>

      <section className="section numbers"><div className="page-width numbers-inner"><div><span className="eyebrow">{t('numbers.eyebrow')}</span><h2>{t('numbers.title')}</h2></div><div className="number-grid">{t('numbers.items', { returnObjects: true }).map(([value,label]) => <div className="number-card" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div></section>

      <section id="tecnologia" className="section technology">
        <div className="page-width tech-intro"><div><span className="eyebrow light">{t('tech.eyebrow')}</span><h2>{t('tech.title1')} <em>{t('tech.title2')}</em></h2></div><p>{t('tech.text')}</p></div>
        <div className="tech-visual"><img className="drafut-logo" src="/assets/drafut.png" alt="DRAFuT" /><div className="phone"><div className="phone-head"><span>Soccez ID</span><CheckCircle2 size={16} /></div><div className="avatar" /><h3>{t('tech.profile')}</h3>{[[t('tech.label1'),t('tech.value1')],[t('tech.label2'),t('tech.value2')],[t('tech.label3'),t('tech.value3')]].map(([a,b]) => <div className="profile-row" key={a}><span>{a}</span><b>{b}</b></div>)}</div><div className="tech-chips">{t('tech.chips',{returnObjects:true}).map(c=><span key={c}>{c}</span>)}</div></div>
      </section>

      <section className="section owned-properties">
        <div className="page-width"><span className="eyebrow">{t('properties.eyebrow')}</span><h2>{t('properties.title')}</h2><article className="property-feature"><div className="property-art"><img src="/assets/leandro-cup.png" alt="Leandro Guerreiro Cup"/><span>{t('properties.badge')}</span></div><div><span className="property-index">01 / PROPRIEDADE</span><h3>{t('properties.cupTitle')}</h3><p>{t('properties.cupText')}</p><a href="#contato">Produced by Soccez <ArrowUpRight size={17}/></a></div></article></div>
      </section>

      <section className="section partners page-width"><span className="eyebrow">{t('partners.eyebrow')}</span><h2>{t('partners.title')}</h2><p>{t('partners.text')}</p><div>{partnerLogos.map(([src,alt],i)=><div className={`partner-logo ${i===0?'featured':''}`} key={src}><img src={src} alt={alt}/></div>)}</div></section>
      <section id="contato" className="section closing"><div className="page-width closing-inner"><div><span className="eyebrow light">{t('closing.eyebrow')}</span><h2>{t('closing.title1')} <em>{t('closing.title2')}</em></h2></div><a className="button white" href="mailto:contato@soccez.com.br">{t('closing.cta')} <ArrowUpRight size={17}/></a></div></section>
    </main>

    <footer className="page-width"><img src="/assets/soccez-logo.png" alt="Soccez"/><p>{t('footer.text')}</p><div><a href="#">{t('footer.privacy')}</a><a href="#">{t('footer.terms')}</a></div></footer>
  </div>
}

export default App
