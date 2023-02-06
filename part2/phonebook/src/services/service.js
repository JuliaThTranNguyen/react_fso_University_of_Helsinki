import axios from "axios";

const baseUrl = "http://localhost:3001/persons";
//remember to install axios and json-server before running the app:
//npm install axios
//npm install json-server --save-dev

// after the installation, pls do:
//to define an alternate port and to automatically observed changes of jason data
//"json-server --port 3001 --watch db.json"
// Or:
//"npx json-server --port 3001 --watch db.json"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response =>  { console.log("response: ", response.data); return response.data; })
}

const create = newObject => {
  console.log(newObject);
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}
const del = (id) => {
  axios.delete(`${baseUrl}/${id}`);
}

 // eslint-disable-next-line
 export default { getAll, create, update, del }