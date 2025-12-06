const express = require('express');
const router = express.Router();
const recetas = require('../mock-data/recetas.json');

router.get('/', (req, res) => {
  res.json(recetas);
});

router.get('/:id', (req, res) => {
  const receta = recetas.find(r => r.id == req.params.id);
  
  if (receta) {
    res.json(receta);
  } else {
    res.status(404).json({ error: 'Receta no encontrada' });
  }
});

router.post('/', (req, res) => {
  const newReceta = req.body;
  const newId = recetas.length > 0 ? Math.max(...recetas.map(r => r.id)) + 1 : 1;
  newReceta.id = newId;

  if (!newReceta.titulo) {
    return res.status(400).json({'code': 22, 'description': 'El título de la receta es obligatorio'});
  }

  recetas.push(newReceta);

  console.log('Nueva receta creada (solo en memoria):', newReceta);

  res.status(201).json(newReceta);
});


router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = recetas.findIndex(r => r.id === id);
  if (index >= 0) {
    const eliminado = recetas.splice(index, 1)[0];
    console.log('Receta eliminada (solo en memoria):', eliminado);
    return res.json(eliminado);
  } else {
    return res.status(404).json({ error: 'Receta no encontrada' });
  }
});

module.exports = router;