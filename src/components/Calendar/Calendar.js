import React from 'react';
import style from './Calendar.module.css';

const Calendar = (props) => {
    return (
        <div className={style.calendar}>
            <input 
                name={props.name} 
                type="date" 
                value={props.value} 
                onChange={props.onChange} />
        </div>
    );
}

export default Calendar;