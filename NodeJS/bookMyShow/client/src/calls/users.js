const {axiosInstance} = require("./index")

//register a new user
export const RegisterUser = async(value) => {
    try{
        const response = await axiosInstance.post("/api/users/register", value);
        return response.data
    }catch(err){
        console.error(err);
        return err;
    }
}

export const LoginUser = async(value) => {
    try{
        const response = await axiosInstance.post("/api/users/login", value);
        return response.data
    }catch(err){
        console.error(err);
        return err;
    }
}

export const GetCurrentUser = async() => {
    try{
        const response = await axiosInstance.post("/api/users/get-current-user");
        return response.data
    }catch(err){
        console.error(err);
        return err;
    }
}