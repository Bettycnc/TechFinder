const express = require('express');
const Job = require('../models/Jobs'); 
const router = express.Router();

// Endpoint pour récupérer les emplois avec des filtres
router.get('/jobs', async (req, res) => {
  const { poste, lieu } = req.query;  
  try {
    const filter = {};
    if (poste) {
      filter.job_title = { $regex: poste, $options: 'i' };
    }
    if (lieu) {
      filter.location = { $regex: lieu, $options: 'i' };
    }
    const jobs = await Job.find(filter);
    res.json(jobs);
  } catch (err) {
    res.status(500).send('Erreur serveur');
  }
});

// Endpoint pour créer un nouvel emploi
router.post('/jobs', async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({ message: 'Objet enregistré !' });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Endpoint pour mettre à jour un emploi
router.put('/jobs/:id', async (req, res) => {
  try {
    await Job.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id });
    res.status(200).json({ message: 'Objet modifié !' });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Endpoint pour supprimer un emploi
router.delete('/jobs/:id', async (req, res) => {
  try {
    await Job.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Objet supprimé !' });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Endpoint pour obtenir le pourcentage d'emplois par titre et localisation
router.get('/job-percentage', async (req, res) => {
  const { jobTitle, location } = req.query;

  if (!jobTitle || !location) {
    return res.status(400).json({ error: 'Les paramètres jobTitle et location sont requis.' });
  }

  try {
    const result = await getJobPercentageInLocation(jobTitle, location);
    res.json(result);
  } catch (error) {
    console.error('Erreur lors du calcul du pourcentage:', error);
    res.status(500).json({ error: 'Une erreur est survenue lors du calcul.' });
  }
});

module.exports = router;
