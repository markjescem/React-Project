import React from 'react';
import unsplash from '../api/unsplash'; 
import SearchBar from './SearchBar';
import Imagelist from './ImageList'; 

class App extends React.Component{ 
    state = { pics : []}; 
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('https://api.unsplash.com/search/photos',{
            params: {query: term},
        });
        this.setState({pics : response.data.results});
    }
    render(){
        return(
        <div className='ui container' style={{marginTop  :'10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <Imagelist images = {this.state.pics}/>
        </div>
        );
    }
}

export default App;

