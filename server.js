const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

const htmlRoutes = require('./routes/htmlRoutes/index');
const apiRoutes = require('./routes/apiRoutes/index');

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () => console.log (`Server started at http://localhost:${PORT}`));