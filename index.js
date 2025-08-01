require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const dbConnect = require("./Database/db");
dbConnect();


//middleware
app.use(cors({
    origin:["https://balramworldprofile.vercel.app","http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true

}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// api
app.use("/api/contact",require("./routes/Contact_route"));



app.get("/",(req,res)=>{
    res.send("Hello World");
    
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})



