import React from 'react';

const withClass = (props) => {
    return (
        <div className={props.css}>
            {props.children}
        </div>
    );
};

export default withClass;