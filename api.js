const apiUrl = window.location.href
const apiReplacedURL = apiUrl.replace('@', '&')
const apiFinalURL = new URLSearchParams(apiReplacedURL)

var api_access_token = apiFinalURL.get('access_token')

var accv = "eyJraWQiOiJheVFOY1MwWnRwNUVubmhnN3NCckxTU0NhMmlKMHVwMzFRSHJTR3ZYdFRBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI4OTNmZWRjYS1kYjFjLTQxZDEtYWJmYS05MTJiNGI3NWViN2UiLCJldmVudF9pZCI6ImJlM2QzM2EzLTlkZmYtNDExMi04MmIwLTY3NmRmN2QyODMwNCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gcGhvbmUgb3BlbmlkIHByb2ZpbGUgZW1haWwiLCJhdXRoX3RpbWUiOjE2NDM2MjI5MTUsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfbXcxcmR0SFFzIiwiZXhwIjoxNjQzNjI2NTE1LCJpYXQiOjE2NDM2MjI5MTUsInZlcnNpb24iOjIsImp0aSI6IjUzNDM4ZTBkLWVlNmItNGM0YS1iOTAzLTg2MjE1NWIxMDJjMSIsImNsaWVudF9pZCI6IjZxNmNjMmF1aXBkbTZ0cmtiNG5kcnA5MTg1IiwidXNlcm5hbWUiOiI4OTNmZWRjYS1kYjFjLTQxZDEtYWJmYS05MTJiNGI3NWViN2UifQ.YwcMz6uj8b_HLgGhgJtgOPK7sm9bQFO9EZqe0ivSh4KyCNUFtqumZmARXZTOx9sGu_g8-RaKZFW86YA51BgdwRjgV-LP-a9MzIfMko0Wvzhv4vgojTjKQp3ouY5I4sL-QyyHGo_6_h6ecBGzHCTI-xbc0vOoe7CtclnLbFJw8tMYED-y6ck4DXLEc3W5SQI1aEnW_1Bpn_PmgHsYrTh3g7KJTHoBnc9WJivEU3gAMwgJleSjMhZi1SUip77_1gvult90pVmYPJplzkSIyKEEIyk12cXwujVC-S3NdYy2jiDy9WSGna-Y9ow-KNYuLDDVeyu6nJZwyPx7cJOOjPSPQQ"


var sendData = (userName,email, Subject, description)=>{

    console.log(userName)
    console.log(email)
    console.log(Subject)
    console.log(description)


    // var myHeaders = {
    //     "authentication": accv,
    //     'Access-Control-Allow-Origin': '*'
    // };

    //  var requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    // };


    // const response = await fetch('https://1ggzhz91t0.execute-api.ap-south-1.amazonaws.com/test/test', requestOptions)
    //     .then(response => response.json())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));

    //     console.log(response)
        
    console.log("---------------")

        fetch("https://1ggzhz91t0.execute-api.ap-south-1.amazonaws.com/test/test", 
            {
                method: "GET", 
                // body: JSON.stringify(data),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'authentication': accv,
                }
            }
        ).then(response => response.json())
        .then(data => {
            console.log("Data : " + data)
        })
        .catch((err) => {
            console.log("Error : " + err)
        })
    
    // const myJson = await response.json(); 
    // console.log(myJson)
}

// const response = await fetch("url").then(res => res.json()).then(data => alert(data)).catch(err => console.log(err))

// fetch(URL, 
//     {
//         method: "POST", 
//         body: JSON.stringify(data),
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     }
// ).then(response => response.json())
// .then(data => {
//     ....
// })
// .catch((err) => {
//     ....
//     })
// });