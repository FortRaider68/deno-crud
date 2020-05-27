import { IUser } from "../Model/user.ts";

let users: Array<IUser> = [];

const getUsers = ({ response } : { response:any }) =>{
    response.body = users;
}

const getUser = (
    {params,response} : {params:{id:string}; response:any},)=>{
        const user: IUser | undefined = users.find((user)=>user.id === params.id)

        if(user){
            response.status = 200;
            response.body = user;
        }else{
            response.status = 400;
            response.body = {message:"User Not Found"};
        }
    }

const addUser = async (
    {request,response} : {request:any; response:any}
)=>{
    const Id_user = users.length + 1;

    const body = await request.body();
    const user:IUser =  body.value;

    user.create_at = new Date();
    user.update_at = new Date();
    user.id = Id_user.toString();
    users.push(user);

    response.status = 200;
    response.body = user;
    
}

const updateUser = ({params,request,response}:{params:{id:string};request:any;response:any})=>{
  let user:IUser | undefined = users.find((user) =>  user.id === params.id)


  if (user){
    const body = request.body();
    const updateUser:{name?:string,email?:string} = body.value;

    user = {...user,...updateUser,update_at:new Date()}
    users = [...users.filter((user)=> user.id !== params.id),user]

    response.status = 200;
    response.body = user;
  }
  else{
    response.status = 404;
    response.body = {message:"User Not Found."}
  }
}

const removeUser = (
  { params, response }: { params:any; response: any },
) => {
  users = users.filter((user) => user.id !== params.id);

  response.body = { message: "OK" };
  response.status = 200;
};



export {getUsers, getUser, addUser,updateUser,removeUser};
