import React from 'react';
import SearchForm from './SearchForm';
import Articles from './Articles';

class Main extends React.Component {
    render() {
        return (
            <idv>
                <h2>Hello world!</h2>
                <hr/>
                <SearchForm />
                <hr/>
                <Articles />
            </idv>
        )
    }
}

export default Main;