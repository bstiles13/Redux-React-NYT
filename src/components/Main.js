import React from 'react';
import SearchForm from './SearchForm';
import Results from './Results';

class Main extends React.Component {
    render() {
        return (
            <idv>
                <h2>Hello world!</h2>
                <hr/>
                <SearchForm />
                <hr/>
                <Results />
            </idv>
        )
    }
}

export default Main;