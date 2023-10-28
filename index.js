const express = require("express")
const {connection} = require("./db")
const { userRouter } = require("./Routes/user.route")
const {noteRouter} = require("./Routes/note.route")
const cors = require("cors")
require("dotenv").config()


const app = express()
app.use(cors())
app.use(express.json())
app.use("/user", userRouter)
app.use("/note",noteRouter)

app.listen(process.env.PORT, async()=>{
    try {
        await connection
    console.log(`server is running at  ${process.env.PORT} `)
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
})