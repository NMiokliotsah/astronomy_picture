import React from 'react';
import style from './astronomyPicture.module.css';
import Spinner from '../Spinner/Spinner';
import Calendar from '../Calendar/Calendar';

const AstronomyPicture = props => {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.picture}>
                    {props.isFetching &&
                        <Spinner />
                    }
                    {props.error ?
                        <p className={style.error}>{props.error}</p> :
                        !props.isFetching && <img src={props.imageUrl} alt="" />
                    }
                </div>
                <div className={style.imgInfo}>
                    <h2>Astronomy picture of the day</h2>
                    <p>Each day a different image or photograph of our fascinating universe is featured,
                        along with a brief explanation written by a professional astronomer.</p>
                    {props.explanation && <h4>Explanation of today's image</h4>}
                    <p>{props.explanation}</p>
                    <div className={style.test}>
                        <Calendar
                            name="Calendar"
                            value={props.date}
                            onChange={props.handlerCalendar} />
                        <button
                            disabled={props.isAdd || props.error || props.isFetching}
                            className={"btn btn-primary " + style.addImageBtn}
                            onClick={props.onClickButton}>
                            Add picture to gallery
                    </button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default AstronomyPicture;