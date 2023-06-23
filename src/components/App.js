import React ,{useState,useEffect} from 'react';
import {uuid} from 'uuidv4';
import './App.css';
import Header from '../components/Header'
import AddContact from '../components/AddContact'
import ContactList from '../components/ContactList'


function App() {
  const LOCAL_STORAGE_KEY= 'contacts';
  const [contacts, setContacts]=useState([])
  
  const addContactHandler = (contact)=>{
  console.log(contact)
  setContacts([...contacts, {id: uuid(), ...contacts}]);
  };
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    },[contacts]);

  useEffect(()=>{
   const retreiveContacts =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if (retreiveContacts) setContacts(retreiveContacts );
    },[]);



  return (
   
      <div className="ui container">
      <Header />
    <br /> <br /> <br />
     <AddContact  addContactHandler={addContactHandler}/>
     <br/> 
     <ContactList contacts={contacts} />
     </div>
     
  
  );
}

export default App;
