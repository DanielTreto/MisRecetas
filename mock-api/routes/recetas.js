const express = require('express');
const router = express.Router();
const recetas = require('../mock-data/recetas.json');


//Obtiene todas las recetas y permite filtrado por calificación. 
// Se redondean las calificaciones para el filtro.
router.get('/', (req, res) => {
  let recetasFiltradas = [...recetas];

  if (req.query.calif) {
    const targetCalif = Number(req.query.calif);
    const lowerBound = targetCalif - 0.5;
    const upperBound = targetCalif + 0.5;

    recetasFiltradas = recetas.filter((receta) => {
      if (targetCalif === 5) {
        return receta.mediaCalif >= 4.5 && receta.mediaCalif <= 5;
      }
      return receta.mediaCalif >= lowerBound && receta.mediaCalif < upperBound;
    });
  }
  return res.json(recetasFiltradas);
});

//Obtiene una receta por su ID. Retorna 404 si no existe.
router.get('/:id', (req, res) => {
  const receta = recetas.find((r) => r.id == req.params.id);
  if (receta) {
    res.json(receta);
  } else {
    res.status(404).json({ error: 'Receta no encontrada' });
  }
});

//Crea una nueva receta. Retorna la receta creada con estado 201.
router.post('/', (req, res) => {
  const newReceta = req.body;
  const newId = recetas.length > 0 ? Math.max(...recetas.map((r) => r.id)) + 1 : 1;
  newReceta.id = newId;

  if (!newReceta.titulo) {
    return res.status(400).json({ code: 22, description: 'El título de la receta es obligatorio' });
  }

  recetas.push(newReceta);

  console.log('Nueva receta creada (solo en memoria):', newReceta);

  res.status(201).json(newReceta);
});

//Elimina una receta por su ID. Retorna la receta eliminada o 404.
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = recetas.findIndex((r) => r.id === id);
  if (index >= 0) {
    const eliminado = recetas.splice(index, 1)[0];
    console.log('Receta eliminada (solo en memoria):', eliminado);
    return res.json(eliminado);
  } else {
    return res.status(404).json({ error: 'Receta no encontrada' });
  }
});

//Actualiza parcialmente una receta (fusión de datos). Retorna la receta actualizada o 404.
router.patch('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = recetas.findIndex((r) => r.id === id);
  if (index >= 0) {
    const recetaActualizada = { ...recetas[index], ...req.body };
    recetas[index] = recetaActualizada;
    console.log('Receta actualizada (solo en memoria):', recetaActualizada);
    return res.json(recetaActualizada);
  } else {
    return res.status(404).json({ error: 'Receta no encontrada' });
  }
});

module.exports = router;
