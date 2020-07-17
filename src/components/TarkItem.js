import React, { Component } from 'react';
import classnames from 'classnames'

class TarkItem extends Component {
    constructor(props) {
        super(props);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
    }

    onChangeStatus() {
        this.props.onUpdateStatus(this.props.tark.id);
    }

    onDeleteItem() {
        this.props.onDelete(this.props.tark.id);
    }

    render() {        
        const { tark, index } = this.props
        const className = classnames({
            'badge badge-pill badge-warning fw-5 tark-status': tark.status === false,
            'badge badge-pill badge-primary fw-5 tark-status': tark.status === true
        })
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{tark.name}</td>
                <td className="text-center">                    
                    <span
                        className={className}
                        onClick={this.onChangeStatus}
                    >{
                        tark.status ? "Kích Hoạt" : "Ẩn"
                    }</span>
                </td>
                <td className="text-center">
                    <button className="btn btn-primary mr-1 ">
                        <i className="fas fa-pen-square mr-1"></i>
                        Sữa
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={this.onDeleteItem}
                    >
                        <i className="fas fa-trash-alt mr-1"></i>
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
export default TarkItem;
