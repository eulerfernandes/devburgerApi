import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionControllers from './app/controllers/SessionControllers';
import ProductController from './app/controllers/ProductController';
import CategoryController from './app/controllers/CategoryController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionControllers.store);

routes.post('/product', upload.single('file'), ProductController.store);
routes.get('/products', ProductController.index);

routes.post('/categories', CategoryController.store);
routes.get('/categories', CategoryController.index);
export default routes;
