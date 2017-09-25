import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearch } from '../actions/updateSearchAction.js';
import { submitSearch } from '../actions/submitSearchAction.js';

class SearchForm extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header card-inverse card-primary">
                    <i className="fa fa-list-alt" />
                    Search Parameters
                </div>
                <div className="card-block">
                    <div className="form-group">
                        <label htmlFor="search">Search Term:</label>
                        <input type="text" className="form-control" id="search" placeholder="Search in New York Times" name="term" onChange={this.props.updateSearch} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="start-year">Start Year (Optional):</label>
                        <input type="text" className="form-control" id="start-year" placeholder="YYYYMMDD" name="start" onChange={this.props.updateSearch} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="end-year">End Year (Optional):</label>
                        <input type="text" className="form-control" id="end-year" placeholder="YYYYMMDD" name="end" onChange={this.props.updateSearch} />
                    </div>
                    <button className="btn btn-default" id="run-search" onClick={() => this.props.submitSearch(this.props.search)}><i className="fa fa-search"></i> Search</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        search: state.search
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ updateSearch: updateSearch, submitSearch: submitSearch }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchForm);