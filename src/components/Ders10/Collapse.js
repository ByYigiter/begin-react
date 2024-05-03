// ilk constructor calısır ==state başlangız ayarlandı
//render metodo ilk defa calişti
//onclick eventi calişti
//setState state nesnesini gunceller ve trigger render (tekrar render calışır)
//render guncel jsx ekrenda gosterir


import React from "react";

class Collapse extends React.Component {
	constructor() {
		super();
		this.state = {
			showContent: true,
		};

		// this.showMore=this.showMore.bind(this);
	}

	// showMore(){
	// 	this.setState({
	// 		showContent: !this.state.showContent
	// 	})
	// }

	showMore=()=>{
		this.setState({
			showContent: !this.state.showContent
		})
	}
	render() {
		return (
			<div>
				<button className="btn btn-primary w-75" onClick={this.showMore}>
					Toggle width collapse
					</button>

				{this.state.showContent?(
					<div>
						<div className="collapse show">{this.props.children}</div>
					</div>
				):null
			}
				<div>
					<div className="collapse">{this.props.children}</div>
				</div>
			</div>
		)
	};
}

export default Collapse;
