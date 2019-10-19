const url = require('url');

const myUrl = new URL('http://avitannenbaum.com:8000/index.html?id=100&status=active');

// Serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (rootDomain)
console.log(myUrl.host);

// Hostname (Does not get the port)
console.log(myUrl.hostname);


//Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
