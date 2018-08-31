import React from "react";
import Aux from '../../hoc/Aux';
import css from './Cockpit.css';


const cockpit = (props) => {
    const classes = [];
    let btnClass = css.Button;
    if (props.showPersons) {
        btnClass = [css.Red, css.Button].join(' ');
    }
    if (props.persons.length <= 2) {
        classes.push(css.red);
    }
    if (props.persons.length <= 1) {
        classes.push(css.bold);
    }

    return (
        <Aux>
            <h1>Welcome to {props.appTitle} app!</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
            <button onClick={props.login}>Log In</button>
        </Aux>
    );
};

export default cockpit;