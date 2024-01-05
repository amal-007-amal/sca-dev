import { Router } from "express";
import { UserLogin } from "../controllers/authentication";

class AuthRoutes{
    router  =  Router()
    constructor(){
        this.initRoutes()
    }
    initRoutes(){
        this.router.post('/',UserLogin)
    }
}

export default new AuthRoutes().router