const bcrypt = require("bcrypt")
const hashPassword = async (password)=>{
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword;

    }catch(err){
        console.log(`Error in hashing password ${error}`)
    }
}
const comparePassword = async(password,hashedPassword)=>{
return bcrypt.compare(password,hashedPassword)
}

module.exports={hashPassword,comparePassword}