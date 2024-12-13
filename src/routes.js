import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionControllers from './app/controllers/SessionControllers';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionControllers.store);

export default routes;
