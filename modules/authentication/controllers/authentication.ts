import { Request,Response,NextFunction } from "express";
import { userLoginList } from "../models/usermodel";
import { TokenGenerator, TokenValidator } from "../../../services/tokengenerator";

export function UserLogin(req:Request,res:Response,next:NextFunction){
    const {username,password} =  req.body
    console.log("username ",username,password)
    if(username!=undefined && password!=undefined){
        console.log(username,password)
        const userList = userLoginList
        let checkLogin = userList.filter((item)=>{
            if(item.am_Username===username && item.am_Password===password){
                return item
            }
        })
        console.log("check login",checkLogin)
        if(checkLogin!=undefined){
            let token = TokenGenerator(checkLogin[0])
            return res.send({message:'Login Success',jwt_token:token,user:checkLogin})
        }else{
            return res.send({message:'Login Failed'})
        }
    }else{
        return res.status(500).send({message:'Invalid Credentials'})
    }
}

export function UserTokenValidate(req:Request,res:Response,next:NextFunction){
    const {token} = req.body
    const checkToken = TokenValidator(token)
    console.log("validate ",checkToken)
    res.send({data:checkToken})
}

