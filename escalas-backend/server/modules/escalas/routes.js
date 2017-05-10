import { Router } from 'express';
import * as EscalaController from './controller';

const routes = new Router();

// cria uma escala
routes.post('/escalas', EscalaController.createEscala);

// busca todas as escalas
routes.get('/escalas', EscalaController.createEscala);

// busca uma escala específica
routes.get('/escalas/:id_escala', EscalaController.getEscala);

export default routes;
