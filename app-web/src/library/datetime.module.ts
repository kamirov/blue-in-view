import { Moment } from "moment";

export const Datetime = {
    format
}

function format(datetime: Moment) {
    return datetime.format('LL')
}
