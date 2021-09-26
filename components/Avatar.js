import React from 'react'

const Avatar = ({url}) => {
    return <img  
    loading="lazy"
    src={url}
    alt="profile picture"
    className="h-9 rounded-full cursor-pointer transition duration-150 transform hover:boxShadow hover:shadow-2xl  hover:scale-90 "
        />
}



export default Avatar

