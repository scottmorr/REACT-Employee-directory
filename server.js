const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path')

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"))
})

app.listen(PORT, function () {
    console.log("Listening on PORT", PORT)
})