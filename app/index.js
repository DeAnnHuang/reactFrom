import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>
    		<h1>hello, world</h1>
    	</div>
    );
  }
}
//stateless
ReactDOM.render(<App />,document.getElementById('app'));

const MyComponent = () =>(
			<h1>hello~~ world!</h1>
)

ReactDOM.render(<MyComponent />,document.getElementById('justSayHello'));

// https://github.com/kdchang/reactjs101/blob/master/Ch03/react-jsx-introduction.md