import React from 'react';
import AstronomyPicture from './astronomyPicture';
import { api } from '../../api/api';
import { 
    removeDateFromLocalStorage, 
    setDate, 
    formatDate 
} from '../../utils/handlers/handlersDate'
import { handlerImageRequestError } from '../../utils/handlerImageRequestError';

class AstronomyPictureContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: null,
            error: null,
            date: formatDate(new Date()),
            isFetching: false
        }
    }
    handlerCalendar = e => {
        const date = e.target.value;

        removeDateFromLocalStorage(date);
        this.setState({ error: null });
        if (e.target.name = 'calendar') {
            this.setState({ date });
            setDate(date);
            this.setState({ isFetching: true });
            api.getPicture(date)
                .then(res => {
                    const error = handlerImageRequestError(res.url);
                    if (error) {
                        this.setState({ error: "Image does not exists" });
                        this.setState({ isFetching: false });
                    } else {
                        this.setState({ imageUrl: res.url });
                        this.setState({ error: null });
                        this.setState({ isFetching: false });
                    }
                });
        }
    }
    componentDidMount() {
        const date = localStorage.getItem('date');
        this.setState({ date });
        const imgDate = date ? date : this.state.date;

        this.setState({ isFetching: true });
        api.getPicture(imgDate)
            .then(res => {
                this.setState({ imageUrl: res.url });
                this.setState({ isFetching: false });
            });
    }

    render() {
        return <AstronomyPicture
            imageUrl={this.state.imageUrl}
            handlerCalendar={this.handlerCalendar}
            date={this.state.date}
            error={this.state.error}
            isFetching={this.state.isFetching} />
    }
}

export default AstronomyPictureContainer;