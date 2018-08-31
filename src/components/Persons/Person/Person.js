import React, {Component} from 'react';
import PropTypes from 'prop-types';
import css from './Person.css';
import Aux from '../../../hoc/Aux';
import withClassName from '../../../hoc/withClassName';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
        this.inputElementRef = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount()');
        if (this.props.position === 0) {
            this.inputElementRef.current.focus();
        }
    }

    focus() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] inside render()');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClassName(Person, css.Person);