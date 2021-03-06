import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import Notice from './components/Notice';

class FormWrap extends React.Component {

  render() {
    return (
	    <div className="container">
	    	<div className="row">
	            <Form />
	            <Notice />
	        </div>
        </div>
    )
  }
}

ReactDOM.render(
    <FormWrap />,
    document.getElementById('form')
  );


// //stateless
// const MyComponent = () =>(
// <h1>hello~~ world!</h1>
// )

// ReactDOM.render(<MyComponent />,document.getElementById('justSayHello'));

// https://github.com/kdchang/reactjs101/blob/master/Ch03/react-jsx-introduction.md
// Button(check Vality) && input 感覺可以再精簡？
// 

