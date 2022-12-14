import React from 'react';
import { NavLink } from "react-router-dom";
import PersonIkon from '../components/PersonIkon';
import Opgaver from '../components/Opgaver';
import Overskrift from '../components/Overskrift';
import OpgaveTitle from '../components/OpgaveTitle';
import Button from '../components/Button';
import Lists from '../components/Lists';
import AddTask from '../components/AddTask'; 
import Nav from '../components/Nav';



// kodet af Michelle

export default function Forside({todos}) {

  return (
    <section className='frontpage'>
      <section className="Top">
        <NavLink to="/Profil"><PersonIkon className="profilikon"/></NavLink>
      </section>

      <h1 className='frontpageHeader'>doit</h1>
        <section className="box">
          <div className="Container" >
            <Overskrift name="Your next task"/>

            {todos.map(todo =>(<div className="Opgave1">
            <Opgaver name={todo.category} />
            <div className="opgave_container">
              <OpgaveTitle name={todo.title} />
            <Button />
            </div>
          </div>))}  

        
        

          </div>
        </section>

      <section className="List_container">
        <Lists/>
        
      </section>

      <section className="addnew">
        <NavLink to="/NewTask"><AddTask />
        </NavLink>
      </section> 
      
      <Nav/>
    </section>
  );
}