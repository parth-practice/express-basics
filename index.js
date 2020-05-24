import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;

app.use((req, res) => {
    console.log('Time:', Date.now());
  })

app.get('/', (req, res) => {
    res.json(data);
});

app.get('/item/:id', (req,res) => {
    res.send(data[Number(req.params.id)]);
});

app.listen(PORT, () => {
    console.log(`Your server is running on PORT ${PORT}`);
});
