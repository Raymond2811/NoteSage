const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

const apiRoutes = require('./routes/apiRoutes/index');
const htmlRoutes = require('./routes/htmlRoutes/index');

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => console.log (`Server started at http://localhost:${PORT}`));