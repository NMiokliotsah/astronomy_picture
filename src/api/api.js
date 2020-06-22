const key = '3JTXJIJ51tHe1R0q9iq3VbgXJxq7moRTUxaeBsa2';

export const api = {
    getPicture(date) {
        return fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
            .then(res => {
                return res.json();
            })
    }
}