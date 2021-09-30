import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";


function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(() =>{
        const fetchPosts = async () => {
            const querySnap = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
            const getPosts = await getDocs(querySnap)
            const postsHolder = [];
            getPosts.forEach((doc) => {
                postsHolder.push({...doc.data()})
            })
            setPosts(postsHolder)
        }
        fetchPosts();
    }, [])
    console.log(posts);
    return (
        <div className="flex flex-col space-y-2 w-full" >
            {posts?.map((post, index) => (
                <Post 
                    key={index} 
                    name={post.name} 
                    email={post.email} 
                    message={post.message}
                    timestamp={post.timestamp}
                    image={post.image}
                    postImg={post.postImg}
                 />
             ))}
        </div>
    )
}

export default Posts
