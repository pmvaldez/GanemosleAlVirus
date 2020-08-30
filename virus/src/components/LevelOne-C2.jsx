import React from "react"
import ReactPlayer from "react-player"
import '../styles/responsive-player.css'

const ResponsivePlayer = () => {
    return (
        <div className="player-wrapper">
            <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=G2BHb6kWnRc"
            width="100%"
            height="100%"
            controls={true}
            />
        </div>
    )
}

export default ResponsivePlayer