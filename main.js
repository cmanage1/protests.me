const title = document.getElementById('title');
const date = document.getElementById('date');
const location = document.getElementById('date');
const description = document.getElementById('date');

var participants = document.getElementById('participants');

const data = {title, date, location, description, participants}

const options = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data)
};
//TO BE CHANGED
//after user clicks "POST PROTEST"
fetch('POST', options) //Post to .py django
    .then(response => response.json())
    .then(data => console.log(data));