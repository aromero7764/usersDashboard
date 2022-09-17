import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import UserList from './components/UserList'
import UsersForm from './components/UsersForm'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [selectUser, setSelectUser] = useState(null)

  useEffect(()=>{
      axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }, [])

const getUsers = ()=> {
  axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
      
}

const getUserSelect = (userData) => {
    setSelectUser(userData)
    openModal()
}

const desSelectUser = ()=> {
  setSelectUser(null)
}

  const openModal = ()=> {
    setIsOpenModal(!isOpenModal)
  }

const openSuccess = ()=> {
  alert("succes")
  
}

  return (
    <div className="App container.is-widescreen">
      <div className='columns main1'>
        <div className="column is-10 is-offset-1 color">

          <Header openModal={openModal}
            openSuccess={openSuccess} />

          <UserList users={users}  //array users
            getUsers={getUsers} ////to update users main to delete
            getUserSelect={getUserSelect} //me devuelve el user seleccionado
          />

          {isOpenModal && <UsersForm
            getUsers={getUsers} //to update users main
            openModal={openModal} //to close Modal
            selectUser={selectUser} //obtain userSelect
            desSelectUser={desSelectUser} //deselect user

          />}
        </div>

      </div>


    </div>
  )
}

export default App
