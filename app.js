const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  return res.send('Hello!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
