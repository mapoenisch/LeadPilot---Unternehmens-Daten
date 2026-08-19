function MarketingHeader({ onCta }) {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 48px' }}>
      <img src="../../assets/logo/leadpilot-logo-full.png" alt="LeadPilot" style={{ height: '32px', objectFit: 'contain' }} />
      <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <a href="#product" style={{ color: 'var(--color-text-muted)', fontSize: '14px', textDecoration: 'none' }}>Product</a>
        <a href="#pricing" style={{ color: 'var(--color-text-muted)', fontSize: '14px', textDecoration: 'none' }}>Pricing</a>
      </nav>
      {onCta}
    </header>
  );
}

window.MarketingHeader = MarketingHeader;
