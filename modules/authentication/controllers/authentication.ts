import { Request,Response,NextFunction } from "express";
import { userLoginList } from "../models/usermodel";
export function UserLogin(req:Request,res:Response,next:NextFunction){
    const {username,password} =  req.body
    const userList=userLoginList
    let checkLogin = userList.find((item)=>{item.am_Username==username&& item.am_Password==password})
    if(checkLogin!=undefined){
        return res.send({message:'Login Success'})
    }else{
        return res.send({message:'Login Failed'})
    }
}

