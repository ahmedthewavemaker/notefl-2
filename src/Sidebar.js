import React from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from './AppContext';
import './Sidebar.css';




export default function Sidebar() {
   return <AppContext.Consumer>{
        value => (
            
            <div>
                <ul>

                    {value.folders.map(folder => <div className='navSidebar' key={folder.id} ><li  >
                        <NavLink to={'/folder/' + folder.id} className='highlightFolder' >{folder.name}</NavLink>


                    </li>
                    </div>

                    )}
                    <button>
                        + Add Folder
                        </button>
                </ul>
            </div>

        )}
    </AppContext.Consumer>



}