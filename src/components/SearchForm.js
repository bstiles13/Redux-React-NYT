import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userSearch } from '../actions/searchAction.js';

class SearchForm extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Search Parameters
                </div>
                <div className="card-block">
                    <div className="form-group">
                        <label htmlFor="search">Search Term:</label>
                        <input type="text" className="form-control" id="search" placeholder="Search in New York Times" name="term" onChange={this.props.userSearch} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="start-year">Start Year (Optional):</label>
                        <input type="text" className="form-control" id="start-year" placeholder="YYYYMMDD" name="start" onChange={this.props.userSearch} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="end-year">End Year (Optional):</label>
                        <input type="text" className="form-control" id="end-year" placeholder="YYYYMMDD" name="end" onChange={this.props.userSearch} />
                    </div>
                    <button className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
                </div>
                <hr />
                <div>Term: {this.props.search.term}</div>
                <div>Start: {this.props.search.start}</div>
                <div>End: {this.props.search.end}</div>
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
    return bindActionCreators({userSearch: userSearch}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchForm);