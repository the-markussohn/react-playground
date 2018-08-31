import React, {Component} from 'react';
import css from './Person.css';
import Aux from '../../../hoc/Aux';
import withClassName from '../../../hoc/withClassName';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount()');
    }

    render() {
        console.log('[Person.js] inside render()');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
    }
}

export default withClassName(Person, css.Person);