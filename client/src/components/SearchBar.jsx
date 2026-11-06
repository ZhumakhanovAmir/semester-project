export default function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Поиск по названию или описанию..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '6px',
          border: '1px solid #cbd5e1',
          fontSize: '14px',
          boxSizing: 'border-box'
        }}
      />
    </div>
  );
}
