import React from 'react';

import SearchForm from './SearchForm';
import Articles from './Articles';

class Home extends React.Component {
    render() {
        return (
            <div>
                <SearchForm />
                <hr />
                <Articles />
            </div>
        )
    }
}

export default Home;