import React from 'react';
import './NoteDetail.css';
import moment from 'moment';
import AppContext from './AppContext';
import {Link} from 'react-router-dom';






// export default class NoteDetail extends React.Component{

//     static defaultProps ={
//         match: {
//           params: {}
//         },
//         onDeleteNote: () => {},
//       }
//       static contextType = AppContext;

//       handleClickDelete = e => {
//         e.preventDefault()
//         const noteId = this.props.id
//         fetch(`http://localhost:9090/notes/${noteId}`, {
//           method: 'DELETE',
//           headers: {
//             'content-type': 'application/json'
//           },
//         })
//           .then(res => {
//             if (!res.ok)
//               return res.json().then(e => Promise.reject(e))
//             return res.json()
//           })
//           .then(() => {
//             this.context.deleteNote(noteId)
//             // allow parent to perform extra behaviour
//             this.props.onDeleteNote(noteId)
//           })
//           .catch(error => {
//             console.error({ error })
//           })
//       }
//       render() {
//         const { name, id, modified } = this.props
//         return (
//           <div className='Note'>
//             <h2 className='Note__title'>
//               <Link to={`/note/${id}`}>
//                 {name}
//               </Link>
//             </h2>
//             <button
//               className='Note__delete'
//               type='button'
//               onClick={this.handleClickDelete}
//             >
//              {/* <FontAwesomeIcon icon='trash-alt' /> */}
//               {' '}
//               remove
//             </button>
//             <div className='Note__dates'>
//               <div className='Note__dates-modified'>
//                 Modified
//                 {' '}
//                 <span className='Date'>
//                   {moment(modified, 'ddd, MMM Do YYYY')}
//                 </span>
//               </div>
//             </div>
//           </div>
//         )
//       }
//     }

    export default function NoteDetail(props){
    
    
    const note= props.notes.find(note => note.id == props.match.params.noteId )
    

    return (

        <div className='NoteDetail'>
            
            <h2>{note.name}</h2>
            <p>Date modified: {moment(note.modified).format('MM YYYY')}</p>
            <p>{note.content}</p>
            
        </div>


    )



}