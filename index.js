const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/user/:id', (req, res) => {
  const q = req.params;
  console.log(q.id);

  res.json({ userid: q.id });
});

app.get('/dog', (req, res) => {
  res.send({ sound: '멍멍' });
  // res.json({ sound: '멍멍' }); json 데이터를 보낸다고 명시적으로 표시할 수도 있음
});

app.get('/cat', (req, res) => {
  res.send({ sound: '야옹' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
