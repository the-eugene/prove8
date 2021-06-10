// Product model

const fs = require('fs');

// Using node-fetch
const fetch = require('node-fetch');
const productsUrl = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';

module.exports = class Product {
    static async fetchAll()  {
        try{
        let json = await fetch(productsUrl);
        return json.json();
        } catch(e){
            console.error(e);
            return {};
        }
    }

    static search(queryF, products) {
        return products.filter(queryF);
    }

    static defaultFilter(query){
        query=query.toLowerCase();
        return function(product){
            return product.tags.map(tag=>tag.toLowerCase()).includes(query)||
            product.name.toLowerCase().includes(query)||
            product.description.toLowerCase().includes(query);
        }
    }

    static paginate(products,page){
        return products.slice((page-1)*10,page*10);
    }
};