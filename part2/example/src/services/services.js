import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

// eslint-disable-next-line 
export default {
  getAll,
  create,
  update,
};



/*REMARKS: 
 iNSTALLATION : npm install axios
npm install json-server --save-dev

THEN: json-server --port 3001 --watch notes.db
//this will create json for notes which can be viewed at "localhost:3001/notes" */