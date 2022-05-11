function PostResData(servername, testtime, restime) {
  
    console.log("UPLOADIING RES DATA!!!")

   let resData = {
    server: servername,
    timestamp: testtime,
    restime: restime
} 

    fetch("https://oakdigital-4081.restdb.io/rest/responstime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "73ecc7c2e5178e71e65aa4978e9ddbe8647dd",
        "cache-control": "no-cache",
        
      },
      body: resData,json: true 
    })
      .then((res) => res.json())
      .then((data) => console.log(`${data}`));
  }

  export default PostResData;