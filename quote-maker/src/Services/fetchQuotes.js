import axios from "axios"
export const fetchQuotes = async() => {
   const data = await axios.get("https://api.quotable.io/random").then((res) => {
        console.log(res.data);
        return { data:res.data, status: res.status, error: null }
    }).catch(err => {
        console.log(err);
        // return { data:"", status: res.status, error: err }
    })
    return data;
}