import React from 'react';
import style from './astronomyPicture.module.css';
import Spinner from '../Spinner/Spinner';
import Calendar from '../Calendar/Calendar';

const AstronomyPicture = props => {
    return (
        <div>
            <div className={style.wrapper}>
                <div className={style.picture}>
                    {props.isFetching &&
                        <Spinner />
                    }
                    {props.error ?
                        <p className={style.error}>{props.error}</p> :
                        !props.isFetching && <img src={props.imageUrl} alt=""/>
                    }
                </div>
                <Calendar
                    style={style}
                    name="Calendar"
                    value={props.date}
                    onChange={props.handlerCalendar} />
                <button
                    disabled={props.isAdd}
                    className="btn btn-primary"
                    onClick={props.onClickButton}>
                    Add picture to gallery
                </button>
            </div>
        </div>
    );
}

export default AstronomyPicture;