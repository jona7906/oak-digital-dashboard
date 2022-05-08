function fetchData(props) {
  const tableURL = "https://api.pingdom.com/";
  const tableAPI = "3oYKhp8_9NHeNiXEynYDKZcYI39waZKjMYqsZOXQ6BJg9SElwQNWQzoNlMgEJAN__QYnm0Q";
  let serverData;
  fetch("https://api.pingdom.com/", {
    method: "get",
    headers: {
      "Content-Type": "application/json;",
      "x-apikey": "3oYKhp8_9NHeNiXEynYDKZcYI39waZKjMYqsZOXQ6BJg9SElwQNWQzoNlMgEJAN__QYnm0Q",
      "request-mode": "no-cors",
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": "https://amazing-pothos-67d646.netlify.app",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      serverData = data;
    });
  return serverData;
  /*  let serverData = [];
  console.log("FETCHING!!");
  fetch(`${props.tableURL}`)
    .then((response) => response.json())
    .then((data) => (serverData = data));
  return serverData; */
}

export default fetchData;
