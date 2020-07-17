import React, { Component } from 'react';

class Sort extends Component {
    render() {
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
                        <li>
                            <button>
                                <i className="fas fa-sort-alpha-up-alt sort-i"></i>
                                Tên A-Z
                            </button>
                        </li>
                        <li>
                            <button>
                                <i className="fas fa-sort-alpha-down-alt sort-i"></i>
                                Tên Z-A
                            </button>
                        </li>
                        <li>
                            <button>Trạng Thái Kích Hoạt</button>
                        </li>
                        <li>
                            <button>Ẩn</button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Sort;
