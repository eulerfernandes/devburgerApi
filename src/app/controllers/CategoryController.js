import * as Yup from 'yup';
import Category from '../models/Category';

class CategotyController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category: Yup.string().required(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { name } = request.body;

    const categoryExists = await Category.findOne({
      where: {
        name,
      },
    });

    if (categoryExists) {
      return response.status(400).json({ error: 'Category already exists' });
    }

    const { id } = await Category.create({
      name,
    });

    return response.status(201).json(id, name);
  }

  async index(request, response) {
    const category = await Category.findAll();

    return response.json(category);
  }
}

export default new CategotyController();
