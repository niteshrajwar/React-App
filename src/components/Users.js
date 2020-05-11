import React ,{useState,useEffect} from 'react'

function Users() {
   const [users,setUsers] = useState([]);

    useEffect(() => {
      fetch('https://reqres.in/api/users')
      .then(res=> res.json())
      .then(response =>{
          if(response && response.data) {
              setUsers(response.data)
          }
      })
    }, [])
    return (
        <div>
           {users.length > 0 ? <div> Users List <ul> {users.map(us => <li key={us.id}>{us.first_name} {us.last_name}</li>)} </ul></div> : null} 
        </div>
    )
}

export default Users
