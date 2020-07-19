import React, { Component } from 'react';

class TarkSortControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortByName: 'name',
            sortByValue: 1
        }
        // Để sortByValue là 1 hoặc -1 là để sort nó return lại chính giá trình này
        this.onSort = this.onSort.bind(this);
    }   

    onSort(name, value) {
        this.setState({
            sortByName: name,
            sortByValue:value
        },function() {
           this.props.onSort(this.state)
        })
    }

    render() {
        const { sortByName, sortByValue } = this.state;
        return (
            <div className="dropdown">
                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    Sắp Xếp
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <ul className="dropdown-list">
                        <li className={sortByName === 'name' && sortByValue === 1 ? 'sort-active':''}>
                            <button
                                onClick={() => this.onSort('name', 1)}
                            >
                                <i className="fas fa-sort-alpha-up-alt sort-i"></i>
                                Tên A-Z
                            </button>
                        </li>
                        <li className={sortByName === 'name' && sortByValue === -1 ? 'sort-active' : ''}>

                            <button
                                onClick={() => this.onSort('name', -1)}
                            >
                                <i className="fas fa-sort-alpha-down-alt sort-i"></i>
                                Tên Z-A
                            </button>
                        </li>
                        <li className={sortByName === 'status' && sortByValue === 1 ? 'sort-active' : ''}>

                            <button
                                onClick={() => this.onSort('status', 1)}
                            >
                            Trạng Thái Kích Hoạt</button>
                        </li>
                        <li className={sortByName === 'status' && sortByValue === -1 ? 'sort-active' : ''}>

                            <button
                                onClick={() => this.onSort('status', -1)}

                            >
                            Ẩn</button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default TarkSortControl;
