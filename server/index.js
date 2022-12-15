const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');
const app = express();
const dist = path.resolve(__dirname, '..', 'client', 'dist');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(dist));
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
