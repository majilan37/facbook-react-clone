import {SearchIcon} from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Contacts from './Contacts'

const contacts = [
    {
        name: 'Elon Musk', 
        src:'https://links.papareact.com/4zn'
    },
    {
        name: 'Jeff Bezoz', 
        src:'https://links.papareact.com/k2j',
    },
    {
        name: 'Mark Zuckerberg', 
        src:'https://links.papareact.com/xql',
    },
    {
        name: 'Bill Gates', 
        src:'https://links.papareact.com/4u4',
    },
]

function Chats() {
    return (
        <div className='hidden xl:flex flex-col w-60 fixed right-2' >
            <div className="flex justify-between items-center">
                <p className="text-gray-600 font-medium">Contact</p>
                <div className="relative space-x-2 flex items-center" >
                    <VideoCameraIcon className="h-5 w-5" />
                    <SearchIcon className="h-5 w-5" />
                    <DotsHorizontalIcon className="h-5 w-5" />
                </div>
            </div>
            <div className='flex flex-col space-y-4' >
                {contacts?.map((contact, index) => (
                    <Contacts key={index} name={contact.name} src={contact.src} />
                ))}
            </div>
        </div>
    )
}

export default Chats
