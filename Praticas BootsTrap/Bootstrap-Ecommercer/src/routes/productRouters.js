/**
 * Arquivo: src/routes/product.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Product'.
 */

const router = require('express-promise-router')();
const productController = require('../controllers/productController');

//==>Definindo as rotas do CRUD - 'Product':

//==>Rota responsavel por criar um novo 'Product': (POST)
router.post('/products', productController.createProduct);

// ==> Rota responsável por listar todos os 'Products
router.get('/products', productController.listAllProducts);

// ==> Rota responsável por selecionar 'Product' pelo 'Id'
router.get('/products/:id', productController.findProductById)




module.exports = router;