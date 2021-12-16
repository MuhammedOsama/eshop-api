const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// routes
const auth = require('./routes/auth');
const users = require('./routes/users');
const products = require('./routes/products');
const carts = require('./routes/carts');
const orders = require('./routes/orders');
const stripes = require('./routes/stripes');

// env
const api = process.env.API_URL;
const PORT = process.env.PORT || 8088;

// middlewares
app.use(express.json());
app.use(cors());

// connect to db
mongoose.connect(`mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@${process.env.DBSERVER}/${process.env.DB}`)
    .then(() => console.log('Database connected successfully...'))
    .catch((err) => console.log(err));

// routes
app.use(`${api}/auth`, auth);
app.use(`${api}/users`, users);
app.use(`${api}/products`, products);
app.use(`${api}/carts`, carts);
app.use(`${api}/orders`, orders);
app.use(`${api}/checkout`, stripes);

// port
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
