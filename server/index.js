const express = require('express');
const bodyParser = require('body-parser');
const routerHandler = require('./routes/handler');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routerHandler);
app.use(express.static(__dirname));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

