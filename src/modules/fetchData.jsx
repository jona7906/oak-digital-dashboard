import Api from "../privates/Api";

function fetchData() {
  const api = Api();
  let serverData = [];
  let myHeaders = new Headers();
  myHeaders.append("Authorization", api.apiAuth + " " + api.apiToken);

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(api.proxy + api.apiHost, requestOptions)
    .then((response) => response.json())
    .then((result) => serverData.push(result))
    .catch((error) => console.log("error", error));

  return serverData;
}

export default fetchData;
