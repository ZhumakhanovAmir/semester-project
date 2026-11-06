import { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import CourseList from './components/CourseList';

const INITIAL_COURSES = [
  { id: 1, title: 'Веб-доступность (WCAG 2.1)', description: 'Принципы создания сайтов для людей с особыми потребностями.', category: 'Accessibility' },
  { id: 2, title: 'Основы React и хуков', description: 'Компоненты, props, useState и работа со списками.', category: 'Frontend' },
  { id: 3, title: 'Семантическая верстка HTML5', description: 'Правильная структура документов, теги и экранные дикторы.', category: 'HTML/CSS' },
  { id: 4, title: 'Адаптивный дизайн интерфейсов', description: 'Flexbox, Grid и Media Queries для любых экранов.', category: 'Design' }
];

export default function App() {
  const [courses, setCourses] = useState(INITIAL_COURSES);
  const [searchQuery, setSearchQuery] = useState('');

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
      <CourseList courses={filteredCourses} />
    </main>
  );
}
