import StoryCard from "./StoryCard"
import {useStateValue} from '../assets/StateProvider'


function Stories() {
    const [{user}, dispatch] = useStateValue()
    const stories = [
        {
            name: `${user.displayName}`, 
            src: `${user.photoURL}`,
            profile: `${user.photoURL}`
        },
        {
            name: 'Elon Musk', 
            src:'https://links.papareact.com/4zn',
            profile: 'https://links.papareact.com/kxk'
        },
        {
            name: 'Jeff Bezoz', 
            src:'https://links.papareact.com/k2j',
            profile: 'https://links.papareact.com/f0p'
        },
        {
            name: 'Mark Zuckerberg', 
            src:'https://links.papareact.com/xql',
            profile: 'https://links.papareact.com/snf'
        },
        {
            name: 'Bill Gates', 
            src:'https://links.papareact.com/4u4',
            profile: 'https://links.papareact.com/zvy' 
        },
    ]
    
    return (
        <div className="flex space-x-2" >
            {stories.map((story, index) => (
                <StoryCard 
                    key={index} 
                    name={story.name} 
                    src={story.src} 
                    profile={story.profile} 
                />
            ))}
        </div>
    )
}

export default Stories
