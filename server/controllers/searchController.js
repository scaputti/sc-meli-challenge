const axios = require("axios");
let self = {};

self.search = (req, res) => {
  const params = req.query.q;
  const id = params?.replace(/[^\x00-\x7F]/g, "");
  
  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${id}&limit=4`)
  .then((response) => {

    let formattedData = {
      "author": {
        "name": 'Sheila',
        "lastname": 'Caputti'
      },
      "categories": [],
      "items": []
    };

    const categories = response.data.available_filters[0].values.slice(0, 3);
    categories.forEach((el) => {
      cat = {
        "id": el.id,
        "name": el.name
      }
      formattedData.categories.push(cat)
    });

    const itemsResult = response.data.results;
    itemsResult.forEach((item) => {
      item = {          
        "id": item.id,
        "title": item.title,
        "price": {
          "currency": item.currency_id === "ARS" ? "$" : item.data.currency_id,
          "amount": item.price.toString().split('.')[0],
          "decimals": item.price.toString().split('.')[1]
        },
        "picture": item.thumbnail, 
        "condition": item.condition, 
        "free_shipping": item.shipping.free_shipping,
        "seller_address": item.seller_address.city.name
      };
      formattedData.items.push(item);
    });
    
    return res.json(formattedData);
  });
};
    
module.exports = self;