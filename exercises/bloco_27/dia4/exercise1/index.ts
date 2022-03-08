/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from 'express';
import PlantsModule from './Plants';

const app = express();

app.use(express.json());

const idPath = '/plants/:id';

app.get('/plants', async (req, res) => {
  const plants = await (new PlantsModule().getPlants());

  res.send(plants);
});

app.get(idPath, async (req, res) => {
  const { id } = req.params;
  const plant = await (new PlantsModule().getPlantById(id));
  res.send(plant);
});

app.delete(idPath, async (req, res) => {
  const { id } = req.params;
  const plant = await (new PlantsModule().removePlantById(id));
  res.send(plant);
});

app.put(idPath, async (req, res) => {
  const { id } = req.params;
  const newPlant = req.body;
  const plant = await (new PlantsModule().editPlant(id, newPlant));
  res.send(plant);
});

app.post('/plants', async (req, res) => {
  const newPlant = req.body;

  const plant = await (new PlantsModule().savePlant(newPlant));
  res.send(plant);
});

app.get('/sunny/:id', async (req, res) => {
  const { id } = req.params;
  const plant = await (new PlantsModule().getPlantsThatNeedsSunWithId(id));
  res.send(plant);
});

app.listen(3001, () => {
  console.log('Ouvindo a porta 3001!');
});