 import cors, { CorsOptions } from "cors";
import express, { Application } from "express";
import Routes from "../modules/endpoints";

export default class Server {
    constructor(app:Application){
        console.log("server api")
        this.appConfig(app)
        new Routes(app)
    }

    private appConfig(app:Application):void{
        const corsOptions:CorsOptions ={
            origin:"http://localhost:3004"
        }

        app.use(cors(corsOptions))
        app.use(express.json())
        app.use(express.urlencoded({extended:true}))
    }
}