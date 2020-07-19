import React, { Component } from 'react';
import TarkItem from './TarkItem'

class TarkList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1 // All: -1 , Actide: 1, Deactive: 0
        }
        this.onChange = this.onChange.bind(this);
    }
   
    onChange(event) {
        const targets = event.target;
        const name = targets.name;
        const value = targets.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        )
        this.setState({
            [name]: value
        })
    }

    render() {
        var elmTarks = [];
        if (this.props.tarks) {     
            elmTarks = this.props.tarks.map((tark, index) => {
                return <TarkItem
                    key={tark.id}
                    index={index}
                    tark={tark}
                    onUpdateStatus={this.props.onUpdateStatus}
                    onDelete={this.props.onDelete}
                    onUpdate={this.props.onUpdate}
                ></TarkItem>
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
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Lọc tên..."
                                name="filterName"
                                onChange={this.onChange}
                                value={this.state.filterName}

                            >
                            </input>
                        </td>
                        <td>
                            <select
                                className="form-control"
                                name="filterStatus"
                                onChange={this.onChange}
                                value={this.state.filterStatus}
                            >
                                <option value="-1">
                                    Tất Cả
                                </option>
                                <option value="1">
                                    Kích Hoạt
                                </option>
                                <option value="0">
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
