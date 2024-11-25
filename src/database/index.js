import Sequelize from 'sequelize';

import configDatabase from '../config/database';

import User from '../app/models/user';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connections = new Sequelize(configDatabase);
    models.map((model) => model.init(this.connections));
  }
}

export default new Database();
