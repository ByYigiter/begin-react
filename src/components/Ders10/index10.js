import React from "react";

import Kart from "../../components/Ders10/Kart";
import Collapse from "../../components/Ders10/Collapse";

// fonksiyon olarak component
// function App() {
// 	return <h1>Benim Adım recep yigiter</h1>;
// }

// const names = ["Recep", "Yigit", "Er"];
// function App2() {
//     const buttonValue ="mybutton "
//     const str1 ="click"

// 	// mutlaka return içinde jsx yapısında mutlaka parent elemet olmalı
// 	return (
// 		<div>
// 			{names.map((name) => (
// 				<h1 key={name}>{name}</h1>
// 			))}

// 			<button
// 				className="btnClass"
// 				type="button"
// 				style={{ color: "red", backgroundColor: "blue", fontSize: "50px" }}
// 			>
// 				{buttonValue.concat(str1)}
// 			</button>

// 		</div>
// 	);
// }

//Class olarak component
// class App2 extends React.Component{
//   render(){
//     return <h1>Benim Adım recep yigiter</h1>;
//   }
// }

const App3 = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="card-group">
					<div className="col">
						<Collapse href="example1">
							<Kart
							
								cardText="Text 1"
								updateTime="Last Update 1"
								image="https://picsum.photos/seed/picsum/200/300"
							/>
						</Collapse>
					</div>
					<div className="col">
						<Collapse href="example2">
							<Kart
								cardTitle="Team 2"
								cardText="Text 2"
								updateTime="Last Update 2"
								image="https://picsum.photos/seed/picsum/200/300"
							/>
						</Collapse>
					</div>
					<div className="col">
						<Collapse href="example3">
							<Kart
								cardTitle="Team 3"
								cardText="Text 3"
								updateTime="Last Update 3"
								image="https://picsum.photos/seed/picsum/200/300"
							/>
						</Collapse>
					</div>
				</div>
			</div>
			<div className="card-group"></div>
		</div>
	);
};
export default App3;


