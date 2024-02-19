const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"users": ["User1", "User2", "User3"]})
})

app.listen(4000, () => { console.log("Server started on Port 4000") })