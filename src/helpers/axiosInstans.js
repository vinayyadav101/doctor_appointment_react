import axios from "axios";

const hostName = window.location.hostname
const baseURL = `http://${window.location.hostname}:8085`

export const instance = axios.create({
    baseURL:baseURL,
    withCredentials:true,
})