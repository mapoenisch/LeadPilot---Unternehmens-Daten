const FEATURES = [
  { icon: 'send', title: 'Automated sequences', body: 'Multi-step outreach that adapts to replies, so no lead goes cold.' },
  { icon: 'user', title: 'Unified pipeline', body: 'Every lead, every stage, one view — no more spreadsheet stitching.' },
  { icon: 'checkCircle', title: 'Smart routing', body: 'New leads land with the right rep in seconds, not hours.', featured: true },
];

function FeatureGrid({ Card, Icon }) {
  return (
    <section style={{ padding: '0 48px 96px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)', maxWidth: '1040px', margin: '0 auto' }}>
        {FEATURES.map((f) => (
          <Card key={f.title} featured={f.featured} padding="var(--space-6)">
            <div style={{
              width: '40px', height: '40px', borderRadius: 'var(--radius-md)',
              background: f.featured ? 'var(--color-accent-soft)' : 'var(--color-primary-soft)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)',
            }}>
              <Icon name={f.icon} size={20} color={f.featured ? 'var(--color-accent)' : 'var(--color-primary)'} />
            </div>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontSize: '19px', fontWeight: 600, color: 'var(--color-text)' }}>{f.title}</h3>
            <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '14px', lineHeight: 'var(--leading-open)' }}>{f.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

window.FeatureGrid = FeatureGrid;
