const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.json()); 

app.post('/test', (req, res) => {
  console.log(req.body); 
  res.json({ message: 'Dane zostały otrzymane!' }); 
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});