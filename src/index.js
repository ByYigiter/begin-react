import React from 'react'
import ReactDOM from "react-dom";
import App3 from './components/Ders10/index10';
import App11 from './components/Ders11';

const Main = () => {
  return (
	<>
		{/* <App3/> */}
		<App11/>
	</>
  )
}

ReactDOM.render(<Main />, document.getElementById("root"));