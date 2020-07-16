import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập đẻ tìm kiếm..."
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" id="button-addon2">Button</button>
                    </div>
                </div>
            </div>                        
        );
    }
}
export default Search;
