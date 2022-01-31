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
        'https://1ggzhz91t0.execute-api.ap-south-1.amazonaws.com/test/test', 
        {
            method: "GET", 
            // body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'authentication': "eyJraWQiOiJheVFOY1MwWnRwNUVubmhnN3NCckxTU0NhMmlKMHVwMzFRSHJTR3ZYdFRBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI4OTNmZWRjYS1kYjFjLTQxZDEtYWJmYS05MTJiNGI3NWViN2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjQzNjI4MTQzLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX213MXJkdEhRcyIsImV4cCI6MTY0MzYzMTc0MywiaWF0IjoxNjQzNjI4MTQzLCJ2ZXJzaW9uIjoyLCJqdGkiOiJkZjNhNTk5Yi0wYzEwLTQxNTktOTFhNi01NjVhOThjOWM5NjQiLCJjbGllbnRfaWQiOiI2cTZjYzJhdWlwZG02dHJrYjRuZHJwOTE4NSIsInVzZXJuYW1lIjoiODkzZmVkY2EtZGIxYy00MWQxLWFiZmEtOTEyYjRiNzVlYjdlIn0.q47V6K9h2dPPdqzkNt5ax2U2et5JYg8wp1jv3Z__MKXD7K--qytR8Ie0zS0SQb_1mVt8jumzw7FE3x659mjENOMfsErso0Z-7qLLyWxTWKFKNmP8flN9A7_DPH6oWuIq6KI0YszH9IJBoiCx43ZIW819sgcMxmegc_YZTVEvkQHUsZL7_9ly1MYRoKqXD7qn9_GJlo_3aofLH827eNVyu3k2DdPy7cAKXbZv6z7Xr4NJg6RF7vXPPaCjrub2aqEqWnPpwdLliMj9NFnJFEySgPRhH8FUkQZOe73TsygNcfAyO-gxfbnYroQj9XkFS0brFDY8oqjMTpQG3ZRILUM9tQ",
            }
        }
    )
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
}
