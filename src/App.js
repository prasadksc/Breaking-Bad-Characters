import React,{Component} from 'react'
import { Switch,Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { getCharacters } from './services/characterService';
import { getQuotes } from './services/quoteService';
import Home from './components/Home';
import CharacterPage from './components/CharacterPage';
import NavBar from './components/NavBar';
import "react-toastify/dist/ReactToastify.css";
import './App.css';




class App extends Component {

  state = { 
    characters : [],
    quotes :[],
    pageSize : 10,
    currentPage: 1,
    searchQuery :""
 }



 //fetch the all data of characters and quotoes in API's
 async componentDidMount(){
     const {data : characters} = await getCharacters()
     const {data : quotes} = await getQuotes()
     this.setState({characters,quotes})
    //  console.log(characters);
    //  console.log(quotes)
 }


//handle the page
 handlePageChange = (page) =>{
     this.setState({currentPage:page});
 };


//handle change event
 handleChange = e =>{
     this.setState({searchQuery : e.currentTarget.value , currentPage : 1})
 }
  
  render() { 

    const {searchQuery,characters,currentPage,pageSize,quotes} = this.state;

    return ( 
      <div className="app_container">
        <ToastContainer  autoClose={4000} 
                         position="bottom-right" 
                         toastStyle={{ backgroundColor: "#363636",bottom:"450px" }} 
        />
        <NavBar value={searchQuery} 
                onChange={this.handleChange} 
                characters={characters}
        />

        <Switch>
        <Route path="/" exact>
          <Home characters={characters}  
                searchQuery={searchQuery} 
                pageSize={pageSize} 
                currentPage={currentPage} 
                handlePageChange={this.handlePageChange}
          />
        </Route>
        <Route path="/characters/:id" render={(props) => <CharacterPage {...props} characters={characters} quotes={quotes}/>}>
        </Route>
      </Switch>
      </div>
     );
  }
}
 
export default App;
