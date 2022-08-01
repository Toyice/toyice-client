import { useState } from 'react';
import axios from 'axios';

export async function getApi(url) {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}${url}`)
        return response.data;
    } catch(err) {
        console.log(err);
    }
    return;
}