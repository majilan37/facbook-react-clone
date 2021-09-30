import React from 'react'
import { useStateValue } from '../assets/StateProvider'

function SidebarRow({Icon, image, title}) {
    const [{user}, dispatch] = useStateValue()
    return (
        <div className='flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-2' >
            {Icon && <Icon className='h-9 text-blue-500' />}
            {image && <img className='w-10 h-10 object-cover rounded-full' src={user.photoURL} alt="" /> }
            <p className='hidden text-sm md:inline-flex lg:text-base' >{title}</p>
        </div>
    )
}

export default SidebarRow
