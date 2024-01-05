import { Application } from "express";
import authroutes from "../authentication/routes/auth.routes";

export default class Routes{
    constructor(
        app:Application
    ){
        app.use("/api",authroutes)
    }
}