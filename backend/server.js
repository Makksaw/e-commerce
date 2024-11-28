const express = require('express');
const port = 5555;
const app = express();

const productsService = require('./services/products');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('hello world'));

app.get('/products', async (req, res) => {
    try {
        const response = await productsService.getProducts();
        res.status(200).send(response);
    } catch (err) {
        res.status(500).send(e.message);
    }
});

app.post('/products', async (req, res) => {
    try {
        const response = await productsService.addProduct(req.body);
        res.status(200).send(response);
    } catch (err) {
        res.status(500).send(e.message);
    }
});

app.delete('/products/:id', async (req, res) => {
    try {
        const response = await productsService.deleteProduct(req.params.id);
        res.status(200).send(response);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
