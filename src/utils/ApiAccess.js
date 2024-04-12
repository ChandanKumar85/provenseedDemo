import axios from "axios";

export default function Authentication() {
    const END_POINT_URL = 'http://localhost:3200'


    // Get URL
    const http = axios.get({
        baseURL: END_POINT_URL,
        headers: {
            "Content-Type": "application/json"
        }
    })

    return {
        http
    }
}