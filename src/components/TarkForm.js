import React, { Component } from 'react';

class TarkForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            status: false
        }

        this.onCloseForm = this.onCloseForm.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClearForm = this.onClearForm.bind(this);
    }


    onCloseForm() {
        this.props.onCloseTarkForm();
    }

    onChange(event) {
        const targets = event.target;
        var name = targets.name;
        var value = targets.value;       
        if (name === "status") {
            value = targets.value=== "true" ? true : false
        }
        this.setState({
            [name]: value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        const tark = this.state;
        if (this.state.name === '') {
            alert("Tên không được để trống");
        } else {            
            this.onCloseForm();
            this.props.onSubmit(tark);
        }
       
    }

    onClearForm() {
        this.setState({
            name: '',
            status: false
        })
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
                    <form className="tarkform-body" onSubmit={this.onSubmit}>
                        <label className="tarkform-label">Tên: </label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                        ></input>
                        <br />
                        <label className="tarkform-label">Trạng thái: </label>
                        <br />
                        <select
                            className="form-control"
                            name="status"
                            onChange={this.onChange}
                            value={this.state.status}
                        >
                            <option value={true}>Kích hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <button
                            className="btn btn-info"
                            type="submit"
                           
                        >Lưu lại</button>
                        <button
                            className="btn btn-secondary tarkform-btn-reset"
                            type="reset"
                            onClick={this.onClearForm}
                        >Hủy bỏ</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default TarkForm;
