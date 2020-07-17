import React, { Component } from 'react';

class TarkForm extends Component {

    constructor(props) {
        super(props);

        this.onCloseForm = this.onCloseForm.bind(this);
    }

    onCloseForm() {
        this.props.onCloseTarkForm();
    }

    render() {
        return (
            <div className="App">
                <div className="tarkform">
                    <h3 className="tarkform-heading">
                        Thêm Công việc
                        <i
                            className="fas fa-times-circle heading-i"
                            onClick={this.onCloseForm}
                        >
                        </i>
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
