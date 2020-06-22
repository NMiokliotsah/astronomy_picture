import React from 'react';
import style from './astronomyPicture.module.css';
import Spinner from '../Spinner/Spinner';
import Calendar from '../Calendar/Calendar';

const AstronomyPicture = props => {
    return (
        <div className={style.wrapper}>
            <div className={style.picture}>
                {props.isFetching &&
                    <Spinner />
                }
                {props.error ?
                    <p className={style.error}>{props.error}</p> :
                    !props.isFetching && <img src={props.imageUrl} />
                }
            </div>
            <Calendar
                style={style}
                name="Calendar"
                value={props.date}
                onChange={props.handlerCalendar} />
        </div>
    );
}

export default AstronomyPicture;