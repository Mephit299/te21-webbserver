const express = require("express")
const app = express()
const nunjucks = require('nunjucks');

const indexRouter = require("./routes/index")

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

const port = process.env.PORT || 3000



app.use(express.static("public"))

app.use("/", indexRouter)


app.get("/", (req, res) => {
    res.send("ok")
})

app.get("/hello", (req, res) => {
    res.send("Hello World!")
})



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})