import React, {useState} from 'react'

import  {useSelector, useDispatch} from "react-redux";
import {setUser} from '../redux/actions';

const Nowe = () => {

const testUser = {
    name:"hhhhh",
    authorized: false,
    avatar_url: "nowy",
}

const dispatch = useDispatch();
const user = useSelector((state) => state.user);
const [currentName, setcurrentName] = useState("");

const handleChange=(e)=>{
    setcurrentName(e.target.value);
    console.log(e.target.value);
}
    const handleSubmit=(e)=>{
  console.log("val"+currentName);
  const newUser = {
    name:currentName,
    authorized: true,
    avatar_url: "asdas"
  }
  dispatch(setUser(
     newUser
    )
    )
console.log(user)
}

    return (

        <div>
                    <p>Nowe</p>
            user<p>{user.name}</p>

            <input onChange={(e)=>handleChange(e)}/>
            <button onClick={()=>handleSubmit()}> Button</button>
        </div>
    )
}

export default Nowe;