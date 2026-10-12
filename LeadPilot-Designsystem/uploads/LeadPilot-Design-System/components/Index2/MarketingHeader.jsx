function MarketingHeader({ onCta, logoSrc = "/_blob/de8c681a085a95b4c2777e459e9c7700" }) {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 48px' }}>
      <img src={logoSrc} alt="LeadPilot" style={{ height: '40px', objectFit: 'contain' }} />
      <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <a href="#product" style={{ color: 'var(--color-text-muted)', fontSize: '14px', textDecoration: 'none' }}>Product</a>
        <a href="#pricing" style={{ color: 'var(--color-text-muted)', fontSize: '14px', textDecoration: 'none' }}>Pricing</a>
      </nav>
      {onCta}
    </header>
  );
}

window.MarketingHeader = MarketingHeader;
