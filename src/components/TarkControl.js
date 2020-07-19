import React, { Component } from 'react';
import TarkSearchControl from './TarkSearchControl'
import TarkSortControl from './TarkSortControl'

class TarkControl extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className="search-sort row no-gutters">                 
                <TarkSearchControl
                    onSearch={this.props.onSearch}
                
                ></TarkSearchControl>
                <div className="sort col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <TarkSortControl
                        onSort={this.props.onSort}
                    ></TarkSortControl>
                </div>
            </div>
        );
    }
}
export default TarkControl;
