import axios from "axios";
const blogFetch=axios.create({
    baseURL:"http://127.0.0.1:8000/",
    headers:{"Content-Type":"application/Json",}
})
export default blogFetch;