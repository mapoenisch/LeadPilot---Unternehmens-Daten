const ALL_LEADS = [
  { name: 'Ari Chen', company: 'Northwind', status: 'Hot', owner: 'You' },
  { name: 'Priya Rao', company: 'Fenwick Co', status: 'Won', owner: 'You' },
  { name: 'Sam Okafor', company: 'Delta Labs', status: 'New', owner: 'Jordan' },
  { name: 'Jules Martin', company: 'Ocular', status: 'New', owner: 'Jordan' },
  { name: 'Nadia Farouk', company: 'Brightline', status: 'Hot', owner: 'You' },
  { name: 'Owen Reyes', company: 'Kestrel', status: 'Lost', owner: 'Jordan' },
];

function LeadsView({ SectionHeader, Tabs, Table, Badge, Button, Modal, Input }) {
  const [tab, setTab] = React.useState('all');
  const [open, setOpen] = React.useState(false);
  const rows = tab === 'all' ? ALL_LEADS : ALL_LEADS.filter((l) => l.status.toLowerCase() === tab);
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'company', label: 'Company' },
    { key: 'status', label: 'Status', render: (r) => <Badge variant={r.status === 'Won' ? 'cyan' : r.status === 'Hot' ? 'orange' : 'neutral'}>{r.status}</Badge> },
    { key: 'owner', label: 'Owner' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <SectionHeader eyebrow="Pipeline" title="Leads" description="All contacts currently being worked." actions={<Button variant="primary" onClick={() => setOpen(true)}>New lead</Button>} />
      <Tabs
        items={[{ id: 'all', label: 'All' }, { id: 'hot', label: 'Hot' }, { id: 'new', label: 'New' }, { id: 'won', label: 'Won' }]}
        activeId={tab}
        onChange={setTab}
      />
      <Table columns={columns} rows={rows} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Add a new lead"
        footer={<>
          <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="primary" onClick={() => setOpen(false)}>Add lead</Button>
        </>}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Input label="Full name" placeholder="Jordan Lee" />
          <Input label="Company" placeholder="Acme Corp" />
        </div>
      </Modal>
    </div>
  );
}

window.LeadsView = LeadsView;
