import React from "react";

import Kart from "../../components/Ders11/Kart";
import Collapse from "../../components/Ders11/Collapse";

const App11 = () => {
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
export default App11;


