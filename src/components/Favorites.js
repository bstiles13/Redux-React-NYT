import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFavorites } from '../actions/getFavoritesAction.js';
import { setFavorite } from '../actions/setFavoriteAction.js';

class Favorites extends React.Component {

    componentDidMount() {
        this.props.getFavorites();
    }

    showFavorites() {
        if (this.props.favorites == null) {
            return (
                <a href="#" className="list-group-item list-group-item-action disabled">No results to display</a>
            )
        } else {
            return this.props.favorites.map(favorite => {
                return (
                    <div className="list-group-item list-group-item-action flex-column align-items-start" key={favorite._id}>
                        <div className="d-flex w-100 justify-content-between">
                            <a href={favorite.web_url} target="_blank" ><h5 className="mb-1">{favorite.headline.main}</h5></a>
                            <small>{favorite.pub_date ? favorite.pub_date.substr(0, 10) : ""}</small>
                        </div>
                        <p className="mb-1">{favorite.snippet}</p>
                        <i
                            className={favorite.favorited ? "fa fa-star" : "fa fa-star-o"}
                            aria-hidden="true"
                            onClick={() => this.props.setFavorite({
                                id: favorite._id,
                                favorited: favorite.favorited
                            })}
                        />
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <h3>Hello World!</h3>
                <div className="list-group">
                    {this.showFavorites()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        favorites: state.favorites
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ getFavorites: getFavorites, setFavorite: setFavorite }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Favorites);