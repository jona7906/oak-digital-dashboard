function PostResData(props) {
  
    console.log("UPLOADIING RES DATA!!!")
let resData = {
    server: props.server,
    timestamp: props.resTimestamp,
    restime: props.resTime
} 

    fetch("https://oakdigital-4081.restdb.io/rest/responstime", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "61b71e3fa3fedd557f8e0abd",
        "cache-control": "no-cache",
      },
      body: resData,
    })
      .then((res) => res.json())
      .then((data) => console.log(`${data}`));
  }

  export default PostResData;