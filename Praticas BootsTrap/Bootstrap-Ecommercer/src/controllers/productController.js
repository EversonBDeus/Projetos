const db = require('../config/database');

//==> Metodo responsavel por criar um novo 'Product'

exports.createProduct = async (req,res)=>{
    const {product_name, quantity, price} =req.body;
    const {rows} = await db.query(`
    INSERT INTO products (productname, quantity, price) 
    VALUES ($1,$2, $3);
    `,[product_name, quantity,price]
    )

    res.status(201).send({
        message: 'Dependente added successfully!',
        body:{
            product:{product_name , quantity, price}
        },
    })
};

// ==> Método responsável por listar todos os 'Products':
exports.listAllProducts = async(req,res) => {
    const response = await db.query(`
    SELECT * FROM products ORDER BY name ASC
    `);
    res.status(200).send(response.rows);
}

exports.findProductById = async(req,res)=>{
    const productId = parseInt(req.params.id);
    const response = await db.query(`
    SELECT * FROM products WHERE productid = $1
    `, [productId]
    )
    res.status(200).send(response.rows);
    
}