import React from 'react';
import { connect } from 'react-redux';

class Articles extends React.Component {

    showArticles() {
        if (this.props.articles == null) {
            return (
                <a href="#" className="list-group-item list-group-item-action disabled">No results to display</a>
            )
        } else {
            return this.props.articles.map(article => {
                return (
                    <a href={article.web_url} target="_blank" className="list-group-item list-group-item-action" key={article._id}>{article.headline.main}</a>
                )
            })
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Search Results
                </div>
                <div className="card-block">
                    <div className="list-group">
                        {this.showArticles()}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    };
}

export default connect(mapStateToProps)(Articles);