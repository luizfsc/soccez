import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  pt: { translation: {
    nav: { property: 'Propriedade', stages: 'Próximas etapas', audiences: 'Para quem', technology: 'Tecnologia', registrations: 'Ver inscrições' },
    modal: { label: 'Apresentação institucional', title: 'Este é um ambiente demonstrativo.', text: 'Conteúdos, datas, números e propriedades apresentados são simulações para visualização do projeto Soccez.', close: 'Entendi, continuar' },
    hero: { eyebrow: 'A próxima geração entra em campo', title1: 'Transformamos futebol em', title2: 'propriedades de valor.', text: 'Estratégia, operação e experiência para eventos que conectam atletas, clubes, famílias e grandes marcas.', primary: 'Conheça as próximas etapas', secondary: 'Nossa atuação', stamp: 'Gestão esportiva', stamp2: 'produzida para escalar' },
    manifesto: { eyebrow: 'Muito além do calendário', title1: 'Não organizamos apenas eventos.', title2: 'Construímos ativos esportivos.', text: 'Cada propriedade nasce com identidade, recorrência e visão comercial. Da primeira inscrição ao último conteúdo, tudo faz parte da mesma experiência.', link1: 'Estratégia e gestão', link2: 'Operação e experiência', link3: 'Comercial e marcas' },
    stages: { eyebrow: 'Próximas etapas', title: 'O jogo continua.', text: 'Um circuito de experiências criado para ganhar novas cidades.', soon: 'Em breve · Data simulada', ticket: 'Inscrições na TicketEZ', previous: 'Etapa anterior', next: 'Próxima etapa' },
    ticket: { eyebrow: 'Infraestrutura oficial de acesso', title1: 'A jornada começa', title2: 'antes do apito.', text: 'Inscrições, credenciamento e acesso em uma experiência digital fluida, segura e preparada para grandes públicos.', cta: 'Acessar TicketEZ' },
    audiences: { eyebrow: 'Um ecossistema conectado', title: 'Valor para quem faz o jogo acontecer.', athlete: ['Para atletas', 'Mais visibilidade. Mais história.', 'Cada participação fortalece um perfil digital que acompanha a evolução do atleta.'], club: ['Para clubes', 'Talento com contexto.', 'Dados organizados e novas conexões para identificar atletas em ambientes competitivos.'], brand: ['Para marcas', 'Presença que vira experiência.', 'Propriedades recorrentes, ativações relevantes e conexão real com famílias e comunidades.'], more: 'Saiba mais' },
    numbers: { eyebrow: 'Impacto projetado', title: 'Escala que pode ser vista, medida e ampliada.', items: [['500 mil+', 'Presença digital'], ['25 mil+', 'Presenças de familiares'], ['3.500+', 'Atletas impactados'], ['10+', 'Selecionados para categorias de base']] },
    tech: { eyebrow: 'Tecnologia que permanece', title1: 'O evento termina.', title2: 'A história do atleta continua.', text: 'Com a infraestrutura DRAFuT, participação, histórico e dados formam uma jornada digital contínua para atletas e clubes.', profile: 'Perfil do atleta', label1: 'Eventos', value1: '4 participações', label2: 'Posição', value2: 'Meio-campo', label3: 'Status', value3: 'Perfil verificado', chips: ['Histórico esportivo', 'Dados centralizados', 'Scouting conectado'] },
    partners: { eyebrow: 'Conexões que fortalecem o jogo', title: 'Parceiros e marcas' },
    closing: { eyebrow: 'O próximo grande jogo', title1: 'Sua marca pode fazer', title2: 'parte dessa história.', cta: 'Vamos conversar' },
    footer: { text: 'Gestão, produção e desenvolvimento de propriedades esportivas.', privacy: 'Privacidade', terms: 'Termos' },
    cities: ['Belo Horizonte', 'Uberaba', 'Contagem']
  }},
  en: { translation: {
    nav: { property: 'Properties', stages: 'Upcoming stages', audiences: 'For whom', technology: 'Technology', registrations: 'View registrations' },
    modal: { label: 'Institutional presentation', title: 'This is a demonstration environment.', text: 'The content, dates, figures and properties presented are simulations created to showcase the Soccez project.', close: 'Got it, continue' },
    hero: { eyebrow: 'The next generation steps onto the pitch', title1: 'We turn football into', title2: 'valuable properties.', text: 'Strategy, operations and experiences for events that connect athletes, clubs, families and leading brands.', primary: 'Explore upcoming stages', secondary: 'What we do', stamp: 'Sports management', stamp2: 'built to scale' },
    manifesto: { eyebrow: 'Beyond the calendar', title1: 'We do more than run events.', title2: 'We build sports assets.', text: 'Every property is designed with identity, recurrence and commercial vision. From the first registration to the final piece of content, everything belongs to one experience.', link1: 'Strategy and management', link2: 'Operations and experience', link3: 'Commercial and brands' },
    stages: { eyebrow: 'Upcoming stages', title: 'The game goes on.', text: 'A circuit of experiences designed to reach new cities.', soon: 'Coming soon · Simulated date', ticket: 'Register on TicketEZ', previous: 'Previous stage', next: 'Next stage' },
    ticket: { eyebrow: 'Official access infrastructure', title1: 'The journey begins', title2: 'before kick-off.', text: 'Registration, accreditation and access through a seamless, secure digital experience built for large audiences.', cta: 'Visit TicketEZ' },
    audiences: { eyebrow: 'A connected ecosystem', title: 'Value for everyone who makes the game happen.', athlete: ['For athletes', 'More visibility. A lasting journey.', 'Every appearance strengthens a digital profile that follows the athlete’s development.'], club: ['For clubs', 'Talent with context.', 'Organised data and new connections to identify athletes in competitive environments.'], brand: ['For brands', 'Presence becomes experience.', 'Recurring properties, relevant activations and authentic connections with families and communities.'], more: 'Learn more' },
    numbers: { eyebrow: 'Projected impact', title: 'Scale that can be seen, measured and expanded.', items: [['500K+', 'Digital reach'], ['25K+', 'Family attendance'], ['3,500+', 'Athletes impacted'], ['10+', 'Players selected for academies']] },
    tech: { eyebrow: 'Technology that lasts', title1: 'The event ends.', title2: 'The athlete’s story continues.', text: 'With DRAFuT infrastructure, participation, history and data create a continuous digital journey for athletes and clubs.', profile: 'Athlete profile', label1: 'Events', value1: '4 appearances', label2: 'Position', value2: 'Midfielder', label3: 'Status', value3: 'Verified profile', chips: ['Sports history', 'Centralised data', 'Connected scouting'] },
    partners: { eyebrow: 'Connections that strengthen the game', title: 'Partners and brands' },
    closing: { eyebrow: 'The next big game', title1: 'Your brand can become', title2: 'part of this story.', cta: 'Let’s talk' },
    footer: { text: 'Management, production and development of sports properties.', privacy: 'Privacy', terms: 'Terms' },
    cities: ['Belo Horizonte', 'Uberaba', 'Contagem']
  }}
}

i18n.use(initReactI18next).init({ resources, lng: localStorage.getItem('soccez-language') || 'pt', fallbackLng: 'pt', interpolation: { escapeValue: false } })
i18n.on('languageChanged', language => { localStorage.setItem('soccez-language', language); document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en' })

export default i18n
