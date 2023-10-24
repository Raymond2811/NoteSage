const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

const routes = require('./routes/htmlRoutes/index');

routes(app);

app.listen(PORT, () => console.log (`Server  started at http://localhost:${PORT}`));