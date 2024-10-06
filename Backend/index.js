const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');


app.use(cors()); 
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Bienvenue dans l\'API!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});


app.get('/api/data', (req, res) => {
    const data = { message: "Voici des données envoyées depuis le backend !" };
    res.json(data);
});
  
app.post('/api/data', (req, res) => {
    const userData = req.body;
    res.json({ status: 'Données reçues', data: userData });
});
  
mongoose.connect('mongodb+srv://bettycanac:ipmHc39EJr0v5kcj@cluster0.6alzq.mongodb.net/?',{
})
    .then(() => console.log('Connexion réussie à MongoDB !'))
    .catch(err => console.log('Erreur de connexion à MongoDB:', err));
  
const DataSchema = new mongoose.Schema({
    name: String,
    value: Number,
});
const Data = mongoose.model('Job', DataSchema);
      

app.get('/api/data', async (req, res) => {
    try {
      const allData = await Data.find();
      res.status(200).json(allData);
    } catch (err) {
      res.status(500).json({ message: 'Erreur lors de la récupération des données', error: err });
    }
});

app.put('/api/data/:id', express.json(), (req, res) => {
    const { id } = req.params;
    const { name, value } = req.body; 
  
    res.json({
      message: `Donnée avec ID ${id} mise à jour`,
      updatedData: { id, name, value }
    });
});

app.post('/api/data', express.json(), (req, res) => {
    const { name, value } = req.body; 
    res.json({
      message: 'Données reçues avec succès',
      receivedData: { name, value }
    });
});

app.get('/api/search', (req, res) => {
    const searchQuery = req.query.query || '';  
    const filteredData = data.filter(item => 
      item.lieu.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.post.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    res.json(filteredData);
});