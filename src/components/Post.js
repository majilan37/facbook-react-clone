import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline"

function Post({name, image, message, email, timestamp, postImg}) {
    return (
        <div className="flex flex-col bg-white px-4 py-3 shadow-md first:mt-2" >
            <div className="flex items-center space-x-2" >
                <img className="w-9 h-9 object-cover rounded-full" src={image} alt="" />
                <div className="block" >
                    <p className="font-medium" >{name}</p>
                    <div className="text-sm text-gray-600">{new Date(timestamp?.toDate()).toLocaleString()}</div>
                </div>
            </div>
            <p className="block my-2" >{message}</p>
            {postImg && (
                <div className='relative max-h-full max-w-full flex' >
                    <img className="h-full w-full object-fill flex-grow" src={postImg} alt="" />
                </div>
            ) }
            <div className='flex justify-between items-center rounded-b-lg shadow-sm text-gray-500' >
                <div className='inputIcon rounded-none rounded-bl-lg' >
                    <ThumbUpIcon className='h-4' />
                    <p className='text-xs sm:text-base' >Like</p>
                </div>
                <div className='inputIcon rounded-none rounded-b-lg' >
                    <ChatAltIcon className='h-4' />
                    <p className='text-xs sm:text-base' >Comment</p>
                </div>                
                <div className='inputIcon rounded-none rounded-br-lg' >
                    <ShareIcon className='h-4' />
                    <p className='text-xs sm:text-base' >Share</p>  
                </div>
             </div>
        </div>
    )
}

export default Post
