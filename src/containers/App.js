import React,{Component} from 'react';
import 'tachyons';
import CardList from '../components/cardList';
import SearchField from '../components/searchfield';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component{
    constructor(){
        super();
        this.state = {
            'robots': [],
            'searchfield': ''
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
        .then(users=>this.setState({robots : users}));
    }

    onSearchChange = (e)=>{
        this.setState({searchfield : e.target.value});
    }

    render(){
        const {robots, searchfield} = this.state;

        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        
        
            return !robots.length ? <h1 className="tc">loading</h1> :
             (
                <div>
                    <h1 className="tc f1 ttu">robo friends</h1>
                    <SearchField searchChange={this.onSearchChange} />

                    <Scroll>
                        <div className="card-container">
                            <CardList robots={filteredRobots}/>
                        </div>
                    </Scroll>   
                </div>
            );
    }
};
export default App;
