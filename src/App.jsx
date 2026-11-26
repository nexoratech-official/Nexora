import React, { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Atom, BrainCircuit, Check,
  ChevronDown, Code2, Gamepad2, GraduationCap, Layers3, Menu, Orbit,
  Play, Sparkles, X, Zap, ShieldCheck, Globe2, BookOpen, MonitorSmartphone
} from 'lucide-react';

const products = [
  {
    id: 'nexora-ai', number: '01', name: 'Nexora AI', category: 'ARTIFICIAL INTELLIGENCE',
    description: 'A home for intelligent tools, AI-powered experiences and future model research.',
    detail: 'Explore the possibilities of applied AI—from focused assistants and useful workflows to experiments in building and adapting AI models.',
    icon: BrainCircuit, tone: 'violet', status: 'In development', tags: ['AI tools', 'Assistants', 'Model research']
  },
  {
    id: 'nexora-software', number: '02', name: 'Nexora Software', category: 'DIGITAL PRODUCTS',
    description: 'Thoughtful websites, applications and software experiences built around real needs.',
    detail: 'A product and engineering direction for web applications, mobile experiences, SaaS ideas, APIs and developer-focused tools.',
    icon: Code2, tone: 'blue', status: 'Building capabilities', tags: ['Web & apps', 'SaaS concepts', 'Developer tools']
  },
  {
    id: 'techverse', number: '03', name: 'TechVerse', category: 'TECHNOLOGY LEARNING',
    description: 'Explore technology, develop practical skills and keep moving forward.',
    detail: 'The technology-learning platform currently being developed, with a vision spanning programming, AI, cloud, cybersecurity, projects and career preparation.',
    icon: Orbit, tone: 'cyan', status: 'In development', tags: ['Programming', 'Emerging tech', 'Career skills']
  },
  {
    id: 'nexora-games', number: '04', name: 'Nexora Games', category: 'GAMES & INTERACTIVE WORLDS',
    description: 'A future-facing space for game concepts, interactive experiences and original IP.',
    detail: 'The gaming direction within Nexora, with room to grow into game development, publishing and original intellectual property over time.',
    icon: Gamepad2, tone: 'orange', status: 'Future venture', tags: ['Game concepts', 'Interactive worlds', 'Publishing vision']
  }
];

const channels = [
  { name: 'Vikas Maurya Academy', label: 'TECH EDUCATION', text: 'Technology tutorials, learning resources and educational content.', initials: 'VMA', color: 'purple' },
  { name: 'Vikas Coding School', label: 'CODING & CAREERS', text: 'Programming, DSA, interview preparation and placement-focused learning.', initials: 'VCS', color: 'blue' },
  { name: 'Vikas Gaming', label: 'GAMING COMMUNITY', text: 'A creator-led gaming identity, separate from the Nexora Games venture.', initials: 'VG', color: 'orange' }
];

function Brand({ small = false }) {
  return <a className={`brand ${small ? 'brand-small' : ''}`} href="#home" aria-label="Nexora home">
    <span className="brand-mark"><span /><span /><span /></span>
    <span className="brand-word">nexora<span className="brand-period">.</span></span>
  </a>;
}

function SectionLabel({ children, light = false }) {
  return <div className={`section-label ${light ? 'section-label-light' : ''}`}><span className="label-line" />{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', topic: 'General enquiry', message: '' });
  const [formMessage, setFormMessage] = useState('');

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage('Thanks for your interest. This demo form is not connected to a server yet, so your message has not been sent. Add your preferred contact endpoint before publishing.');
  };

  return <div className="site-shell">
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <a href="#ecosystem" onClick={() => setMenuOpen(false)}>Ecosystem</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education & Media</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </nav>
        <button className="header-cta" onClick={() => scrollTo('contact')}>Let's connect <ArrowUpRight size={15} /></button>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>

    <main>
      <section className="hero dark-section" id="home">
        <div className="hero-grid-bg" />
        <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> AN INDEPENDENT TECHNOLOGY ECOSYSTEM</div>
            <h1>Technology for<br /><span className="gradient-text">what comes next.</span></h1>
            <p className="hero-description">We’re building at the intersection of AI, software, learning and play—turning ambitious ideas into useful digital experiences.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => scrollTo('ecosystem')}>Explore Nexora <ArrowRight size={17} /></button>
              <button className="button button-ghost" onClick={() => scrollTo('products')}><span className="play-icon"><Play size={12} fill="currentColor" /></span> Discover our work</button>
            </div>
            <div className="hero-trust"><div className="avatar-stack"><span>AI</span><span>DEV</span><span>EDU</span></div><p><strong>One ecosystem.</strong> Multiple ways to create impact.</p></div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration representing connected technology products">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
            <div className="art-core"><div className="core-inner"><span className="core-glyph">N</span></div><div className="core-caption">IDEAS IN MOTION</div></div>
            <div className="float-card card-ai"><span className="float-icon violet"><BrainCircuit size={19} /></span><div><strong>Nexora AI</strong><small>Intelligence, explored</small></div><span className="card-status" /></div>
            <div className="float-card card-code"><span className="float-icon blue"><Code2 size={19} /></span><div><strong>Nexora Software</strong><small>Digital experiences</small></div></div>
            <div className="float-card card-learn"><span className="float-icon cyan"><Orbit size={19} /></span><div><strong>TechVerse</strong><small>Learn what's next</small></div></div>
            <div className="float-card card-games"><span className="float-icon orange"><Gamepad2 size={19} /></span><div><strong>Nexora Games</strong><small>Worlds to imagine</small></div></div>
            <div className="art-spark spark-a"><Sparkles size={19} /></div><div className="art-spark spark-b"><Zap size={16} /></div>
          </div>
        </div>
        <div className="container hero-bottom"><span>BUILT FOR CURIOSITY</span><span className="bottom-rule" /><span>DESIGNED FOR POSSIBILITY</span><button onClick={() => scrollTo('ecosystem')} aria-label="Scroll to ecosystem"><ArrowDownRight size={20} /></button></div>
      </section>

      <section className="intro-section section-pad" id="ecosystem">
        <div className="container intro-layout">
          <div><SectionLabel>THE NEXORA ECOSYSTEM</SectionLabel><h2>Different disciplines.<br /><span className="text-muted">One bigger vision.</span></h2></div>
          <div className="intro-right"><p>Nexora is a technology and digital innovation brand under <strong>Maurya Group</strong>, founded by Vikas Maurya. Its ecosystem brings together distinct ventures with a shared curiosity for what technology can make possible.</p><button className="text-link" onClick={() => scrollTo('about')}>Get to know us <ArrowRight size={16} /></button></div>
        </div>
        <div className="container ecosystem-strip">
          <div className="ecosystem-item"><span className="eco-number">01</span><BrainCircuit /><div><strong>Think</strong><small>Explore intelligence</small></div></div>
          <div className="ecosystem-item"><span className="eco-number">02</span><Code2 /><div><strong>Build</strong><small>Make useful software</small></div></div>
          <div className="ecosystem-item"><span className="eco-number">03</span><GraduationCap /><div><strong>Learn</strong><small>Grow practical skills</small></div></div>
          <div className="ecosystem-item"><span className="eco-number">04</span><Gamepad2 /><div><strong>Play</strong><small>Imagine new worlds</small></div></div>
        </div>
      </section>

      <section className="products-section section-pad" id="products">
        <div className="container">
          <div className="section-heading-row"><div><SectionLabel>OUR VENTURES</SectionLabel><h2>Ideas taking <span className="text-muted">shape.</span></h2></div><p>Each venture has its own focus. Together, they form a growing ecosystem of technology, learning and digital creativity.</p></div>
          <div className="product-grid">
            {products.map((product) => {
              const Icon = product.icon;
              return <article className={`product-card product-${product.tone}`} key={product.id}>
                <div className="product-card-top"><span className="product-number">{product.number} / 04</span><span className="product-icon"><Icon size={22} /></span></div>
                <div className="product-category">{product.category}</div>
                <h3>{product.name}</h3><p>{product.description}</p>
                <div className="product-card-bottom"><span className="status-pill"><span />{product.status}</span><button aria-label={`Learn more about ${product.name}`} className="round-arrow" onClick={() => setActiveProduct(product)}><ArrowUpRight size={18} /></button></div>
              </article>;
            })}
          </div>
          <p className="availability-note"><ShieldCheck size={15} /> Product descriptions represent current direction and plans. Availability and capabilities may change as projects develop.</p>
        </div>
      </section>

      <section className="feature-section dark-section" id="techverse">
        <div className="feature-grid-bg" />
        <div className="container feature-layout">
          <div className="feature-copy"><SectionLabel light>FEATURED PLATFORM</SectionLabel><div className="feature-kicker"><Orbit size={15} /> A LEARNING UNIVERSE</div><h2>Meet <span className="gradient-text">TechVerse.</span></h2><p>A technology-learning platform in development, designed around the idea that learning should connect concepts with practice—and skills with opportunity.</p>
            <div className="feature-points"><div><Check size={15} /> Programming & computer science</div><div><Check size={15} /> AI and emerging technologies</div><div><Check size={15} /> Projects and career preparation</div></div>
            <button className="button button-primary" onClick={() => scrollTo('contact')}>Follow the journey <ArrowRight size={17} /></button>
          </div>
          <div className="techverse-visual"><div className="tv-window"><div className="tv-window-bar"><div className="window-dots"><i /><i /><i /></div><span>TECHVERSE / LEARNING PATHS</span><span className="window-menu">•••</span></div><div className="tv-window-content"><div className="tv-greeting">YOUR NEXT CHAPTER <Sparkles size={13} /></div><h3>Learn by exploring.</h3><p>Build skills that move you forward.</p><div className="tv-progress-label"><span>Suggested learning paths</span><span>04 paths</span></div><div className="learning-path"><span className="path-icon path-purple"><Code2 size={16} /></span><div><strong>Programming foundations</strong><small>Logic · Code · Practice</small></div><ArrowUpRight size={15} /></div><div className="learning-path"><span className="path-icon path-cyan"><BrainCircuit size={16} /></span><div><strong>AI & machine learning</strong><small>Understand · Experiment · Build</small></div><ArrowUpRight size={15} /></div><div className="learning-path"><span className="path-icon path-orange"><Layers3 size={16} /></span><div><strong>Cloud & modern development</strong><small>Deploy · Scale · Improve</small></div><ArrowUpRight size={15} /></div><div className="tv-footer"><span><span className="live-dot" /> PLATFORM IN DEVELOPMENT</span><span>MADE FOR THE CURIOUS ↗</span></div></div></div><div className="tv-orbit tv-orbit-1" /><div className="tv-orbit tv-orbit-2" /><div className="tv-deco tv-deco-1"><BookOpen size={19} /></div><div className="tv-deco tv-deco-2"><MonitorSmartphone size={20} /></div></div>
        </div>
      </section>

      <section className="education-section section-pad" id="education">
        <div className="container">
          <div className="section-heading-row"><div><SectionLabel>EDUCATION & MEDIA</SectionLabel><h2>Learning is better<br /><span className="text-muted">when shared.</span></h2></div><p>Alongside Nexora’s product ecosystem, established creator brands connect people with tutorials, coding practice and gaming content.</p></div>
          <div className="channel-grid">
            {channels.map((channel, i) => <article className="channel-card" key={channel.name}><div className={`channel-avatar ${channel.color}`}><span>{channel.initials}</span><div className="avatar-ring" /></div><div className="channel-label">{channel.label}</div><h3>{channel.name}</h3><p>{channel.text}</p><div className="channel-bottom"><span className="channel-index">0{i + 1}</span><span className="channel-note">CREATOR BRAND</span></div></article>)}
          </div>
          <div className="education-note"><div className="note-icon"><Globe2 size={21} /></div><p><strong>Connected by a shared vision.</strong> Vikas Maurya Academy, Vikas Coding School and Vikas Gaming retain their own identities within the wider Maurya Group vision.</p><button className="text-link" onClick={() => scrollTo('contact')}>Collaborate <ArrowRight size={16} /></button></div>
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="container about-layout"><div className="about-visual"><div className="about-orb"><div className="about-orb-inner">N<span>.</span></div></div><div className="about-stamp"><span>CURIOUS BY NATURE</span><Sparkles size={15} /><span>BUILT STEP BY STEP</span></div><div className="about-small-card"><Atom size={18} /><span>Explore.<br />Experiment.<br />Evolve.</span></div></div>
          <div className="about-copy"><SectionLabel>ABOUT NEXORA</SectionLabel><h2>Big ideas start<br />with <span className="text-muted">curiosity.</span></h2><p>Nexora is being shaped as a home for practical innovation: a place where technology, learning and creativity can grow side by side.</p><p>Part of the broader Maurya Group vision, Nexora is led by a simple belief: progress comes from staying curious, building thoughtfully and making room for what's next.</p><div className="founder-line"><div className="founder-monogram">VM</div><div><strong>Vikas Maurya</strong><span>Founder · Nexora vision</span></div><span className="founder-rule" /></div><div className="parent-label"><span>PART OF</span><strong>MAURYA GROUP</strong><ArrowUpRight size={15} /></div></div></div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="container contact-layout"><div className="contact-copy"><SectionLabel>START A CONVERSATION</SectionLabel><h2>Have an idea?<br /><span className="text-muted">Let's explore it.</span></h2><p>Interested in a collaboration, a product idea or the Nexora journey? Share a few details below.</p><div className="contact-aside"><span className="contact-aside-icon"><ArrowDownRight size={19} /></span><div><strong>Good things begin with a conversation.</strong><small>No promises or automated replies—just a starting point.</small></div></div></div>
          <form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><div><span>CONTACT FORM</span><h3>Tell us what's on your mind.</h3></div><span className="form-spark"><Sparkles size={19} /></span></div><div className="form-row"><label>Your name<input required value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} placeholder="Name" /></label><label>Email address<input required type="email" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} placeholder="you@example.com" /></label></div><label>What is this about?<span className="select-wrap"><select value={formState.topic} onChange={e => setFormState({...formState, topic: e.target.value})}><option>General enquiry</option><option>AI & software</option><option>TechVerse / education</option><option>Games & interactive media</option><option>Partnership or collaboration</option></select><ChevronDown size={16} /></span></label><label>Your message<textarea required rows="4" value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})} placeholder="Tell us a little about your idea..." /></label><button className="button button-dark" type="submit">Prepare enquiry <ArrowRight size={17} /></button>{formMessage && <p className="form-message" role="status">{formMessage}</p>}<p className="form-disclaimer">Demo form only. It does not send or store your details. Connect a secure form endpoint before launch.</p></form>
        </div>
      </section>

      <section className="final-cta dark-section"><div className="final-cta-glow" /><div className="container final-cta-inner"><div className="final-mark"><Brand small /></div><div><SectionLabel light>THE NEXT CHAPTER STARTS HERE</SectionLabel><h2>Stay curious.<br /><span className="gradient-text">Build what matters.</span></h2></div><button className="button button-primary" onClick={() => scrollTo('products')}>Explore the ecosystem <ArrowRight size={17} /></button></div></section>
    </main>

    <footer className="site-footer"><div className="container footer-main"><div className="footer-brand-col"><Brand /><p>Technology, learning and digital possibilities—connected by curiosity.</p><span className="parent-chip">A vision within <strong>Maurya Group</strong></span></div><div className="footer-links"><div><span className="footer-title">EXPLORE</span><a href="#ecosystem">Ecosystem</a><a href="#products">Ventures</a><a href="#techverse">TechVerse</a><a href="#about">About Nexora</a></div><div><span className="footer-title">OUR VENTURES</span><button onClick={() => setActiveProduct(products[0])}>Nexora AI</button><button onClick={() => setActiveProduct(products[1])}>Nexora Software</button><button onClick={() => setActiveProduct(products[2])}>TechVerse</button><button onClick={() => setActiveProduct(products[3])}>Nexora Games</button></div><div><span className="footer-title">COMMUNITY</span><a href="#education">Vikas Maurya Academy</a><a href="#education">Vikas Coding School</a><a href="#education">Vikas Gaming</a><a href="#contact">Contact</a></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Nexora. A brand vision within Maurya Group.</span><span>Built with curiosity <Sparkles size={13} /></span></div></footer>

    {activeProduct && <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) setActiveProduct(null); }}><section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={() => setActiveProduct(null)} aria-label="Close details"><X size={20} /></button><div className={`modal-icon ${activeProduct.tone}`}><activeProduct.icon size={26} /></div><span className="product-category">{activeProduct.category}</span><h2 id="modal-title">{activeProduct.name}</h2><p>{activeProduct.detail}</p><div className="modal-status"><span className="status-pill"><span />{activeProduct.status}</span></div><div className="modal-tags">{activeProduct.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="modal-footnote"><ShieldCheck size={15} /> This page describes the direction of the venture, not a claim that all features are available.</div><button className="button button-dark" onClick={() => { setActiveProduct(null); scrollTo('contact'); }}>Discuss this venture <ArrowRight size={16} /></button></section></div>}
  </div>;
}

export default App;
