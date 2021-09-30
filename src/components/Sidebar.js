import SidebarRow from "./SidebarRow"
import {
    ChevronDownIcon, ShoppingBagIcon, UserGroupIcon
} from '@heroicons/react/outline'
import {
    CalendarIcon, ClockIcon, DesktopComputerIcon, UserIcon
} from '@heroicons/react/solid'
import { useStateValue } from "../assets/StateProvider"

function Sidebar() {
    
    const [{user}, dispatch] = useStateValue()

    return (
        <div className="flex flex-col fixed left-2 ">
            <SidebarRow image title={user.displayName} />
            <SidebarRow Icon={UserIcon} title='friends' />
            <SidebarRow Icon={UserGroupIcon} title='Groups' />
            <SidebarRow Icon={ShoppingBagIcon} title='Marketplace' />
            <SidebarRow Icon={DesktopComputerIcon} title='Watch' />
            <SidebarRow Icon={CalendarIcon} title='Events' />
            <SidebarRow Icon={ClockIcon} title='Memories' />
            <SidebarRow Icon={ChevronDownIcon} title='See more' />
        </div>
    )
}

export default Sidebar
