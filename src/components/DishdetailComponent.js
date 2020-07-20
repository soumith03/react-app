import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';

	// 	componentDidMount(){
	// 	console.log("DishdetailComponent componentDidMount is invoked");
	// }
	// componentDidUpdate(){
	// 	console.log("DishdetailComponent componentDidUpdate is invoked");
	// }

	 function RenderDish({dish}){
		if(dish!=null){
			return(
				 <div className="col-12 col-md-5 m-1">
				<Card>
					<CardImg width="100%" src={dish.image} alt={dish.name}/>
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>	
				</Card>
				 </div>
				);
		}
		else{
			return(
				<div></div>
				
				);
		}
	}
	function RenderComments({dish}){
		if(dish!=null){
			return(
				 <div className="col-12 col-md-5 m-1">
						<h4>Comments</h4>
						<ul className="list-unstyled">
						<li>{dish.comments[0].comment}</li>
						<li>--{dish.comments[0].author},{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format( new Date(Date.parse(dish.comments[0].date)))}</li>
						<li>{dish.comments[1].comment}</li>
						<li>--{dish.comments[1].author},{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format( new Date(Date.parse(dish.comments[1].date)))}</li>
						<li>{dish.comments[2].comment}</li>
						<li>--{dish.comments[2].author},{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format( new Date(Date.parse(dish.comments[2].date)))}</li>
						<li>{dish.comments[3].comment}</li>
						<li>--{dish.comments[3].author},{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format( new Date(Date.parse(dish.comments[3].date)))}</li>
						<li>{dish.comments[4].comment}</li>
						<li>--{dish.comments[4].author},{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format( new Date(Date.parse(dish.comments[4].date)))}</li>
						</ul>
				 </div>
				);
		}
		else{
			return(
				<div></div>
				
				);
		}
	}
	
	const DishdetailComponent=(props)=>{
		// console.log("DishdetailComponent render is invoked");
		return(
			<div className="row">
				<RenderDish dish={props.dish}/>
				<RenderComments dish={props.dish}/>
			</div>
			);
	}

export default DishdetailComponent;