import { format } from 'date-fns';

const api = {
    key: process.env.REACT_APP_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/"
}

const day = format(new Date(), 'EEEE');
const date = format(new Date(), 'dd MMMM yyyy');
const hour = format(new Date(), 'kk');
const minutes = format(new Date(), 'mm');

export { api, date, hour, day, minutes };