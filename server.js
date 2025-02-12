import express from 'express';

const app = express();
const customer=[
    { id: 1, name: 'Ram', email: 'Ram@gmail' },
    { id: 2, name: 'kumar', email: 'kumar@gmail' },
    { id: 3, name: 'Hari', email: 'Hari@gmail' }
]

app.get('/customers', (req, res) => {
    res.send(customer);
});

app.listen(4000, () => {});



