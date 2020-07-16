import React, { Component } from 'react';
import TarkItem from './TarkItem'

class TarkList extends Component {
    render() {
        return (            
            <table className="table table-bordered">
                <thead>
                    <tr className="text-center">
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Trạng Thái</th>
                        <th>Chỉnh Sữa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td ></td>
                        <td>
                            <input type="text" className="form-control"></input>
                        </td>
                        <td>
                            <select className="form-control">
                                <option>
                                    Tất Cả
                                </option>
                                <option>
                                    Kích Hoạt
                                </option>
                                <option>
                                    Ẩn
                                </option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    <TarkItem></TarkItem>
                    <TarkItem></TarkItem>
                    <TarkItem></TarkItem>
                </tbody>
            </table>                        
        );
    }
}
export default TarkList;
