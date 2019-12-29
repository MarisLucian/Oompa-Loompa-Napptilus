import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Main.css'
import uuid from 'uuid/v4'
import Search from '../Search/Search'


class Main extends Component{

    state = {
        data : [],
        search : '',
        pageNumber:0,
        URL: 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=',
        isLoaded: false
    }
    componentDidMount(){
        this.loadOompasData();
        document.addEventListener('scroll', this.reachBottom.bind(this));
    }
    loadOompasData(){

        axios.get( this.state.URL + this.state.pageNumber)
        .then(res => {
            let oompasToLoad = this.state.data;
            res.data.results.map(
                el => 
                oompasToLoad.push(el)
                
            )

            this.setState({
                isLoaded: true,
                data : oompasToLoad
                
            })
        })
    
    }
    reachBottom(){
        const oompaContainer = document.getElementById('MainContainer');    

        if(oompaContainer && oompaContainer.getBoundingClientRect().bottom <= window.innerHeight)    
        {
            const newPage = this.state.pageNumber + 1;
            this.setState({pageNumber: newPage});         
            this.loadOompasData();                    
        }
    }
    handleInput=(e)=>{ 
        
        this.setState({search:e.target.value})
    }
    render(){
        const {data} = this.state
        const {isLoaded} = this.state
        
        let filteredOompas = data.filter((oompa)=>{
            return  oompa.first_name.toLowerCase().includes(this.state.search.toLowerCase()) ||
                    oompa.last_name.toLowerCase().includes(this.state.search.toLowerCase()) 
        })
        if(!isLoaded){
            return(
                <div className="loader center">
                <i className="fas fa-spinner fa-spin"></i>
                <p>Loading ...</p>
            </div>
            )
        }else{
        return(
            <div className = 'Main' id='MainContainer'>
                <Search handleInput = {this.handleInput}/>
                <div className = 'Title'>
                    <div className = 'firstTitle'>Find your Oompa Loompa</div>
                    <div className = 'subtitle'>There are more than 100k</div>
                </div>
                <div className='Oompas' >
                        {filteredOompas.map((p) => 
                            <div className = 'Card' key = {uuid()}>
                                <Link to={'/'+ p.id}>
                                <img src={p.image} alt =  {p.first_name}/>
                                <div className= 'details'>
                                    <div className='name'>{p.first_name } { p.last_name}</div>
                                    <div className='gender'>{p.gender === 'F'? 'Female' : 'Male'}</div>
                                    <div className='profession'>{p.profession}</div>
                                </div>
                                </Link>
                            </div>
                        )}
                </div>
            </div>
        )
    }
    }
}

export default Main;
