import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, ChevronDown, FileCheck2, Menu, Network, ShieldCheck, X } from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const TELEGRAM_URL = 'https://t.me/cryptoshperehelp';

function TelegramLink({ children, className = '', floating = false }: { children: React.ReactNode; className?: string; floating?: boolean }) {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noreferrer"
      className={`${floating ? 'floating-telegram' : 'telegram-link'} ${className}`}
      data-testid={floating ? 'link-floating-telegram' : 'link-telegram-support'}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21.3 3.4 18 20.1c-.25 1.18-.94 1.47-1.91.92l-5.25-3.86-2.53 2.44c-.28.28-.51.51-1.05.51l.38-5.35 9.74-8.8c.42-.38-.09-.59-.65-.21L4.69 13.5l-5.16-1.62c-1.12-.35-1.14-1.12.23-1.65L20 2.95c.93-.35 1.75.21 1.3.45Z" fill="currentColor" />
      </svg>
      {children}
    </a>
  );
}

function Brand() {
  return (
    <a href="#top" className="brand" data-testid="link-brand">
      <span className="brand-mark" aria-hidden="true" />
      <span className="brand-name">Cryptosphere<span className="brand-suffix">/ SOLUTIONS INC.</span></span>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Brand />
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary navigation">
          <a className="nav-link" href="#infrastructure" onClick={() => setOpen(false)} data-testid="link-infrastructure">Infrastructure</a>
          <a className="nav-link" href="#transparency" onClick={() => setOpen(false)} data-testid="link-transparency">Transparency</a>
          <a className="nav-link" href="#protocol" onClick={() => setOpen(false)} data-testid="link-protocol">Our standard</a>
          <TelegramLink>Telegram support</TelegramLink>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <div className="section-inner hero-grid">
          <div className="reveal">
            <div className="eyebrow"><span className="eyebrow-line" /> Institutional digital-asset infrastructure</div>
            <h1>Trust is not a<br /><span className="accent">feature.</span> It is the<br />foundation.</h1>
            <p className="hero-copy">Cryptosphere Solutions Inc. builds secure, compliance-first infrastructure for the digital-asset economy — engineered for institutions that operate where accountability matters.</p>
            <div className="hero-actions">
              <TelegramLink>Connect with support <ArrowUpRight size={15} /></TelegramLink>
              <a className="secondary-link" href="#transparency" data-testid="link-verify-records">Verify our records <ArrowDownRight size={14} /></a>
            </div>
            <div className="hero-footnote"><ShieldCheck size={14} /> <span>Delaware registered · FinCEN MSB registered</span></div>
          </div>
          <div className="console reveal reveal-delay-2" aria-label="Cryptosphere verification console">
            <div className="console-content">
              <div className="console-top">
                <span className="console-title">Entity verification console</span>
                <span className="live-label"><span className="live-dot" /> Live record</span>
              </div>
              <div className="console-readout">
                <div className="readout-label">Organization status</div>
                <div className="readout-value">Cryptosphere Solutions Inc. <span className="verified-badge"><Check size={12} /> Verified</span></div>
              </div>
              <div className="console-rows">
                <div className="console-row"><span>Jurisdiction</span><span>Delaware, USA</span></div>
                <div className="console-row"><span>Entity class</span><span>Corporation</span></div>
                <div className="console-row"><span>Compliance layer</span><span>FinCEN MSB</span></div>
                <div className="console-row"><span>Record state</span><span style={{ color: 'var(--cyan)' }}>Active / current</span></div>
              </div>
            </div>
            <div className="console-scan" /><div className="console-axis" />
          </div>
        </div>
      </section>
      <div className="signal-bar">
        <div className="section-inner signal-inner">
          <div className="signal-item"><span className="signal-label">Entity</span><span className="signal-value">US corporation <strong>●</strong></span></div>
          <div className="signal-item"><span className="signal-label">Jurisdiction</span><span className="signal-value">Delaware, USA</span></div>
          <div className="signal-item"><span className="signal-label">Registration</span><span className="signal-value">FinCEN <strong>MSB</strong></span></div>
          <div className="signal-item"><span className="signal-label">Operating posture</span><span className="signal-value">Compliance first</span></div>
        </div>
      </div>
    </>
  );
}

function Infrastructure() {
  return (
    <section className="section" id="infrastructure">
      <div className="section-inner">
        <div className="section-header">
          <div><div className="section-kicker">01 / Infrastructure</div><h2 className="section-title">Built for the scrutiny that comes with moving real value.</h2></div>
          <p className="section-intro">The digital-asset market needs less noise and more verifiable structure. Our posture starts with the basics: clear records, secure systems, and operational discipline.</p>
        </div>
        <div className="architecture-grid">
          <div className="architecture-feature">
            <div className="feature-number">ARCHITECTURE / 001</div>
            <h3 className="feature-title">A clearer operating layer for a complex financial system.</h3>
            <p className="feature-copy">We approach digital assets as infrastructure — with the controls, documentation, and resilience expected of modern financial technology.</p>
          </div>
          <div className="architecture-list">
            <div className="architecture-item"><h3>Security by default</h3><p>Systems and processes are designed around protection, access discipline, and a reduced attack surface.</p></div>
            <div className="architecture-item"><h3>Compliance as a system</h3><p>Registration and accountability are not afterthoughts. They are part of the operating model.</p></div>
            <div className="architecture-item"><h3>Evidence over promises</h3><p>Public records and official verification paths make it possible to check the details for yourself.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecordCard({ fincen = false }: { fincen?: boolean }) {
  return (
    <article className="record-card" data-testid={`card-${fincen ? 'fincen' : 'entity'}-record`}>
      <div className="record-top">
        <span className="record-icon">{fincen ? <FileCheck2 /> : <Network />}</span>
        <span className="record-type">{fincen ? 'Federal registration' : 'State registration'}</span>
      </div>
      <h3>{fincen ? 'FinCEN MSB License' : 'US Entity Registration'}</h3>
      {fincen ? (
        <dl className="record-fields">
          <div className="record-field"><dt>Authority</dt><dd>US Bureau of FinCEN</dd></div>
          <div className="record-field"><dt>Registration type</dt><dd>Money Services Business (MSB)</dd></div>
          <div className="record-field"><dt>MSB number</dt><dd className="mono">31000123456789</dd></div>
        </dl>
      ) : (
        <dl className="record-fields">
          <div className="record-field"><dt>Legal name</dt><dd>Cryptosphere Solutions Inc.</dd></div>
          <div className="record-field"><dt>State of Inc</dt><dd>Delaware, USA</dd></div>
          <div className="record-field"><dt>Filing number</dt><dd className="mono">7654321</dd></div>
        </dl>
      )}
      <a className="verify-link" href={fincen ? 'https://www.fincen.gov/msb-registrant-search' : 'https://icis.corp.delaware.gov/Ecorp/EntitySearch/NameSearch.aspx'} target="_blank" rel="noreferrer" data-testid={`link-verify-${fincen ? 'fincen' : 'delaware'}`}>
        Verify on official registry <ArrowUpRight />
      </a>
    </article>
  );
}

function Transparency() {
  return (
    <section className="section transparency-section" id="transparency">
      <div className="section-inner">
        <div className="section-header">
          <div><div className="section-kicker">02 / Corporate transparency</div><h2 className="section-title">The details are the point.</h2></div>
          <p className="section-intro">Two records. Two official sources. No black box. Use the links below to verify the information independently.</p>
        </div>
        <div className="record-grid"><RecordCard /><RecordCard fincen /></div>
        <p className="record-note">Official verification links open in a new tab and lead directly to the relevant government search service.</p>
      </div>
    </section>
  );
}

function Standard() {
  return (
    <section className="section" id="protocol">
      <div className="section-inner">
        <div className="section-header">
          <div><div className="section-kicker">03 / The Cryptosphere standard</div><h2 className="section-title">Credibility is a practice, not a color palette.</h2></div>
          <p className="section-intro">Our standard is intentionally unglamorous. It is how serious infrastructure earns confidence over time.</p>
        </div>
        <div className="process-grid">
          <div className="process-step"><div className="step-index">/ 01</div><h3>Make the entity legible</h3><p>Clear legal identity and public records give counterparties a reliable starting point.</p></div>
          <div className="process-step"><div className="step-index">/ 02</div><h3>Put controls in the room</h3><p>Security and compliance shape the architecture before the first transaction moves.</p></div>
          <div className="process-step"><div className="step-index">/ 03</div><h3>Stay accountable</h3><p>Trust compounds when the organization remains available, documented, and verifiable.</p></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <>
      <section className="cta-section">
        <div className="section-inner">
          <div className="cta-box">
            <div className="section-kicker">Direct line / support</div>
            <h2>Questions about our records or operating posture?</h2>
            <p>Speak with the Cryptosphere support team directly. We are here to help you verify the details that matter.</p>
            <TelegramLink>Open Telegram support <ArrowUpRight size={15} /></TelegramLink>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-main">
            <div><Brand /><p className="footer-brand-copy">Secure, compliance-first infrastructure for the digital-asset economy.</p></div>
            <div className="footer-meta">
              <div><span className="footer-label">Legal entity</span><span className="footer-value">Cryptosphere Solutions Inc.</span></div>
              <div><span className="footer-label">Registered address</span><span className="footer-value">1209 North Orange Street<br />Wilmington, DE 19801</span></div>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-risk">Digital assets involve substantial risk, including the potential loss of principal. Nothing on this site constitutes financial, investment, legal, or tax advice. Users should conduct their own due diligence and consult qualified professionals before making any decision.</span>
            <span className="footer-copyright">© 2026 Cryptosphere Solutions Inc.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

function Home() {
  return <div className="site-shell"><Header /><main><Hero /><Infrastructure /><Transparency /><Standard /><Footer /></main><TelegramLink floating>Support</TelegramLink></div>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><Home /><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;