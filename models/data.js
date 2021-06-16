// Using node-fetch
const fetch = require('node-fetch');
const dataUrl = 'https://pokeapi.co/api/v2/pokemon';

module.exports = class Pokemon {
    static async fetchPage(page,size)  {
        try{
        let url=urlWithParams(dataUrl,{offset: (page-1)*size,size:size});
        let json = await fetch(url);

        return json.json();
        } catch(e){
            console.error(e);
            return {};
        }
    }

    static async getMaximum(){
        return await fetch(dataUrl).json().count;
    }
};

function urlWithParams(url,params){
    console.log(params);
    return url+'?'+Object.entries(params).map(([k,v])=>k+'='+v).join('&');
}