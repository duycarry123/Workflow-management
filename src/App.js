import React, { Component } from 'react';
import randomstring from 'randomstring'
import classnames from "classnames"

import TarkForm from './components/TarkForm'
import Control from './components/Control'
import TarkList from './components/TarkList'


import './App.css';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tarks: [],
            isDisplayForm: false,
            tarkEditing: null,
            filter: {
                name: '',
                status: -1
            },
            keyword:''
        }
        // this.onGenerageData = this.onGenerageData.bind(this);
        this.onToggleTarkForm = this.onToggleTarkForm.bind(this);
        this.onCloseTarkForm = this.onCloseTarkForm.bind(this);
        this.onShowTarkForm = this.onShowTarkForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdateStatus = this.onUpdateStatus.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    // Load dữ liệu từ localStogare về state bằng lifecycles componentDidMount()
    componentDidMount() {
        const tarks = JSON.parse(localStorage.getItem('tarks'));
        if (localStorage && tarks) {     
            this.setState({
                tarks: tarks
            })  
        }
    }

    // Đưa dữ liệu lên localStorage
    // onGenerageData() {
    //     const tarks = [
    //         {
    //             id: randomstring.generate(),
    //             name: 'Wake Me Up',
    //             status: true
    //         },
    //         {
    //             id: randomstring.generate(),
    //             name: 'I Could Be The One',
    //             status: false
    //         },
    //         {
    //             id: randomstring.generate(),
    //             name: 'I Wanna Be Free',
    //             status: true
    //         },
    //         {
    //             id: randomstring.generate(),
    //             name: 'What Would I Change It To',
    //             status: false
    //         }
            
    //     ]
    //     localStorage.setItem('tarks', JSON.stringify(tarks));
    // }
    
    // Đóng mở Tarkform
    onToggleTarkForm() {
        if (this.state.tarkEditing) {
            this.setState({      
                isDisplayForm: true,
                tarkEditing: null
            })
        } else {
            this.setState({
                isDisplayForm: !this.state.isDisplayForm,
                tarkEditing: null
            })
        }
    }
    // Đóng Tarkform
    onCloseTarkForm() {
        this.setState({
            isDisplayForm: false
        })
    }
    // Mở Tarkform
    onShowTarkForm() {
        this.setState({
            isDisplayForm: true
        })
    }

    // Hàm nhận dữ liệu từ Tarkform
    onSubmit(data) {
        const { tarks } = this.state;    
        if (data.id === '') {      
            console.log(data)
            data.id = randomstring.generate();
            tarks.push(data);
        } else {
            const index = tarks.findIndex((tark) => {
                return tark.id === data.id;
            })
            tarks[index] = data;           
        }        
        this.setState({
            tarks: tarks
        })
        localStorage.setItem('tarks', JSON.stringify(tarks));
    }

    // Hàm nhận id tử  TarkItem -> TarkList -> App 
    onUpdateStatus(id) {
        const { tarks } = this.state;
        // const index = this.findIndex(id);
        const index = tarks.findIndex((tark) => {
            return tark.id === id;
        })
        // console.log(index)
        tarks[index].status = !tarks[index].status;
        this.setState({
            tarks: tarks
        })
        localStorage.setItem('tarks', JSON.stringify(tarks));
    }
    // findIndex = (id) => {
    //     const { tarks } = this.state;
    //     var result;
    //     tarks.forEach((tark ,index) => {
    //         if (tark.id === id) {
    //             result = index;
    //         }
    //     })
    //     return result;
    // }

    // Hàm xóa item TarkItem -> TarkList -> App
    onDelete(id) {
        const { tarks } = this.state;
        const index = tarks.findIndex((tark) => {
            return tark.id === id
        })
        // Bắt đầu từ vị trí index, xóa 1 phần tử
        // Có thể dùng filter,map,clice để mutate
        tarks.splice(index, 1);
        this.setState({
            tarks: tarks
        })
        localStorage.setItem('tarks', JSON.stringify(tarks));
    }

    // Hàm sữa item TarkItem -> TarkList -> App (id) -> TarkForm (id open TarkForm)
    onUpdate(id) {
        const { tarks } = this.state;
        const index = tarks.findIndex((tark) => {
            return tark.id === id
        })
        const tarkEditing = tarks[index];       
        this.setState({
            tarkEditing: tarkEditing,       
        })       
        this.onShowTarkForm();
    }

    // Hàm lọc dữ liệu trên table
    onFilter(filterName, filterStatus) {
        filterName = filterName.trim();
        filterStatus = parseInt(filterStatus, 10);
        this.setState({
            filter: {
                name: filterName,
                status: filterStatus
            }
        })
    }

    // Hàm search
    onSearch(keyword) {
        this.setState({
            keyword: keyword
        })
    }

    render() {  
        // State
        const { tarks, isDisplayForm, tarkEditing, filter } = this.state;
        var filterTark = tarks;
        // TarkForm
        const elmTarkForm = isDisplayForm
            ? <TarkForm
                onCloseTarkForm={this.onCloseTarkForm}
                onSubmit={this.onSubmit}
                tark={tarkEditing}
            ></TarkForm>
            : '';
        
        // Class 
        const tarkListClassname = classnames({
            'col-xs-8 col-sm-8 col-md-8 col-lg-8': isDisplayForm,
            'col-xs-12 col-sm-12 col-md-12 col-lg-12': isDisplayForm === false
        })
        const tarkFormClassname = classnames({
            'col-xs-4 col-sm-4 col-md-4 col-lg-4': isDisplayForm,
            '': isDisplayForm === false
        })

        // table filter
        // name && status -> filterTark
        if (filter) {
            // Lọc tên
            filterTark = tarks.filter((tark) => {
                return tark.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1
            })
            
            if (filter.name) {
                filterTark = tarks.filter((tark) => {
                    return tark.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
                })
            } 
            // &&
            // Và lọc theo status
            if (filter.status === -1) {  
                // Nếu status === -1 thì hiện tất cả
                filterTark = filterTark.filter((tark) => {
                    return tark;
                })           
                // Ngược lại hiện theo true false
            } else {                
                filterTark = filterTark.filter((tark) => {
                    return tark.status === (filter.status === 1 ? true : false);
                })            
            }
            // Lọc theo keyword
            
            
        }
        return (            
            <div className="App">
                <div className="container">
                    <h1 className="heading text-center">
                        Quản Lý Công Việc
                    </h1>
                    <div className="row app-body">
                        <div className={tarkFormClassname}>
                            {elmTarkForm}
                        </div>
                        <div className={tarkListClassname}>
                            <button
                                className="btn btn-primary"
                                onClick={this.onToggleTarkForm}
                            >
                                <i className="fas fa-plus mr-1"></i>
                                Thêm Công Việc
                            </button>
                            <button
                                className="btn btn-primary ml-3"
                                // onClick = {this.onGenerageData}
                            >
                                <i className="fas fa-database mr-1"></i>
                                Generage Data                                
                            </button>
                            {/* Search and Sort */}                  
                            <Control
                                onSearch={this.onSearch}
                            ></Control>
                            {/* Tark List */}
                            <TarkList
                                tarks={filterTark}
                                onUpdateStatus={this.onUpdateStatus}
                                onDelete={this.onDelete}
                                onUpdate={this.onUpdate}
                                onFilter={this.onFilter}
                            ></TarkList>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
