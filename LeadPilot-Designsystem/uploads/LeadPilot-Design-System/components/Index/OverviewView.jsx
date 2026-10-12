const STATS = [
  { label: 'Open pipeline', value: '128', delta: '+12 this week' },
  { label: 'Won this month', value: '34', delta: '+6 vs last month', featured: true },
  { label: 'Avg. response time', value: '2.4h', delta: '−18min vs last month' },
];

const RECENT = [
  { name: 'Ari Chen', company: 'Northwind', status: 'Hot', value: '$8,200' },
  { name: 'Priya Rao', company: 'Fenwick Co', status: 'Won', value: '$14,000' },
  { name: 'Sam Okafor', company: 'Delta Labs', status: 'New', value: '$3,500' },
  { name: 'Jules Martin', company: 'Ocular', status: 'New', value: '$6,100' },
];

function OverviewView({ Card, SectionHeader, Table, Badge, Button }) {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'company', label: 'Company' },
    { key: 'status', label: 'Status', render: (r) => <Badge variant={r.status === 'Won' ? 'cyan' : r.status === 'Hot' ? 'orange' : 'neutral'}>{r.status}</Badge> },
    { key: 'value', label: 'Value' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      <SectionHeader eyebrow="Pipeline" title="Overview" description="Everything currently in motion." actions={<Button variant="primary">New lead</Button>} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
        {STATS.map((s) => (
          <Card key={s.label} featured={s.featured}>
            <div style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>{s.label}</div>
            <div style={{ color: 'var(--color-text)', fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 600, margin: '4px 0' }}>{s.value}</div>
            <div style={{ color: s.featured ? 'var(--color-primary)' : 'var(--color-text-muted)', fontSize: '12.5px' }}>{s.delta}</div>
          </Card>
        ))}
      </div>
      <Card padding="0">
        <div style={{ padding: 'var(--space-4) var(--space-5) 0' }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '17px', color: 'var(--color-text)' }}>Recent leads</h3>
        </div>
        <Table columns={columns} rows={RECENT} />
      </Card>
    </div>
  );
}

window.OverviewView = OverviewView;
