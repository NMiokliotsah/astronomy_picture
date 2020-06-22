export const formatDate = date => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export const removeDateFromLocalStorage = (date) => {
    const currentDate = formatDate(new Date());
    const selectedDate = formatDate(date);

    if (selectedDate === currentDate) {
        localStorage.removeItem('date')
    }
}

export const setDate = date => {
    const userDate = formatDate(new Date(date));
    const currentDate = formatDate(new Date());

    if (!(userDate === currentDate)) {
        localStorage.setItem('date', date);
    }
}