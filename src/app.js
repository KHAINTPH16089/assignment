const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/api/products', (req,res) => {
    const url = req.url;
    console.log(url);
    const data = [
        { id: 1, name: "product A" },
        { id: 2, name: "product B" },
        { id: 3, name: "product C" },
        { id: 4, name: "product D" }
    ];
    res.end(JSON.stringify(data));
})

app.listen(port, () => console.log('bạn đang chạy ở http://localhost:'+port));