function Contacts({name, src}) {
    return (
        <div className="flex items-center space-x-4 first:mt-4 cursor-pointer hover:bg-gray-200 p-2" >
            <div className="relative w-14 h-14 " >
                <img className='object-cover rounded-full w-full h-full' src={src} alt="" />
                <div className="h-4 w-4 bg-green-500 absolute z-50 rounded-full bottom-0 left-1" />
            </div>
            <p>{name}</p>
        </div>
    )
}

export default Contacts
