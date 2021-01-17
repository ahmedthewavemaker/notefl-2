import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import moment from 'moment';
import AppContext from './AppContext';




// export class MainPage extends React.Component {
//     static defaultProps = {
//         onDeleteNote: () => { },
//     }

//     static contextType = AppContext;
   

//     render(
//         let notes = props.notes
//         if(props.match.params.folderId) {
//             notes = notes.filter(note => note.folderId === props.match.params.folderId)
//         }
//         console.log(props);
//     return(
        
//     {(this.context) => (
//         <div className='Mainpage'>
//             {notes.map(note => <div><li key={note.id} className='note'>

//                 <h2><Link to={'/note/' + note.id} >{note.name}</Link></h2>

//                 <h3>Date modified: {moment(note.modified).format('MM YYYY')}</h3>

//                 <button className='noteButton' onClick={}>Remove Note</button>

//             </li> </div>)}
//         </div>
//     )}
    
//     )
//     )
//             }


export default class MainPage extends React.Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
    static contextType = AppContext;

    handleDeleteNote = (noteId) => {
        this.props.history.push(`/`)
      }
    
    render(){
        const { notes=[] } = this.context;
        const { noteId } = this.props.match.params
    console.log(noteId, 'noteId')

    if(noteId.match.params.folderId){
        notes=notes.filter(note => note.folderId === noteId.match.params.folderId)
    }
    console.log(noteId);
    return (
       <div className='Mainpage'>
          {notes.map(note => <div><li key={note.id} className='note'>
                <h2><Link to={'/note/'+note.id} >{note.name}</Link></h2>
                <h3>Date modified: {moment(note.modified).format('MM YYYY')}</h3>
                <button className='noteButton' onClick={this.handleDeleteNote()}>Remove Note</button>
           </li> </div>)}
       </div>
    )}



}
