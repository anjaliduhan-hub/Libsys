

import axios from "axios"

const logic = () => {
return axios.get("https://type.fit/api/quotes")
   .then((response) => console.log(response.data));
}

export default logic;