import { Router } from "express";
import { UserLogin, UserTokenValidate } from "../controllers/authentication";

class AuthRoutes{
    router  =  Router()
    constructor(){
        this.initRoutes()
    }
    initRoutes(){
        /**check the login using the credentails */
        this.router.post('/userLogin',UserLogin)

        /**check the token valid or not */
        this.router.post('/valdateToken',UserTokenValidate)
    }
}

export default new AuthRoutes().router