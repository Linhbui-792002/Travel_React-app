import * as request from '../utils/httpRequest';

export const getListCategory = async () => {
    try {
        const response = await request.get('tog/recent-battle');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};