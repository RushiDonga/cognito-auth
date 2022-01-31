const url = window.location.href
const replacedURL = url.replace('@', '&')
const finalURL = new URLSearchParams(replacedURL)

var access_token = finalURL.get('access_token')

var sendData = (userName,email, Subject, description)=>{

    console.log(userName)
    console.log(email)
    console.log(Subject)
    console.log(description)

    // instantiate a headers object
    var myHeaders = {
        "authentication": access_token
    };

    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"firstName":firstName,"lastName":lastName});

    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    // make API call with parameters and use promises to get response
    fetch("https://1ggzhz91t0.execute-api.ap-south-1.amazonaws.com/test/test", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
}