import {useState} from 'react'
import "./InputForm.css"
export function InputForm(){
        const [hide, setHide] = useState(true)
          function change(){
            if(hide === true){
              setHide(false)
            } else {
              setHide(true)
            }
          }
          return (<>
          <div>
            <input placeholder="E-mail"></input>
          </div>
          <p>
            <input type={hide ? "password" : "text"} placeholder="Password"></input>
            <button onClick={change}>{hide ? "show" : "hide"}</button>
          </p>
          <button className="btn">Login</button>
          <button className="btn">Sign up</button>
          </>
        )
      }