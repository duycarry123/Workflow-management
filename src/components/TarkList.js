import React, { Component } from 'react';
import TarkItem from './TarkItem'

class TarkList extends Component {

    render() {
        var elmTarks = [];
        if (this.props.tarks) {     
            elmTarks = this.props.tarks.map((tark, index) => {
                return <TarkItem key={tark.id} index={index} tark={tark}></TarkItem>
            })
        }
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
                    {elmTarks}
                </tbody>
            </table>                        
        );
    }
}
export default TarkList;
