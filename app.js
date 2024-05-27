const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const loginRoute = require('./routes/login');
const dashboardRoutes = require('./routes/dashboard');
const detailRoutes = require('./routes/detail');

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API REST');
});

app.use('/login', loginRoute);
app.use('/dashboard', dashboardRoutes);
app.use('/detail', detailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
