import React,{Component} from 'react';
// import logo from './logo.svg';
// import { Navbar,NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Menu from './MenuComponent';
import DISHES from '../shared/dishes';
import DishdetailComponent from './DishdetailComponent';


class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish:null
    };
  }
  onDishSelect(dishId){
    this.setState({selectedDish:dishId});
  }
  render(){
    //filterfunction supplies it as an array with only one element
    return(
      <div>
        <Header/>
      <Menu dishes={this.state.dishes}
      onClick={(dishId) => this.onDishSelect(dishId)} />
      <div className="container">
      <DishdetailComponent dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/>
      </div>
      <Footer/>
    </div>
      );
  }
}

export default Main;


















