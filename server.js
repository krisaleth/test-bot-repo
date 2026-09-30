import express from 'express';
const app = express();

const PORT = 3000;

app.use(express.json());

appp.gett()(()

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/final', (req, res)=> {
  res.send("Final Test????");
})
