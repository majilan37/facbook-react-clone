import { useStateValue } from "../assets/StateProvider"
import { EmojiHappyIcon } from "@heroicons/react/outline"
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid"
import { useRef, useState } from "react"
import { db, storage } from "../firebase"
import { addDoc, collection, serverTimestamp, setDoc, doc } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL, uploadString } from "firebase/storage"

function InputBox() {
    const [{user}, dispatch] = useStateValue()
    const inputFile = useRef(null)
    const [input, setInput] = useState('')
    const [imgPost, setImgPost] = useState(null)
    const addImgPost = (e) => {
        const reader = new FileReader()
        if(e.target.files[0]) reader.readAsDataURL(e.target.files[0])
        reader.onload = (event) => {
            setImgPost(event.target.result)
        }
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        if (!input) return;

        await addDoc(collection(db, 'posts'), {
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
            message: input,
            timestamp: serverTimestamp()
        }).then((snap) => {
            if(!imgPost) return;
            const fileRef = ref(storage, `posts/${snap.id}`)
            uploadString(fileRef, imgPost, 'data_url')
            const uploadTask = uploadBytesResumable(fileRef, File)
                uploadTask.on('state_changed', null, err => console.log(err), () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        setDoc( doc(db, `posts/${snap.id}` ), {
                            postImg: url
                        }, { merge: true } )
                    })
                })
        })
        setImgPost(null)
        setInput('')
    }
    return (
        <div className="bg-white shadow-md w-full rounded-md" >
            <form onSubmit={onSubmit} className="flex items-center px-4 pt-6 pb-2 space-x-2" >
                <img className="rounded-full" src={user.photoURL} alt="" />
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="bg-gray-100 rounded-full outline-none flex-grow py-3 px-6" 
                    placeholder={`What's on your mind ${user.displayName}`}
                />
                {imgPost && (
                    <div className="relative w-32 h-20">
                        <img className="object-cover" src={imgPost} alt="" />
                        <p onClick={() => setImgPost(null)} className="text-red-500 text-center py-1 cursor-pointer font-semibold" >Remove</p>
                    </div>
                )}
            </form>
            <div className="flex justify-evenly py-2 px-2" >
                <div className="flex items-center space-x-2 px-2 md:px-4 py-2 cursor-pointer rounded-md hover:bg-gray-100">
                    <VideoCameraIcon className="h-6 text-red-500" />
                    <span className="text-sm md:text-base" >Live video</span>
                </div>
                <div onClick={() => inputFile.current.click()} className="flex items-center space-x-2 px-2 md:px-4 py-2 cursor-pointer rounded-md hover:bg-gray-100">
                    <CameraIcon className="h-6 text-green-500" />
                    <span className="text-sm md:text-base">Photo/Edit</span>
                    <input hidden ref={inputFile} onChange={addImgPost} type="file" />
                </div>
                <div className="flex items-center space-x-2 px-2 md:px-4 py-2 cursor-pointer rounded-md hover:bg-gray-100">
                    <EmojiHappyIcon className="h-6 text-yellow-500" />
                    <span className="text-sm md:text-base">Felling/Activity</span>
                </div>
            </div>
        </div>
    )
}

export default InputBox
