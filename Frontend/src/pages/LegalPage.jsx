// LegalPage.jsx
// Componente reutilizable para páginas legales de EnlaceLocal
// Uso: <LegalPage title="..." subtitle="..." lastUpdated="..." sections={[...]} />

// ─── sub-componentes internos ────────────────────────────────────────────────

function LegalSection({ number, title, children }) {
  return (
    <div className="lp-section">
      <div className="lp-section-marker">
        <span className="lp-section-number">
          {String(number).padStart(2, "0")}
        </span>
      </div>
      <div className="lp-section-body">
        <h2 className="lp-section-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

function LegalSubsection({ title, children }) {
  return (
    <div className="lp-subsection">
      {title && <h3 className="lp-subsection-title">{title}</h3>}
      {children}
    </div>
  );
}

function LegalList({ items }) {
  return (
    <ul className="lp-list">
      {items.map((item, i) => (
        <li key={i} className="lp-list-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

function LegalNote({ children }) {
  return <p className="lp-note">{children}</p>;
}

// ─── componente principal ────────────────────────────────────────────────────

export default function LegalPage({
  title,
  subtitle,
  lastUpdated,
  badge,
  sections,
}) {
  return (
    <div className="lp-root">
      {/* Header */}
      <header className="lp-header">
        <div className="lp-header-inner">
          <a href="/" className="lp-logo">
            <span className="lp-logo-text">EnlaceLocal</span>
            <span className="lp-logo-dot">.mx</span>
          </a>
        </div>
      </header>

      {/* Hero del documento */}
      <div className="lp-hero">
        <div className="lp-hero-inner">
          {badge && <span className="lp-badge">{badge}</span>}
          <h1 className="lp-title">{title}</h1>
          {subtitle && <p className="lp-subtitle">{subtitle}</p>}
          <div className="lp-meta">
            <span className="lp-meta-label">Última actualización</span>
            <span className="lp-meta-date">{lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <main className="lp-main">
        <div className="lp-content">
          {sections.map((section, i) => (
            <LegalSection key={i} number={i + 1} title={section.title}>
              {section.intro && <p className="lp-paragraph">{section.intro}</p>}

              {section.subsections?.map((sub, j) => (
                <LegalSubsection key={j} title={sub.title}>
                  {sub.paragraphs?.map((para, k) => (
                    <p key={k} className="lp-paragraph">
                      {para}
                    </p>
                  ))}
                  {sub.items && <LegalList items={sub.items} />}
                  {sub.note && <LegalNote>{sub.note}</LegalNote>}
                </LegalSubsection>
              ))}

              {section.items && <LegalList items={section.items} />}
              {section.note && <LegalNote>{section.note}</LegalNote>}
            </LegalSection>
          ))}
        </div>

        {/* Footer del documento */}
        <div className="lp-doc-footer">
          <div className="lp-doc-footer-inner">
            <p className="lp-doc-footer-text">
              ¿Dudas sobre este documento?{" "}
              <a href="mailto:privacidad@enlacelocal.mx" className="lp-link">
                privacidad@enlacelocal.mx
              </a>
            </p>
            <a href="/" className="lp-back-link">
              ← Volver a EnlaceLocal
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Re-exportar helpers para usarlos en las páginas ─────────────────────────
export { LegalSection, LegalSubsection, LegalList, LegalNote };
