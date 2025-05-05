const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// root
app.get("/", (req, res) => {
    res.send("<h2>Hello, World!</h2>");
});

app.listen(PORT, ()=> {
    console.log(`API is listening on port ${PORT}`);
})