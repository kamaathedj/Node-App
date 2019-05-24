const fs=require('fs')



function fetchUsers() {
     try {
         var users=fs.readFileSync('user.json');
         return JSON.parse(users);
         
    } catch (error) {
        console.log(error);
         return [];
        
    }
};
function personUser(user) {
    var userObj=fetchUsers();
    userObj.push(user);
    fs.writeFileSync('user.json',JSON.stringify(userObj));
};



module.exports={
    personUser,
    fetchUsers
}