import {useState,useEffect} from 'react'

function UserList(){
const [users,setUsers] = useState([])

   useEffect(()=>{
    async function FetchUsers(){
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const UserList=await response.json()
             setUsers(UserList)
        } catch (error) {
            console.error("error in fetching",error)
        }

    }
    FetchUsers()
},[])
return(
    <div className="Container">
    
        {users.map((user)=>{
            return(
            <div  key={user.id} className="card">
            <p className='Name'>{user.name}</p>
            <p className='Email'>{user.email}</p>
            <p className='Address'>{user.address.street}, {user.address.city}</p>
            
    
    </div>
            )
     })}


    </div>
)
}

export default UserList;