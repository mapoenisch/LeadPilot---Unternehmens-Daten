Modal dialog shell: dark scrim backdrop, surface panel, title row with close button, optional footer for actions.

```jsx
<Modal open={isOpen} onClose={() => setOpen(false)} title="Delete lead?"
  footer={<><Button variant="secondary" onClick={close}>Cancel</Button><Button variant="accent" onClick={confirm}>Delete</Button></>}>
  This can't be undone.
</Modal>
```
