import React, {useState} from 'react';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  const [isDataFetch, setisDataFetch] = useState(false);
  const [users, setUsers] = useState([]);
  const [isBtnClick, setisBtnClick] = useState(false);

  const loadUsers = async () => {
    setisBtnClick(true);
    const response = await fetch(' https://reqres.in/api/users?page=1');
    const res = await response.json();
    // console.log(res)
    setUsers(res.data);
    setInterval(() => {
      setisDataFetch(true);
    }, 1500);
  }
  return ( 
    <>

    

    

    {
      isBtnClick ? (
        isDataFetch ? ( 
        
        <div className = 'box' > 
        
        {users.map(({id,first_name,last_name,avatar,email}) => {
              return ( 
              <>
                <div className = 'card'key = {id} >
                <img src = {avatar} alt = '' className = 'avatar' />
                <div className = 'card-description' >
                <h2 > {first_name} {last_name} </h2>
                <p > { email} </p>         
                <a className = 'btn-contact' href = {"mailto:" + email} > 
                </a>
                </div> 
                </div>

                </>
              )
            })
          } 
          </div>
        ) : (

          <div className = 'loader' > </div>

        )
      ) : ( 
        
        <section className = "home">
         
        <button onClick = {loadUsers} className = "btn" > Get Users </button> 
        </section>
      )
    } 
    </>
  );
}

export default App;
