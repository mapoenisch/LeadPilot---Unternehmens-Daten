function Hero({ Button, Badge }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '80px 24px 96px', gap: 'var(--space-5)' }}>
      <Badge variant="cyan">New — Sequence AI</Badge>
      <h1 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 'var(--leading-tight)',
        letterSpacing: 'var(--tracking-tight)', color: 'var(--color-text)', maxWidth: '820px',
      }}>
        Lead Pilot drives leads forward.
      </h1>
      <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '18px', maxWidth: '520px', lineHeight: 'var(--leading-open)' }}>
        A compact system for modern sales workflows — route, sequence, and close without the busywork.
      </p>
      <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
        <Button variant="primary" size="lg">Get started</Button>
        <Button variant="secondary" size="lg">See it in action</Button>
      </div>
    </section>
  );
}

window.Hero = Hero;
