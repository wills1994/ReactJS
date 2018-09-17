//Bootstrap, Font Awesome and some CSS
// Rendering random stars
// New Components like Button,Answer,etc

//Contenedor de Estrella
//props - pasamos los datos necessarios

const Stars = (props) => {
//const numberOfStars = 1 + Math.floor(Math.random()*9);
//let stars = [];
// for (let i=0;i<numberOfStars;i++){
// 	stars.push(<i key={i} className="fa fa-star"></i>);
// }

	return (
  	<div className="col-5">
      {_.range(props.numberOfStars).map(i =>
      	<i key={i} className="fa fa-star"></i>
      )}
    </div>
  );
}
const Button = (props) => {
	let button;
  switch(props.answerIsCorrect){
  	case true:
    	button=
    	<button className="btn btn-success" onClick={props.acceptAnswer}>
    	  <i className="fa fa-check"></i>
    	</button>;
    break;
    case false:
    		button=
    	<button className="btn btn-danger" onClick={props.acceptAnswer}>
    	  <i className="fa fa-times"></i>
    	</button>;
    break;
    default:
    	button = <button className="btn" 
      onClick={props.checkAnswer}
      disabled=			{props.selectedNumbers.length === 0}>=</button>;
    break;
  }
	return (
  	<div className="col-2">
    	{button}
    </div>
  );
}
const Answer = (props) => {
	return (
  	<div className="col-5">
     	{props.selectedNumbers.map((number,i) =>
      	 <span key={i} onClick={() => props.unSelectNumber(number)}>{number}</span>
      )}
    </div>
  );
}
const Numbers = (props) => {
	const numbersClassName = (number) =>{
  if(props.usedNumbers.indexOf(number) >=0){
    	return 'used';
    }
  	if(props.selectedNumbers.indexOf(number) >=0){
    	return 'selected';
    }
  }
	return(
  	<div className="card text-center">
    	<div>
      	{Numbers.list.map((number,i) =>
      	  <span key={i} className={numbersClassName(number)}
          onClick={() =>props.selectNumber(number)}>
          {number}
          </span>
        )}
      </div>
    </div>
  );
}
Numbers.list = _.range(1,10);

class Game extends React.Component{
	state = {
  	selectedNumbers:[],
    randomNumberOfStars:1 + Math.floor(Math.random()*9),
    answerIsCorrect:null,
    usedNumbers: []
  };
  selectNumber = (clickedNumber) => {
  	if(this.state.selectedNumbers.indexOf(clickedNumber)>=0){ return;}
  	this.setState(prevState => ({
       answerIsCorrect:null,
    	selectedNumbers:prevState.selectedNumbers.concat(clickedNumber)
    }));
    
  };
 unSelectNumber = (clickedNumber) => {
 	this.setState(prevState => ({
     answerIsCorrect:null,
    	selectedNumbers:prevState.selectedNumbers.filter(
      	number => number !== clickedNumber)
    }));
 };
 checkAnswer = () => {
 	this.setState(prevState => ({
  	answerIsCorrect:prevState.randomNumberOfStars ===
    	prevState.selectedNumbers.reduce((acc,n) => acc + n,0)
  }));
 };
 acceptAnswer = () => {
 	 	this.setState(prevState => ({
  		usedNumbers:prevState.usedNumbers.concat(prevState.selectedNumbers),
    	selectedNumbers:[],
      answerIsCorrect:null,
      randomNumberOfStars:1 + Math.floor(Math.random()*9)
  }));
 };
	render(){
   const {selectedNumbers,randomNumberOfStars,answerIsCorrect,usedNumbers} = this.state;
  	return (
  		<div className="container">
      	<h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars} />
          <Button answerIsCorrect={answerIsCorrect} checkAnswer={this.checkAnswer} selectedNumbers={selectedNumbers} acceptAnswer={this.acceptAnswer} />
        	<Answer selectedNumbers={selectedNumbers}
          			unSelectNumber={this.unSelectNumber}/>
        </div>
         <br />
         <Numbers selectedNumbers={selectedNumbers}
         	selectNumber={this.selectNumber} usedNumbers={usedNumbers}
         />
      </div>
    );
  }
}

// La clase principal que contiene el contenedor de Game
class App extends React.Component{
	render(){
  	return (
  		<div>
      	<Game />
      </div>
    );
  }
}
//Renderice un elemento React en el DOM 
ReactDOM.render(<App />,mountNode);

//CSS

.mountNode {
  color: #333;
}
.fa-star{
  margin:0.5em;
  font-size:24px;
}
span{
  display:inline-block;
  margin:0.5em;
  text-align:center;
  background-color:#ccc;
  width:24px;
  border-radius:50%;
  cursor:pointer;
}
.selected{
  background-color:#eee;
  color:#ddd;
  cursor:not-allowed;
}
.used{
  background-color:#aaddaa;
  color:#99bb99;
  cursor:not-allowed;
}


