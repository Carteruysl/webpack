/* import fullname from './fullname';

const person = fullname('Json', 'Wang');

console.log(person);

 */

const axios = require('axios');
window.moviegogo =function() {
    var movie_ip = document.getElementById("movie_ip");
    const number = movie_ip.value;

    // Make a request for a user with a given ID
    axios.get('http://localhost:3000/api/movie/' + number)
        .then(function (response) {
            // handle success
            document.getElementById("movie_date").innerHTML = "Response : " + response.request.responseText;
            console.log('response', response.request);
            console.log('response', response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
} 