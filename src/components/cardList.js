import React from 'react';
import Card from './card';



const CardList = ({robots})=>{

    const cards = robots.map((robot,i)=>{
        return <Card key={robots[i].id} name={robots[i].name} email={robots[i].email} id={robots[i].id}/>
     });

    return cards;
}

export default CardList;