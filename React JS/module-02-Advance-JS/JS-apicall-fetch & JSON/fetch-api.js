fetch('file:///e%3A/Nishant%20HTML/React%20JS/module-03-Advance-JS/JS-apicall-fetch%20%26%20JSON/employee.json')
.then(response=>response.json())
.then(json=>console.log(json))