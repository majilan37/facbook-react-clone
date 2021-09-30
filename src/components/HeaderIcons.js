function HeaderIcons({Icon, active}) {
    return (
        <div className='p-2 lg:px-4 lg:py-2 hover:bg-gray-200 rounded-md active:border-b-2 border-blue-500 ' >
            <Icon className={`h-6 md:h-7 text-gray-600 ${active && 'text-blue-500'}`} />
        </div>
    )
}

export default HeaderIcons
