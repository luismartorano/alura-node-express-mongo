import express from 'express';
import LivroController from '../controllers/livrosController.js';

const router = express.Router();

router
  .get('/livros', LivroController.listarLivros)
  .get('/livros/busca', LivroController.listarLivroPorEditora) // da especifica para a menos específica, senão vai dar erro. Busca é mais especifica que :id
  .get('/livros/:id', LivroController.listarLivroPorId)
  .post('/livros', LivroController.cadastrarLivro)
  .put('/livros/:id', LivroController.atualizarLivro)
  .delete('/livros/:id', LivroController.excluirLivro);

export default router;
