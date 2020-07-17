import React, { Component } from 'react';
import randomstring from 'randomstring'

import TarkForm from './components/TarkForm'
import Control from './components/Control'
import TarkList from './components/TarkList'


import './App.css';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tarks: [
               
            ]
        }
        this.onGenerageData = this.onGenerageData.bind(this);
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
    render() {  
        const { tarks } = this.state;
        return (            
            <div className="App">
                <div className="container">
                    <h1 className="heading text-center">
                        Word Management
                    </h1>
                    <div className="row app-body">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                            <TarkForm></TarkForm>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <button className="btn btn-primary ">
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
