function SettingsView({ SectionHeader, Input, Button, Divider }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: '480px' }}>
      <SectionHeader eyebrow="Account" title="Settings" description="Update your workspace details." />
      <Input label="Workspace name" defaultValue="LeadPilot Sales" />
      <Input label="Notification email" defaultValue="alerts@leadpilot.io" />
      <Divider />
      <Button variant="primary" style={{ alignSelf: 'flex-start' }}>Save changes</Button>
    </div>
  );
}

window.SettingsView = SettingsView;
