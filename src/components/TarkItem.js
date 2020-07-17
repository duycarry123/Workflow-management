import React, { Component } from 'react';
import classnames from 'classnames'

class TarkItem extends Component {
    render() {
        const { tark, index } = this.props
        const className = classnames({
            'badge badge-pill badge-warning fw-5': tark.status === false,
            'badge badge-pill badge-primary fw-5': tark.status === true
        })
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{tark.name}</td>
                <td className="text-center">                    
                    <span className={className}>{
                        tark.status ? "Kích Hoạt" : "Ẩn"
                    }</span>
                </td>
                <td className="text-center">
                    <button className="btn btn-primary mr-1 ">
                        <i className="fas fa-pen-square mr-1"></i>
                        Sữa
                    </button>
                    <button className="btn btn-secondary">
                        <i className="fas fa-trash-alt mr-1"></i>
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
export default TarkItem;
