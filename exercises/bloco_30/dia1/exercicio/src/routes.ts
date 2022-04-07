  import { Router } from 'express';

  import WorldCupController from './controllers/WorldCupController';

  const worldCupController = new WorldCupController();

  const routes = Router();

  const worldCupId = '/worldcup/:id';

  routes.get('/worldcup', worldCupController.getAll);
  routes.post('/worldcup', worldCupController.create);
  routes.get('/worldcup/year/:year', worldCupController.getWorldCupByYear);
  routes.put(worldCupId, worldCupController.update);
  routes.delete(worldCupId,worldCupController.delete);
  routes.get(worldCupId, worldCupController.getOne);

  export default routes;