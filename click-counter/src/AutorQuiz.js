import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';

function Hero(){
    return(
        <div className="jumbotron col-10 offset-1">
            <h1>Author Quiz</h1>
            <p>Select the book written by the author shown</p>
        </div>
    );
}function Turn(){
    return(
        <div>
            
        </div>
    );
}
function Continue(){
    return(
        <div>
            
        </div>
    );
}
function Footer(){
    return(
        <div id="footer" className="row">
            <div className="col-12">
                <p className="text-muted credit">
                    All images are from <a href="www.google.es"> Wiki Commons</a>
                </p>
            </div>
        </div>
    );
}
class AutorQuiz extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Hero />
                <Turn />
                <Continue />
                <Footer />
            </div>
        );
    }
}

export default AutorQuiz;