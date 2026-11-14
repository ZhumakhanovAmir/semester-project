import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import CourseList from './components/CourseList';

export default function App() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadCourses() {
      try {
        const response = await fetch('http://localhost:3000/api/courses');
        if (!response.ok) {
          throw new Error('Failed');
        }
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError('Load failed');
      } finally {
        setLoading(false);
      }
    }
    loadCourses();
  }, []);

  const filteredCourses = courses.filter((course) => {
    const query = searchQuery.toLowerCase();
    return (
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query)
    );
  });

  return (
    <main style={{ maxWidth: '720px', margin: '40px auto', padding: '0 16px', fontFamily: 'system-ui, sans-serif' }}>
      <Navbar title="Accessible Learning" count={filteredCourses.length} />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && <CourseList courses={filteredCourses} />}
    </main>
  );
}
