import axios from 'axios'
import {config} from "@/config";
const {urlConfig: {backend}} = config

const getProducts = async (params = {}) => {

    try {
        const options = {
            url: `${backend}/products`,
            json: true,
            method: 'GET',
            params
        }
        console.log('options ', options)
        const {data} = await axios(options)
        return {statusCode: 200, data}
    } catch (e) {
        console.log(e)
        return {statusCode: 400, error: false}
    }
}

const getTransports = async (params = {}) => {
    try {
        const options = {
            url: `${backend}/transports`,
            json: true,
            method: 'GET',
            params
        }
        console.log('options ', options)
        const {data} = await axios(options)
        return {statusCode: 200, data}
    } catch (e) {
        console.log(e)
        return {statusCode: 400, error: false}
    }
}

export {
    getProducts,
    getTransports
}
