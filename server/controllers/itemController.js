const axios = require("axios");
let self = {};

self.detail = (req, res) => {
  const params = req.params.id;
  const id = params?.replace(/[^\x00-\x7F]/g, "");

  const idPromise = axios.get(`https://api.mercadolibre.com/items/${id}`);
  const descPromise = axios.get(`https://api.mercadolibre.com/items/${id}/description`);
  
  Promise.all([idPromise, descPromise])
    .then(async ([id, description]) => {
    const item = id.data;
  
    const categoryItem = await axios
      .get(`https://api.mercadolibre.com/categories/${item.category_id}`)
      .then((response) => response.data.path_from_root);

    const formattedData = {
      "author": {
        "name": 'Sheila',
        "lastname": 'Caputti'
      },
      "item": {        
        "id": item.id,
        "title": item.title,
        "price": {
          "currency": item.currency_id === "ARS" ? "$" : item.currency_id,
          "amount": item.price.toString().split('.')[0],
          "decimals": item.price.toString().split('.')[1]
        },
        "picture": item.thumbnail, 
        "condition": item.condition, 
        "free_shipping": item.shipping.free_shipping,
        "sold_quantity": item.sold_quantity,
        "description": description.data.plain_text,
        "categories": categoryItem
      }
    };
    return res.json(formattedData);
  });
};
  
module.exports = self;