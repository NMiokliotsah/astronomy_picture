import React from 'react';

const Calendar = (props) => {
    return (
        <div className={props.style.calendar}>
            <input 
                name={props.name} 
                type="date" 
                value={props.value} 
                onChange={props.onChange} />
        </div>
    );
}

export default Calendar;