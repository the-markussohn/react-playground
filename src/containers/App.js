import React, {Component} from 'react';
import css from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] inside constructor', props);
        this.state = {
            persons: [
                {id: 1, name: 'Max', age: 28},
                {id: 2, name: 'Manu', age: 29},
                {id: 3, name: 'Stephanie', age: 26}
            ],
            showPersons: false
        }
    }

    componentWillMount() {
        console.log('[App.js] inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] inside componentDidMount()');
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        // const person = Object.assign({}, this.state.persons[personIndex]);
        person.name = event.target.value;

        const persons = [...this.state.persons];

        persons[personIndex] = person;

        this.setState({
            persons
        });
    };

    deletePersonHandler = (index) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({
            persons
        });
    };

    togglePersonsHandler = () => {
        const showPersons = this.state.showPersons;
        this.setState({
            showPersons: !showPersons
        })
    };

    render() {

        console.log('[App.js] inside render()');

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                />
            );
        }

        return (
            <div className={css.App}>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;
