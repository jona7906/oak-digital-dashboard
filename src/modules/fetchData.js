function fetchData(props) {
  // const tableURL = "https://api.pingdom.com/";
  // const tableAPI = "3oYKhp8_9NHeNiXEynYDKZcYI39waZKjMYqsZOXQ6BJg9SElwQNWQzoNlMgEJAN__QYnm0Q";

  /*  let serverData;
  const url = "https://api.pingdom.com/api/3.1/checks/";
  const options = {
    mode: "no-cors",
      method: "GET",
    "content-type": "application/json",
     credentials: "include",
    "Access-Control-Allow-Credentials": true, 
    headers: {
      Accept: "application/json",
      authorization: "3oYKhp8_9NHeNiXEynYDKZcYI39waZKjMYqsZOXQ6BJg9SElwQNWQzoNlMgEJAN__QYnm0Q",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => (serverData = data));

  return serverData; */

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer 3oYKhp8_9NHeNiXEynYDKZcYI39waZKjMYqsZOXQ6BJg9SElwQNWQzoNlMgEJAN__QYnm0Q");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://nameless-island-77647.herokuapp.com/https://api.pingdom.com/api/3.1/checks/", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  /* 
  fetch("https://api.pingdom.com/api/3.1/checks", {
    method: "get",
    
    Authorization: "Bearer 3oYKhp8_9NHeNiXEynYDKZcYI39waZKjMYqsZOXQ6BJg9SElwQNWQzoNlMgEJAN__QYnm0Q",

    headers: {
      "Content-Type": "application/json;",
      "x-apikey": "Bearer 3oYKhp8_9NHeNiXEynYDKZcYI39waZKjMYqsZOXQ6BJg9SElwQNWQzoNlMgEJAN__QYnm0Q",
      "cache-control": "cache",
   
      "Access-Control-Allow-Origin": "https://localhost:3000",

     
    },
  })
    .then((res) => res.json())
    .then((data) => {
      serverData = data;
    }); */

  /*  let serverData = [];
  console.log("FETCHING!!");
  fetch(`${props.tableURL}`)
    .then((response) => response.json())
    .then((data) => (serverData = data));
  return serverData; */
}

export default fetchData;
