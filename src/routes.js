import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionControllers from './app/controllers/SessionControllers';
import ProductController from './app/controllers/ProductController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionControllers.store);
routes.post('/product', ProductController.store);

export default routes;
