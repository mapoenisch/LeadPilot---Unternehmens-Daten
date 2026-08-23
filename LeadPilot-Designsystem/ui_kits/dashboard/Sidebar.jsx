const NAV = [
  { id: 'overview', label: 'Overview', icon: 'checkCircle' },
  { id: 'leads', label: 'Leads', icon: 'user' },
  { id: 'sequences', label: 'Sequences', icon: 'send' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
];

function Sidebar({ active, onSelect, NavItem, Icon, Badge }) {
  return (
    <aside style={{
      width: '240px', background: 'var(--color-bg-deep)', borderRight: '1px solid var(--color-border)',
      display: 'flex', flexDirection: 'column', padding: 'var(--space-5) var(--space-3)', gap: 'var(--space-6)',
    }}>
      <img src="../../assets/logo/leadpilot-logo-full.png" alt="LeadPilot" style={{ height: '26px', objectFit: 'contain', marginLeft: '10px' }} />
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {NAV.map((item) => (
          <NavItem
            key={item.id}
            icon={<Icon name={item.icon} size={18} />}
            label={item.label}
            active={active === item.id}
            onClick={() => onSelect(item.id)}
            badge={item.id === 'leads' ? <Badge variant="cyan">12</Badge> : null}
          />
        ))}
      </nav>
    </aside>
  );
}

window.Sidebar = Sidebar;
