const url = window.location.href
const replacedURL = url.replace('#', '&')
const finalURL = new URLSearchParams(replacedURL)
var accessToken = finalURL.get('access_token')
var idToken = finalURL.get("id_token")
var UserName, UserEmail;

aws_region = 'ap-south-1';
AWS.config.region = aws_region; 

AWS.config.apiVersions = {
    cognitoidentityserviceprovider: '2016-04-18'
}; 

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider(); 

var params = {
    AccessToken:  "eyJraWQiOiJYR1RoZ3M4aGM2c3dnUUJnc25oelpxamRTVUo5bU44TVo4endieDJzUkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhYzQ2NWEyMi1jN2NkLTQzZmMtOWVlOS1mZjA2ZGE5MjZkMDMiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjQzODAwMDY3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX0hCMWNZZ29tQiIsImV4cCI6MTY0MzgwMzY2NywiaWF0IjoxNjQzODAwMDY3LCJ2ZXJzaW9uIjoyLCJqdGkiOiI5OGQxNjZmYS05NmIyLTRjZjQtYjFjNS1kZmUwNWVkOTM1MjUiLCJjbGllbnRfaWQiOiI3amMxdGwwMmZwaDA3MmRubGI0bzVoaDMzdCIsInVzZXJuYW1lIjoiYWM0NjVhMjItYzdjZC00M2ZjLTllZTktZmYwNmRhOTI2ZDAzIn0.IwzfOm0D8wmLd9oXrXULXLPf9FYANXweK1i1B8p7YUfqQhviJR24d639XOQg0LB_6rvT4XnrbQlD09qsLGxtRNNrywRM1z-0OwscXOzV4mXBhBLpXgBPlqCb37xjScuG8hgavyyjdyV-CXs81amC2zmb-Crbaguob1CQqDKEj7_SQt7v-G_Bb8OVqVlFgL6nHTdk4hM31rots2j2uxQDJ9_Bnnn9cgHOeJjufbcs5l2BVbkdQfFF6XlVNSV9Y8LpcY1G8xQpyPwhCiCSMkrlYBfZe1H2_XO53npmp9pXKYDUAvJnPMtVGqXoXlWjVqYnGNMLe4SoN_Vn7OID8Z5tJw"
};

cognitoidentityserviceprovider.getUser(params, function(err, data) {
    if (err) 
    {
        window.location.href = 'https://rushidonga.github.io/cognito-auth/'
    }
    else 
    {
        console.log(data);

        for(var i = 0; i < data.UserAttributes.length; i++)
        {   
            if(data.UserAttributes[i].Name == 'name')
            {
                UserName = data.UserAttributes[i].Value;
            }
        }

        for(var j = 0; j < data.UserAttributes.length; j++)
        {
            if(data.UserAttributes[j].Name == 'email')
            {
                UserEmail = data.UserAttributes[j].Value;
            }
        }

        document.getElementById('userName').innerHTML = UserName;
        document.getElementById('userEmail').innerHTML = UserEmail;  

        document.getElementById('userNameInput').value =UserName;
        document.getElementById('userEmailInput').value = UserEmail;    
    }
});