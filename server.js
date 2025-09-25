const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8787;

const COMMISSION_ADDRESS = process.env.COMMISSION_ADDRESS || 'Eu94CJ1rjdLSXQHNfj6zRFqn4iuhUvTNpJhP9poXigsh';

app.use(express.json());
// serve static frontend
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// API endpoints
app.get('/api/commission', (req, res) => {
  res.json({ address: COMMISSION_ADDRESS });
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

// fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(PORT, () => console.log('Server listening on', PORT));
