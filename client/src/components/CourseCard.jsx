export default function CourseCard({ course }) {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '12px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#1e293b' }}>{course.title}</h3>
      <p style={{ margin: '0 0 12px 0', color: '#475569' }}>{course.description}</p>
      <span style={{
        fontSize: '12px',
        padding: '4px 8px',
        backgroundColor: '#e0f2fe',
        color: '#0369a1',
        borderRadius: '4px',
        fontWeight: 'bold'
      }}>
        {course.category}
      </span>
    </div>
  );
}
