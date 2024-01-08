import GlobalConfig from "../g-config/globalconfig";
import UserData from "../modules/authentication/models/usermodel";
import jwt from "jsonwebtoken"

//generator the token
export function TokenGenerator(user:UserData){
    console.log("user logined ",user)
    let global =  new GlobalConfig()
    console.log("process key",global.JWT_SECRET_KEY)
    let data = {
        time:Date(),
        userId:user.am_id
    }
    const newToken = jwt.sign(data,global.JWT_SECRET_KEY,{expiresIn:'1h'})
    return newToken
}

//validate the token expire or not 
export function TokenValidator(token:any){
    try {
        let global = new GlobalConfig()
        const checkToken = jwt.verify(token,global.JWT_SECRET_KEY)
        console.log("token ",checkToken)
        return checkToken
    } catch (error) {
        return error
    }
}