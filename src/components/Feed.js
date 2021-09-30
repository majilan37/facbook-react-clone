import InputBox from "./InputBox"
import Posts from "./Posts"
import Stories from "./Stories"

function Feed() {
    return (
        <div className="flex justify-center flex-grow max-h-full overflow-y-auto" >
            <div className="flex flex-col relative items-center space-y-4 max-w-xl">
                <Stories />
                <InputBox />
                <Posts />
            </div>
        </div>
    )
}

export default Feed
