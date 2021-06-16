const Pokemon = require('../models/data');

exports.getPokemon = async (req, res, next) => {
    let pokemon=await Pokemon.fetchPage(req.query.page??1,10);
    let tp=Math.ceil(pokemon.count/10);
    console.log(pokemon);
        res.render('pages/home', {
            products: pokemon.results,
            page:req.query.page??1,
            total_pages:tp,
        });
};