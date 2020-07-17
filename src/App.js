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
            isDisplayForm: true
        }
        this.onGenerageData = this.onGenerageData.bind(this);
        this.onToggleTarkForm = this.onToggleTarkForm.bind(this);
        this.onCloseTarkForm = this.onCloseTarkForm.bind(this);
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
    onGenerageData() {
        const tarks = [
            {
                id: randomstring.generate(),
                name: 'Wake Me Up',
                status: true
            },
            {
                id: randomstring.generate(),
                name: 'I Could Be The One',
                status: false
            },
            {
                id: randomstring.generate(),
                name: 'I Wanna Be Free',
                status: true
            },
            {
                id: randomstring.generate(),
                name: 'What Would I Change It To',
                status: false
            }
            
        ]
        localStorage.setItem('tarks', JSON.stringify(tarks));
    }
    
    onToggleTarkForm() {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        })
    }

    onCloseTarkForm() {
        this.setState({
            isDisplayForm: false
        })
    }

    render() {  
        const { tarks, isDisplayForm } = this.state;

        const elmTarkForm = isDisplayForm ? <TarkForm onCloseTarkForm={this.onCloseTarkForm}></TarkForm> : '';
        const tarkListClassname = classnames({
            'col-xs-8 col-sm-8 col-md-8 col-lg-8': isDisplayForm,
            'col-xs-12 col-sm-12 col-md-12 col-lg-12': isDisplayForm === false
        })
        const tarkFormClassname = classnames({
            'col-xs-4 col-sm-4 col-md-4 col-lg-4': isDisplayForm,
            '': isDisplayForm === false
        })
        return (            
            <div className="App">
                <div className="container">
                    <h1 className="heading text-center">
                        Word Management
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
                                onClick = {this.onGenerageData}
                            >
                                <i className="fas fa-database mr-1"></i>
                                Generage Data                                
                            </button>
                            {/* Search and Sort */}                  
                            <Control></Control>
                            {/* Tark List */}
                            <TarkList tarks={tarks}></TarkList>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
