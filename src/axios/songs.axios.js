import axios from "axios";

// const baseurl = "http://localhost:8080";

export const happyhits = async() =>{
    try {
        
        return await axios.get(`http://localhost:8080/`)
    } catch (error) {
        console.log(error);
    }
}
