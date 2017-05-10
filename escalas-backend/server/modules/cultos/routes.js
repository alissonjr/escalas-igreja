import { Router } from 'express';
import * as CultoController from './controller';

const routes = new Router();

routes.post('/cultos', CultoController.createCulto);

routes.get('/cultos', CultoController.getAllCultos);

routes.get('/cultos/:id_culto', CultoController.getCulto);

export default routes;
