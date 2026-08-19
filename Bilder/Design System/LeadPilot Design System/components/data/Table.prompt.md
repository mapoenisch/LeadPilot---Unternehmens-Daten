Simple data table for lists of leads, contacts, or activity rows.

```jsx
<Table
  columns={[{key:'name',label:'Name'},{key:'status',label:'Status',render:r => <Badge variant="cyan">{r.status}</Badge>}]}
  rows={[{name:'Ari Chen', status:'New'}]}
/>
```
