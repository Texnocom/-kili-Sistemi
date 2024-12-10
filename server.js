const express = require('express');
const path = require('path');

const app = express();

// Statik dosyaları yükle
app.use(express.static(path.join(__dirname)));

// Sunucuyu başlat
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Web sitesi http://localhost:${PORT} adresinde çalışıyor.`);
});
