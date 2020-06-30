import React from 'react';
import style from './Spinner.module.css';

const Spinner = () => {
    return (
        <div className={style.wrapper}>
            <div className={"spinner-border text-primary " + style.spinner} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;