import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import MainPage from './MainPage';
import store from './Store';
import GoBack from './GoBack';
import NoteDetail from './NoteDetail';
import './App.css';
import AppContext from './AppContext';



class App extends Component {
  state = {
    
    notes: store.notes,
    folders: store.folders,

  }
componentDidMount(){
  Promise.all([
  fetch(`http://localhost:9090/folders`),
  fetch(`http://localhost:9090/notes`)
  ])
  

    .then(([folderRes, notesRes ]) => {
      if(!folderRes.ok) 
        return folderRes.json().then(e => Promise.reject(e));

        if(!notesRes.ok) 
          return notesRes.json().then(e => Promise.reject(e));

        return Promise.all([folderRes.json(), notesRes.json()]);
      })

    .then(([folders, notes]) => {
      this.setState({folders, notes});
       
      })
      .catch(error=> {
        console.error(error);
      })
    
    }

    handleDeleteNote = noteId =>{
        this.setState({
          notes: this.state.notes.filter(note => note.id !== noteId)
        })
    }

  render() {
    const contextValue= {
      notes: this.state.notes,
      folders: this.state.folders,
      //deleteNote= this.handleDeleteNote

    }


    return (
      <AppContext.Provider  value = {contextValue}>
       
      <div className='App'>
        <div className='App-header'>

          <header>
            <h1><Link to='/'>Noteful</Link></h1>
          </header>
        </div>

        <div className='Sidebar'>
          <Route
            exact path='/'
            component={Sidebar} />

          <Route
            path='/folder/:folderId'
            render={() =>
              <Sidebar 
              folders={this.state.folders} />
            } />
          <Route
            path='/note/:noteId'
            render={(routerProps) =>
              <GoBack 
              {...routerProps}
              
              folders={this.state.folders}/>
            } />
        </div>

        <div className='MainPage'>
          <main>

            <Route
              exact path='/'
              render={(routerProps) =>
                <MainPage 
                {...routerProps}
                notes={this.state.notes}/>
              } />
            <Route
              path='/folder/:folderId'
              render={(routerProps) =>
                <MainPage 
                {...routerProps}
                notes={this.state.notes}/>
              } />

            <Route
              path='/note/:noteId'
              render={(routerProps) =>
                <NoteDetail 
                {...routerProps}
                notes={this.state.notes}/>
              } />

          </main>
        </div>
      </div>
      </AppContext.Provider>

    )
  }

}
export default App;
