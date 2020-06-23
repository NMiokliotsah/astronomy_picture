export const  handlerImageRequestError = url => {
    if (url && url.includes('image')) {
        return false
    }
    return true;
}