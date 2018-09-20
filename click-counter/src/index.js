import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PropTypes from 'prop-types';
import registerServiceWorker from './registerServiceWorker';

let model = { clicks: 0 };







function Clicker({ handleClick }) {
    return <div>
        <button onClick={(e) => { handleClick('A'); }}>A</button>
        <button onClick={(e) => { handleClick('B'); }}>B</button>
        <button onClick={(e) => { handleClick('C'); }}>C</button>
    </div>;
}



function DangerContainer(props){
    return <p dangerouslySetInnerHTML={{ __html: props.dangerous }} />;
}
function Sum({a,b}) {
    return <h1>{a} + {b} = {a + b}</h1>;
}
function ConditionalDisplay(props) {
    return (<div>{props.isVisible ? props.children :null}</div>);
}
ConditionalDisplay.PropTypes = {
    isVisible:PropTypes.bool.isRequired
}
Sum.PropTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
}
const state = {
    showSum: true
};
function render() {

    ReactDOM.render(
        <ConditionalDisplay isVisible={state.showSum}>
            <h1>A <span>SUM</span></h1>
            <Sum a={5} b={2} />
        </ConditionalDisplay>
       ,

        document.getElementById('root'));

    setInterval(() => {
        state.showSum = !state.showSum;
        render();
    }, 2000);

    //Print HTML
   /* ReactDOM.render(<DangerContainer dangerous="<strong>HOLA</strong>" />, document.getElementById('root'));

  */

    /*
    ReactDOM.render(<Clicker handleClick={(letter) => { console.log(`${letter} clicked`); }} />,
        document.getElementById('root')
    );

   
    ReactDOM.render(<App clicks={model.clicks} onClick={() => { model.clicks += 1; render(); }}
    />, document.getElementById('root'));*/
}

render();

registerServiceWorker();
