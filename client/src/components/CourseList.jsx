import CourseCard from './CourseCard';

export default function CourseList({ courses }) {
  if (courses.length === 0) {
    return <p style={{ color: '#94a3b8', textAlign: 'center' }}>Материалы не найдены.</p>;
  }

  return (
    <div>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
