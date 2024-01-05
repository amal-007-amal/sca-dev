export default interface UserData{
    am_Username:string,
    am_Password:string,
    am_Role:string, 
    am_id:number
}
export const userLoginList:UserData[]=[
    {
        am_Username:'Amal',
        am_Password:'Amal',
        am_id:1,
        am_Role:'Admin'
    },
    {
        am_Username:'Alan',
        am_Password:'Alan',
        am_id:2,
        am_Role:'User'
    }
]