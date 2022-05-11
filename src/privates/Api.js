function Api() {
  const api = {
    proxy: "https://nameless-island-77647.herokuapp.com/",
    apiHost: "https://api.pingdom.com/api/3.1/checks/",
    apiAuth: "Bearer",
    apiToken: import.meta.env.VITE_API_TOKEN,
  };

  return api;
}

export default Api;
