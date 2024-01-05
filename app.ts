import express,{Application} from "express";
import Server from "./server";
import { userLoginList } from "./modules/authentication/models/usermodel";

const app:Application = express()
const server:Server =  new Server(app)
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3004;
app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})