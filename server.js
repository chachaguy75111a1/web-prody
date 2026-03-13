'use strict';

const express = require('express');
const request = require('request');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res) => {
    const url = req.url;

    // Modify the request as needed
    req.pipe(request({ url })).pipe(res);
});

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
