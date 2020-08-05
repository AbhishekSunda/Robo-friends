import React from 'react';
import Card from './Card';
const CardList =(props)=>{
const contacts = props.robots.map((user) => {
	return <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
})
return(
	<div>
	
	{contacts}
	</div>
	);
}

export default CardList;