import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App';
import AutorQuiz  from './AutorQuiz';
import Identity  from './Identity';
import PropTypes from 'prop-types';
import registerServiceWorker from './registerServiceWorker';
import Form from "react-jsonschema-form";

let model = { clicks: 0 };

function Clicker({ handleClick }) {
    return <div>
        <button onClick={(e) => { handleClick('A'); }}>A</button>
        <button onClick={(e) => { handleClick('B'); }}>B</button>
        <button onClick={(e) => { handleClick('C'); }}>C</button>
    </div>;
}

function Frm() {
    return <div>
      <input type="text" value="react"/><br/>
      <textarea value="react"/><br/>
      <select value="sunday">
        <option value="saturday">Saturday</option>
        <option value="sunday">Sunday</option>
      </select></div>;
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

      
const schema = {
  "title": "Identity",
  "type": "object",
  "required": [
    "firstName",
    "lastName"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First name",
      "minLength": 1,
      "maxLength": 6
    },
    "lastName": {
      "type": "string",
      "title": "Last name"
    },
    "age": {
      "type": "number",
      "title": "Age"
    }
  }
};

function render() {

    ReactDOM.render((
        <Form schema={schema} noHtml5Validate onSubmit={console.log} showErrorList={false} />
      ), document.getElementById("root"));

//    ReactDOM.render(<Identity />,document.getElementById('root'));

    /*ReactDOM.render(
        <ConditionalDisplay isVisible={state.showSum}>
            <h1>A <span>SUM</span></h1>
            <Sum a={5} b={2} />
        </ConditionalDisplay>
       ,

        document.getElementById('root'));*/
    /*
    setInterval(() => {
        state.showSum = !state.showSum;
        render();
    }, 2000);*/

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
