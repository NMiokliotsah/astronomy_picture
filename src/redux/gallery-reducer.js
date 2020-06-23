const SET_IMG = 'SET_IMG';

const initialState = {
    img: []
}

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMG: {
            return {
                ...state,
                img: [...state.img, action.img]
            }
        }
        default: {
            return state;
        }
    }
}

export const setImage = (url, date) => ({type: SET_IMG, img:{url, date}});

export default galleryReducer;