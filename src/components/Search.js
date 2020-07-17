import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập để tìm kiếm..."
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" id="button-addon2">
                            <i className="fas fa-search mr-1"></i>
                            Tìm Kiếm
                        </button>
                    </div>
                </div>
            </div>                        
        );
    }
}
export default Search;
