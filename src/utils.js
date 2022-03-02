import { format } from 'date-fns';
import { it } from 'date-fns/locale'

const api = {
    key: process.env.REACT_APP_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/"
}

const day = format(new Date(), 'EEEE', {locale: it});
const date = format(new Date(), 'dd MMMM yyyy', {locale: it});
const hour = format(new Date(), 'kk');
const minutes = format(new Date(), 'mm');

export { api, date, hour, day, minutes };