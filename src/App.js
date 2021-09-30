import Navbar from "./components/Navbar";
import {useStateValue} from './assets/StateProvider'
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Chats from "./components/Chats";


function App() {git
  const [{user}, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>', authUser)
      if (authUser) {
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, [])
  if (!user){
    return <Login />
  }
  else{
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <main className="px-4 py-8 flex" >
          <Sidebar />
          <Feed />
          <Chats />
        </main>
      </div>
    );
  }
}

export default App;