const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor

// Ruta para hacer una solicitud a la API
app.get('/api/products', async (req, res) => {
    try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});

//Creando nueva rama CamiloH