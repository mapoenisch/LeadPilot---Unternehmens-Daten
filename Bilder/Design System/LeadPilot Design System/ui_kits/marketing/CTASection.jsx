function CTASection({ Button }) {
  return (
    <section style={{
      margin: '0 48px 96px', padding: '56px', borderRadius: 'var(--radius-lg)',
      background: 'var(--color-surface)', border: '1px solid var(--color-primary)',
      boxShadow: 'var(--shadow-glow-cyan)', textAlign: 'center',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)',
    }}>
      <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 600, color: 'var(--color-text)' }}>
        Ready to fly your leads home?
      </h2>
      <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '16px' }}>Start free — no credit card required.</p>
      <Button variant="primary" size="lg">Get started</Button>
    </section>
  );
}

function MarketingFooter() {
  return (
    <footer style={{ padding: '24px 48px', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '13px' }}>
      © 2026 LeadPilot. All rights reserved.
    </footer>
  );
}

window.CTASection = CTASection;
window.MarketingFooter = MarketingFooter;
