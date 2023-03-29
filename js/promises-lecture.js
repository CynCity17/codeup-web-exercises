import {getGitHubUsers, renderGitHubUser} from "./github.js";


(async ()=>{
    let users = await getGitHubUsers();
    console.log(users);
    const usersGrid = document.querySelector('#userGrid');
    users.forEach(function(user){
        renderGitHubUser(user, usersGrid);
    })

})();