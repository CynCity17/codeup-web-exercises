export const getGitHubUsers = async ()=> {
    try {
        let response = await fetch('https://api.github.com/users');
        let data = await response.json();
        return data;
    } catch (error){
        console.log(error);
    }
    return fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => data)
        .catch(error =>{
            console.log(error);
        });
}

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
}