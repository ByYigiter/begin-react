import React from "react";


const Kart = (props) => {

	console.log(props);
	return (
		<div className="card">
			<img src={props.image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.cardTitle}</h5>
				<p className="card-text">
				{props.cardText}
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

	Kart.defaultProps={
		cardTitle :"Default Title"
	}

	

export default Kart;
