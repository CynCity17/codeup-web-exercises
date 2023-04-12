import {getGitHubUsers, renderGitHubUser, getGitHubUser, getGitHubEvents, getLastCommit} from "./promises.js";


(async ()=>{
    // let users = await getGitHubUsers();
    // console.log(users);
    // const usersGrid = document.querySelector('#userGrid');
    // users.forEach(function(user){
    //     renderGitHubUser(user, usersGrid);
    // })

    // Get events
    let lastCommit = await getLastCommit('CynCity17');
    console.log(lastCommit.created_at);

})();