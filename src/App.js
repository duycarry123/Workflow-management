import React, { Component } from 'react';
import TarkForm from './components/TarkForm'
import Control from './components/Control'
import TarkList from './components/TarkList'


import './App.css';
class App extends Component {
    render() {        
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
                            <button className="btn btn-primary ">Thêm Công Việc</button>
                            {/* Search and Sort */}                  
                            <Control></Control>
                            {/* Tark List */}
                            <TarkList></TarkList>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
