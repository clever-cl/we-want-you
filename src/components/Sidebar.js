import React from 'react'
import "../styles/Sidebar.css"
import SidebarOptions from './SidebarOptions'
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from '../helpers/DataLayer'

const Sidebar = () => {
    const [{ playlists }] = useDataLayerValue()

    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOptions Icon={HomeIcon} title="Home" />
            <SidebarOptions Icon={SearchIcon} title="Search" />
            <SidebarOptions Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist, i) => (
                <div key={i}>
                <SidebarOptions title={playlist.name} />
                </div>

            ))}
        </div>
    )
}

export default Sidebar
