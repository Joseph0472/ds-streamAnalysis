function getUsers() {
    return fetch('/api/users').then(res => res.json());
}

function getUserByUsername(username) {
    return fetch(`/api/users/${username}`).then(res => res.json());
}

function createUser(user) {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}



export function showMsg(){
    const spanGreeting = document.querySelector("#showmsg");

    return fetch('/api/msg').then(res => res.json())
        .then(response => response.json())
        .then(json => spanGreeting.innerHTML = json.message);
}

export default {
    // getUsers,
    // getUserByUsername,
    // createUser
    showMsg
};