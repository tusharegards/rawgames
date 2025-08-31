import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key : '7d029abd1b654e788ecf538e0c17f2ff'
    }
})