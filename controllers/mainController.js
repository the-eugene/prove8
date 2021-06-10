const Product = require('../models/product');

exports.getProducts = async (req, res, next) => {
    let products=await Product.fetchAll();
    let tp=Math.ceil(products.length/10);
    products=Product.paginate(products,req.query.page??1);
        res.render('pages/home', {
            products: products,
            page:req.query.page??1,
            total_pages:tp,
        });
};

exports.getSearchProducts = async (req, res, next) => {
    const query = req.query.query;
    let products=await Product.fetchAll();
    products=Product.search(Product.defaultFilter(query), products);
    let tp=Math.ceil(products.length/10);
    products=Product.paginate(products,req.query.page??1);
    res.render('pages/home', {
        products: products,
        page:req.query.page??1,
        total_pages:tp,
        query: req.query.query
    });
};