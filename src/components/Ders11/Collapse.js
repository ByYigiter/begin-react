import React from "react";

class Collapse extends React.Component {

	//   state = {ali :true} // construction olmadan yazımı bu şekilde olabilir
	constructor() {
		super();
		this.state = {
			ali: true,
		};
	}

	componentDidMount (){

		console.log("Component Create")
	}
	componentDidUpdate(){
		console.log("Component Update")
	}

	showMore = () => {
		this.setState({
			ali: !this.state.ali,
		});
	};

	render() { 
		return (
			<div>
				<button className="btn btn-primary w-75" onClick={this.showMore}>
			
				{/* {this.props.children.props.cardTitle} */}
				{React.Children.map(this.props.children, children=>children.props.cardTitle)}

				</button>
				{this.state.ali ? (
					<div>
						<div className="collapse show">{this.props.children}</div>
					</div>
				) : null}
				<div>
					<div className="collapse">{this.props.children}</div>
				</div>
			</div>
		);
	}
}

export default Collapse;
