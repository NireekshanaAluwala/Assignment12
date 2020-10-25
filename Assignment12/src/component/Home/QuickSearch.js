import React,{Component} from 'react';
import QuickDisplay from './QuickDisplay';

const mealUrl = "https://developerfunnelrestapi.herokuapp.com/mealtype";

class QuickSearch extends Component {
    constructor(){
        super()

        this.state={
            mealType:''
        }
    }

    render(){
        return(
            <QuickDisplay quickData={this.state.mealType}/>
        )
    }

    componentDidMount(){
        fetch(mealUrl,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch;
