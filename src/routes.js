import { Router } from 'express';
import { v4 } from 'uuid';

import User from './app/models/user';

const routes = new Router();

routes.get('/', async (request, response) => {
  const user = await User.create({
    id: v4(),
    name: 'leticia',
    email: 'leti@gmail.com',
    password_hash: 'njndjnncd1254dccd',
  });

  return response.status(201).json(user);
});

export default routes;
