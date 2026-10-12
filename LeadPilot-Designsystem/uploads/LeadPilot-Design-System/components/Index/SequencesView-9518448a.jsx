const STEPS = [
  { step: 1, title: 'Intro email', wait: 'Day 0' },
  { step: 2, title: 'Follow-up', wait: 'Day 3' },
  { step: 3, title: 'Value nudge', wait: 'Day 7' },
  { step: 4, title: 'Final check-in', wait: 'Day 14' },
];

function SequencesView({ SectionHeader, Card, Badge, Button, Icon }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <SectionHeader eyebrow="Automation" title="Sequences" description="Outreach steps that run on autopilot." actions={<Button variant="primary">New sequence</Button>} />
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-4)' }}>
          <div>
            <div style={{ color: 'var(--color-text)', fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 600 }}>Outbound — new leads</div>
            <div style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>4 steps · 214 enrolled</div>
          </div>
          <Badge variant="cyan">Live</Badge>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {STEPS.map((s, i) => (
            <div key={s.step} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-3) 0', borderTop: i > 0 ? '1px solid var(--color-border-soft)' : 'none' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 600, flexShrink: 0 }}>{s.step}</div>
              <Icon name="send" size={16} color="var(--color-text-muted)" />
              <div style={{ flex: 1, color: 'var(--color-text)', fontSize: '14px' }}>{s.title}</div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '12.5px' }}>{s.wait}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

window.SequencesView = SequencesView;
