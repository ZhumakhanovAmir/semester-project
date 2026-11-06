export default function Navbar({ title, count }) {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '2px solid #e2e8f0',
      paddingBottom: '16px',
      marginBottom: '24px'
    }}>
      <h1 style={{ margin: 0, fontSize: '24px', color: '#0f172a' }}>{title}</h1>
      <span style={{ fontSize: '14px', color: '#64748b' }}>
        Найдено курсов: <strong>{count}</strong>
      </span>
    </header>
  );
}
