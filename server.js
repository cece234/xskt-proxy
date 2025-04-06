const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/xskt', async (req, res) => {
  try {
    const response = await axios.get('https://api-xskt.mb-plus.com/api/v1/kqxs/mien-nam/today');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: 'Không lấy được dữ liệu từ API gốc.',
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server đang chạy tại http://localhost:${PORT}`);
});

