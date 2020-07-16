import React, { Component } from 'react';

class TarkItem extends Component {
    render() {
        return (
            <tr>
                <td className="text-center">1</td>
                <td>I Could Be The One</td>
                <td className="text-center">
                    <span class="badge badge-pill badge-primary fw-5">Kích Hoạt</span>
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
