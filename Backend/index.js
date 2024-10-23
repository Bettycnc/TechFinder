const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobRoutes'); 
const app = express();

app.use(cors()); 
app.use(express.json()); 

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://bettycanac:ipmHc39EJr0v5kcj@cluster0.6alzq.mongodb.net/?')
  .then(() => {
    console.log('Connexion réussie à MongoDB !');
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erreur de connexion à MongoDB:', err);
  });

app.use('/api', jobRoutes);

app.get("/messages", (req, res) => {
  res.send("Hello");
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

