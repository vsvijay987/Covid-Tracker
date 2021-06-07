import axios from 'axios';

export const fetchData = async () => {
    const data = await axios.get('https://covid19.mathdro.id/api');
    return data;
}