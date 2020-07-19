import React, { Component } from 'react';

class TarkSearchControl extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            keywords: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onKeyword = this.onKeyword.bind(this);
    }

    onChange(event) {
        const targets = event.target;
        const name = targets.name;
        const value = targets.value;
        this.setState({
            [name]: value
        })
    }

    onKeyword() {
       this.props.onSearch(this.state.keywords);
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập để tìm kiếm..."
                        name="keywords"
                        onChange={this.onChange}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-primary"
                            type="button"
                            id="button-addon2"
                            onClick={this.onKeyword}
                        >
                            <i className="fas fa-search mr-1"></i>
                            Tìm Kiếm
                        </button>
                    </div>
                </div>
            </div>                        
        );
    }
}
export default TarkSearchControl;
