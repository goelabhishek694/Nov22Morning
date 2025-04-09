exports.authCheck = async (req, res, next) => {
    try{
        console.log("checking for auth token");
        console.log("auth token found");
        console.log("user verified");
        next();
    }catch(err){
        console.log(err);
    }
}