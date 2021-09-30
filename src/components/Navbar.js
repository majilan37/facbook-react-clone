import HeaderIcons from './HeaderIcons'
import ActionIcons from './ActionIcons'
import {
    BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon,
} from '@heroicons/react/solid'

import { 
    FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon
 } from '@heroicons/react/outline'
import { useStateValue } from '../assets/StateProvider'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'


function Navbar() {
    const [{user}, dispatch] = useStateValue()
    const signout = async () => await signOut(auth)
    return (
        <header className="py-4 px-4 md:px-8 flex shadow-md sticky top-0 z-50 bg-white">
            <div className="flex items-center" >
                <img className='h-7 md:h-12 object-contain' src="https://links.papareact.com/5me" alt="" />
                <div className="bg-gray-100 flex mx-3 px-2 py-2 text-sm md:text-base items-center rounded-full" >
                    <SearchIcon className="h-5" />
                    <input 
                        className='hidden md:inline-flex bg-transparent outline-none px-2' 
                        type="text" 
                        placeholder='Search Facebook'
                    />
                </div>
            </div>
            <div className='flex flex-grow justify-center items-center px-4 space-x-2'>
                <HeaderIcons Icon={HomeIcon} active />
                <HeaderIcons Icon={FlagIcon} />
                <HeaderIcons Icon={PlayIcon} />
                <HeaderIcons Icon={ShoppingCartIcon} />
                <HeaderIcons Icon={UserGroupIcon} />
            </div>
            <div className='flex items-center justify-end' >
                <div className='flex items-center space-x-2'>
                    <img className='object-cover h-10 cursor-pointer rounded-full' src={user.photoURL} alt="" />
                    <p className='font-medium' >{user.displayName}</p>
                </div>
                <button onClick={signout} className='mx-6 px-4 py-2 bg-red-400 text-white hover:bg-red-500 active:bg-red-600 cursor-pointer' >
                    Log out
                </button>
                <div className='hidden px-2 lg:flex space-x-2' >
                    <ActionIcons Icon={ViewGridIcon} />
                    <ActionIcons Icon={ChevronDownIcon} />
                    <ActionIcons Icon={ChatIcon} />
                    <ActionIcons Icon={BellIcon} />
                </div>
            </div>
        </header>
    )
}

export default Navbar
