import React, { Component } from 'react';

class TarkForm extends Component {
    render() {
        return (
            <div className="App">
                <div className="tarkform">
                    <h3 className="tarkform-heading">
                        Thêm Công việc
                        <i class="fas fa-times-circle heading-i"></i>
                    </h3>
                    <form className="tarkform-body">
                        <label className="tarkform-label">Tên: </label>
                        <br />
                        <input type="text" className="form-control"></input>
                        <br />
                        <label className="tarkform-label">Trạng thái: </label>
                        <br />
                        <select className="form-control">
                            <option>Kích hoạt</option>
                            <option>Ẩn</option>
                        </select>
                        <br />
                        <button className="btn btn-info">Lưu lại</button>
                        <button className="btn btn-secondary tarkform-btn-reset" type="reset">Hủy bỏ</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default TarkForm;
