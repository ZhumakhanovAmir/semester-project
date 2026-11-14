const express = require('express');
const cors = require('cors');
let courses = require('./data');

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello' });
});

app.get('/api/courses', (req, res) => {
  const search = req.query.search;
  if (search) {
    const filtered = courses.filter((c) =>
      c.title.toLowerCase().includes(search.toLowerCase())
    );
    return res.json(filtered);
  }
  res.json(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === Number(req.params.id));
  if (!course) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.json(course);
});

app.post('/api/courses', (req, res) => {
  if (!req.body.title || req.body.title.trim() === '') {
    return res.status(400).json({ error: 'Title is required' });
  }
  const course = { id: Date.now(), ...req.body };
  courses.push(course);
  res.status(201).json(course);
});

app.delete('/api/courses/:id', (req, res) => {
  courses = courses.filter((c) => c.id !== Number(req.params.id));
  res.json({ message: 'Deleted' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
