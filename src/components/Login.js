import { FacebookAuthProvider, signInWithPopup } from "firebase/auth"
import {useStateValue} from '../assets/StateProvider'
import {auth} from '../firebase'


function Login() {
    const [{}, dispatch] = useStateValue()
    const provider = new FacebookAuthProvider()
    const onSubmit = () => {
        signInWithPopup(auth, provider)
            .then((res) =>{
                const user = res.user
                const credential = FacebookAuthProvider.credentialFromResult(res);
                const accessToken = credential.accessToken;
            }).catch((error) => console.error(error)) 
    }
    return (
        <div className="h-[800px] flex flex-col items-center justify-center" >
            <img className="h-56 w-56" src="https://links.papareact.com/5me" alt="" />
            <button onClick={onSubmit} className="py-4 px-12 text-white hover:bg-blue-600 active:bg-blue-700 rounded-full bg-blue-500 my-10">Login</button> 
        </div>
    )
}

export default Login
