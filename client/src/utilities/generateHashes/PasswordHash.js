import bcrypt from "bcryptjs"

const hashPassword=(password)=>{
    return new Promise((resolve, reject)=>{
        bcrypt.genSalt(10, function(err, salt) {
           if(err){
            reject(err)
           }
           else{
            bcrypt.hash(password, salt, function(err, hash) {
                // Store hash in your password DB.
                console.log("this is the hash ", hash)
                if(err){
                    console.log("Error is ", err)
                    reject(err);
                }
                resolve(hash);
            });
           }
        });
    })
    
}
export {hashPassword};