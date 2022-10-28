// kodet af Michelle
import React , {useState} from "react";
import { NavLink } from "react-router-dom";
import {BsArrowLeft} from 'react-icons/bs'
import PersonIkon from '../components/PersonIkon';
import InsertText from '../components/InsertText';
import Switch from '../components/Switch';
import AddToDoList from '../components/AddToDoList';


export default function NewTask() {

    const [isToggled, setIsToogled] =useState(false)

    return (
        <>
        <section className="wrapper">
        <div className="T">
        <div className="tilbage_pil">
        <NavLink to="/"><BsArrowLeft /></NavLink>
        </div>
        </div>
        
        
        <div className="ny_opgave">
            
          <AddToDoList/>
            <div className="When">
            <InsertText name="When to do it" /> 
            </div>
            </div>
            <div className="hvem">
            <InsertText name="Who should do it?" />
            </div>
            <div className="Pr_container">
            <div className="personer">
             <PersonIkon />
             <PersonIkon />
             <PersonIkon />
             <PersonIkon />
            </div>
            <Switch rounded={true} isToogled={isToggled} 
            onToogle={() => setIsToogled(!isToggled)}/>
        </div>
        </section>
   
        </>
    )
};