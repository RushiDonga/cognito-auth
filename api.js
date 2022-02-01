const apiUrl = window.location.href
const apiReplacedURL = apiUrl.replace('@', '&')
const apiFinalURL = new URLSearchParams(apiReplacedURL)

var api_access_token = apiFinalURL.get('access_token')

var sendData = (userName,email, Subject, description)=>{

    console.log(userName)
    console.log(email)
    console.log(Subject)
    console.log(description)


    fetch(
        'https://mahtd90zi6.execute-api.ap-south-1.amazonaws.com/prod/put-data', 
        {
            method: "POST", 
            body: {
                "name": "Rushi Donga",
                "email": "rushi.donga.04@gmail.com",
                "subject":"This is a test Subject",
                "description":"This is a test description"
            },
            headers: {
                'Content-Type': 'application/json',
                'authentication': api_access_token
              }
        }
    )
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
