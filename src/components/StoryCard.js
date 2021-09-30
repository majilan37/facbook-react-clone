function StoryCard({name, profile, src}) {
    return (
        <div className="relative w-14 h-14 lg:h-64 lg:w-full hover:scale-105 mt-2 transition duration-200 cursor-pointer" >
            <img className="w-full h-full rounded-full lg:rounded-xl filter brightness-75 object-cover" src={src} alt="" />
            <img src={profile} alt="" className="hidden lg:inline-flex absolute w-10 h-10 object-cover top-2 left-2 rounded-full" />
            <p className='hidden lg:inline-flex absolute bottom-0 m-2 text-white font-medium' >{name}</p>
        </div>
    )
}

export default StoryCard


// w-14 h-14 rounded-full lg:rounded-xl lg:h-64 lg:w-[100px] xl:w-[150px]