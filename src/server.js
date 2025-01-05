import express from 'express';

const app = express();

// Configurações e middlewares do app
app.use(express.json());

export default app;
