import axios from 'axios'

const instance = axios.create({
    baseURL: "https://messaging-app-backend-a3ff7c619372.herokuapp.com/"
})

export default instance