import React from 'react';
import AstronomyPicture from './astronomyPicture';
import { api } from '../../api/api';
import {
    removeDateFromLocalStorage,
    setDate,
    formatDate
} from '../../utils/handlers/handlersDate'
import { handlerImageRequestError } from '../../utils/handlers/handlerImageRequestError';
import { connect } from 'react-redux';
import { setImage } from '../../redux/gallery-reducer';

class AstronomyPictureContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                imageUrl: null,
                explanation: null,
                error: null,
                date: formatDate(new Date()),
                isFetching: false,
                isAdd: false
            }
        }
        checkImg = (date) => {
            this.props.img.forEach(img => {
                if (formatDate(img.date) === date) {
                    this.setState({ isAdd: true });
                }
            });
        }
        onClickButton = () => {
            const error = this.state.error;
            if (!error) {
                this.props.setImage(this.state.imageUrl, this.state.date);
                this.setState({ isAdd: true });
            }
        }
        handleImgError = (error, image) => {
            if (error) {
                this.setState({ error: "Image does not exists" });
                this.setState({ explanation: null });
                this.setState({ isFetching: false });
            } else {
                this.setState({ imageUrl: image.url });
                this.setState({ explanation: image.explanation})
                this.setState({ error: null });
                this.setState({ isFetching: false });
            }
        }
        handlerCalendar = e => {
            const date = e.target.value;
            this.setState({ isAdd: false });
            this.checkImg(date);
            removeDateFromLocalStorage(date);
            this.setState({ error: null });

            if (e.target.name = 'calendar') {
                this.setState({ date });
                setDate(date);
                this.setState({ isFetching: true });
                api.getPicture(date)
                    .then(res => {
                        const error = handlerImageRequestError(res.url);
                        this.handleImgError(error, res);
                    });
            }
        }
        componentDidMount() {
            const date = localStorage.getItem('date');

            if (date) {
                this.setState({ date });
            }
            const imgDate = date ? date : this.state.date;
            this.checkImg(imgDate);
            this.setState({ isFetching: true });

            api.getPicture(imgDate)
                .then(res => {
                    const error = handlerImageRequestError(res.url);
                    this.handleImgError(error, res);
                });
        }

        render() {
            return <AstronomyPicture
                imageUrl={this.state.imageUrl}
                handlerCalendar={this.handlerCalendar}
                date={this.state.date}
                error={this.state.error}
                isFetching={this.state.isFetching}
                onClickButton={this.onClickButton}
                isAdd={this.state.isAdd}
                explanation={this.state.explanation} />
        }
    }

const mapToStateProps = state => ({
    img: state.gallery.img
});

export default connect(mapToStateProps, { setImage })(AstronomyPictureContainer);