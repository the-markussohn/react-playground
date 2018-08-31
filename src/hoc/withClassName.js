import React from 'react';

const withClassName = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent/>
        </div>
    );
};

export default withClassName;