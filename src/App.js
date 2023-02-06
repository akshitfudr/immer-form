import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import produce from 'immer'

const initialState = {
    name: '',
    email: '',
    age: '',
    address:{
      street:'',
      city:'',
      state:'',
      zip:''
    }
  
}
function App(props) {
  const [person, setPerson] = useState(initialState)
  useEffect(()=>{
    

      console.log(person)
    
  },[person])
  const handleChange =(name, value)=>{
    const name1 = name.split('|')[0]
    const name2 = name.split('|')[1]
    const person_ = name2?produce(person, draft => {
      draft[name1][name2]= value 
    }):produce(person, draft=>{
      draft[name1] = value
    })
    setPerson(person_)
  }
 
  return (
    <div className="App">
      <h1>Immer Form</h1>

      

      <form>
        <input type={'text'} name='name' value={person.name} placeholder='Enter name here' onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
        <input type={'email'} name='email' value={person.email} placeholder='Enter email here' onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
        <input type={'number'} name='age' value={person.age} placeholder='Enter age here' onChange={(e)=>handleChange(e.target.name, e.target.value)}/>

        <input type={'text'} name='address|street' value={person.address.street} placeholder='Enter street here' onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
        <input type={'text'} name='address|city' value={person.address.city} placeholder='Enter city here' onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
        <input type={'text'} name='address|state' value={person.address.state} placeholder='Enter state here' onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
        <input type={'number'} name='address|zip' value={person.address.zip} placeholder='Enter zip code here' onChange={(e)=>handleChange(e.target.name, e.target.value)}/>
      </form>
    </div>
  );
}

export default App
