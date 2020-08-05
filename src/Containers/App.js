import React, {Component}from 'react';
//import {robots} from './robots';
import {connect} from 'react-redux';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import {setSearchField} from '../action';

const mapStateToProps=state=>{
	return {
		searchfield:state.searchfield
	}
}
const mapDispatchToProps=(dispatch)=>{
return{
	onSearchChange:(event)=>dispatch(setSearchField(event.target.value))
}
}

class App extends Component{
	constructor(){
		super();
		this.state={
			robots:[],
			
		}

	}
componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users =>this.setState({
  	robots:users
  }));
	}
onSearchChange=(event)=>{
	this.setState({
		searchfield:event.target.value
	});


	
}
render()
	{
		const filteredrobots=this.state.robots.filter((robot)=>{
		return robot.name.toLowerCase().includes(
			this.props.searchfield.toLowerCase()
			)
		});
	

		return (
			<div className='tc'>
			<h1>Robo friends</h1>
			<Searchbox 
			searchChange={this.props.onSearchChange}
			/>
			<Scroll>
			<CardList robots={filteredrobots} />
			</Scroll>
			</div>
			);
		
		}
 
}
export default connect(mapStateToProps, mapDispatchToProps)(App);