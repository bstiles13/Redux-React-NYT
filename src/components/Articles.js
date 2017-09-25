import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFavorite } from '../actions/setFavoriteAction.js';

class Articles extends React.Component {

    showArticles() {
        if (this.props.articles == null) {
            return (
                <a href="#" className="list-group-item list-group-item-action disabled">No results to display</a>
            )
        } else {
            return this.props.articles.map(article => {
                return (
                    <div className="list-group-item list-group-item-action flex-column align-items-start" key={article._id}>
                        <div className="d-flex w-100 justify-content-between">
                            <a href={article.web_url} target="_blank" ><h5 className="mb-1">{article.headline.main}</h5></a>
                            <small>{article.pub_date ? article.pub_date.substr(0, 10) : ""}</small>
                        </div>
                        <p className="mb-1">{article.snippet}</p>
                        <i
                            className={article.favorited ? "fa fa-star" : "fa fa-star-o"}
                            aria-hidden="true"
                            onClick={() => this.props.setFavorite({
                                id: article._id,
                                favorited: article.favorited
                            })}
                        />
                    </div>
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

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ setFavorite: setFavorite }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Articles);