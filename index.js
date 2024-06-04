const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello hello good morning!');
});

app.get('/parth', (req, res) => {
  res.send('Hello parth');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
