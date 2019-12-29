import React, { Component } from 'react'
import axios from 'axios'
import './Details.css'

class Details extends Component{
    state = {
        first_name: null,
        last_name: null,
        profession: null,
        description: null,
        isLoaded:false

    }
    componentDidMount(){
        let id = this.props.match.params.oompa_id
        axios.get('https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/'+id)
        .then(res=>{
            
        
            this.setState({
                image: res.data.image,
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                profession: res.data.profession,
                description: res.data.description,
                isLoaded:true
            });
        });
        
    };
    componentDidUpdate(){
        document.getElementById('oompaDescription').innerHTML = this.state.description
    }
    render(){

        const {isLoaded} = this.state
        if(!isLoaded){
            return(
                <div className="loader center">
                <i className="fas fa-spinner fa-spin"></i>
                <p>Loading ...</p>
            </div>
            )
        }else{
        return(
            <div className='container'>
                <div className = "img">
                    <img src={this.state.image} alt = {this.state.first_name} />
                </div>
                <div className = 'Details'>
                    <div className='name'>{this.state.first_name} { this.state.last_name}</div>
                    <div className='gender'>{this.state.gender === 'F'? 'Female' : 'Male'}</div>
                    <div className = 'profession'>{this.state.profession}</div>
                    <div id= 'oompaDescription' className = 'description'></div>
                </div>
            </div>
        ) 
    }
    
}
}

export default Details