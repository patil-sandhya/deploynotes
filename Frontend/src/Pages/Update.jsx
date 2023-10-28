import React from 'react'
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import styled from "styled-components";
export const UpdateBlog = () => {
    const [state, setState] = useState({
        title:"",
        description:"",
        language:"",
        publish:false
    })
    
    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
    
        setState(() => {
            return {
              ...state,
              [name]: value,
            };
          });
    }
    const handleAuth = (e)=>{
        e.preventDefault()
       console.log(state)
    }
      return (
        <DIV>
          <div className="login">
            <form onSubmit={handleAuth}>
              <h1>Create Blog</h1>
              <input
                type="text"
                name="tile"
                placeholder="Title"
                value={state.title}
                onChange={handleChange}
              />
              <input
                type="textarea"
                name="location"
                placeholder="Location"
                value={state.description}
                onChange={handleChange}
              />
                <select name="language" id="" onChange={handleChange} value={state.language}>
                <option value="">Select Language</option>
                <option value="english">English</option>
                <option value="french">French</option>
                </select>
              <button type="submit">Create</button>
            </form>
          </div>
        </DIV>
      );
}

const DIV = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400&family=Oswald:wght@500&display=swap");

  .login {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(41, 37, 37, 0.05);
    margin: auto;
    padding: 100px;
  }
  .login > form {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.9);
    font-family: "Nunito Sans";
    padding: 50px 75px;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .login > form > lable {
  }
  .login > form > input {
    padding: 5px 10px;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .login > form > select {
    padding: 5px 10px;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .login > form > button {
    align-items: center;
    justify-content: center;
    background-color: black;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 20px 0;
    border-radius: 5px;
    cursor: pointer;
    width: 200px;
    margin: auto;
  }
  @media (max-width:400px) {
    .login {
      margin: auto;
      padding: 10px;
    }
    .login > form {
      width:90%;
      padding: 50px 10px;
      
    }
  }
`;

