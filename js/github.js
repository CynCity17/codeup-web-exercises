import keys from "./keys.js";

export const getGitHubUsers = async (since = 1, perPage = 32)=> {
    try {
        let options = {
            header: {
                "Authorization": `token ${keys.GITHUB_API}`
            }
        }
        let response = await fetch(`https://api.github.com/users?since=${since}&per_page=${perPage}`);
        let data = await response.json();
        return data;
    } catch (error){
        console.log(error);
    }
    // return fetch('https://api.github.com/users')
    //     .then(response => response.json())
    //     .then(data => data)
    //     .catch(error =>{
    //         console.log(error);
    //     });
};

export const getGitHubUser = async (username) => {
    try {
        let options = {
            header: {
                "Authorization": `token ${keys.GITHUB_API}`
            }
        }
        let response = await fetch(`https://api.github.com/users/${username}`);
        let data = await response.json();
        return data;
    } catch (error){
        console.log(error);
    }
};


export const getGitHubEvents = async (username) => {
    try {
        let options = {
            header: {
                "Authorization": `token ${keys.GITHUB_API}`
            }
        }
        let response = await fetch(`https://api.github.com/users/${username}/events/public`);
        let data = await response.json();
        return data;
    } catch (error){
        console.log(error);
    }
};

export const getLastCommit = async (username) => {
    let events = await getGitHubEvents(username);
    let lastCommit = events.find(function(e){
        return e.type === "PushEvent";
    })
    return lastCommit;
};

export const renderGitHubUser = (user, parent) => {
    const element = document.createElement('div');
    element.classList.add('user-card');
    element.innerHTML = `
        <div class="img-wrapper">
            <img src="${user.avatar_url}" alt="User Image" class="avatar">
        </div>
            <h2>${user.login}</h2>
            <a href="${user.html_url}" target="_blank">Go to Profile</a>
            <button>Remove</button>
    `;
    element.querySelector('button').addEventListener('click', function (){
        element.remove();
    });
    parent.appendChild(element);
};