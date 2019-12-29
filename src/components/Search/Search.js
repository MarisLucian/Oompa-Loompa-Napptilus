import React from 'react'
import './Search.css'

function Search(props) {
    return (
    <div className="Search">
        <form>
            <div className="input-group" id="custom-search-input">
                <input onChange={props.handleInput} type="text" 
                className="form-control" placeholder="Search"/>
                <div className="input-group-btn">
                    <button className="btn btn-default" type="button">
                        <img alt="searchbtn" src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png"/>
                    </button>
                </div>
            </div>
        </form>
    </div>
    );
}

export default Search;
