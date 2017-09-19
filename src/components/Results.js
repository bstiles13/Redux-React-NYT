import React from 'react';
import { connect } from 'react-redux';

class Results extends React.Component {

    showArticles() {
        return this.props.articles.map(article => {
            return (
                <li>{article.headline}</li>
            )
        })
    }

    render() {
        return (
            <ul>
                {this.showArticles()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    };
}

export default connect(mapStateToProps)(Results);