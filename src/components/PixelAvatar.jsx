import React from "react"
function PixelAvatar({ name }) {
    return (
      <div className="pixel-avatar">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Health%20potion-u5ax606Rzy7sCGiJv9KSZj1QMaT3Wd.png"
          alt={name}
          className="avatar-image"
        />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/heart-spin-0KvW5Y8LEZGBlOt6pS09nRglwZWixG.gif"
          alt="Heart"
          className="avatar-heart"
        />
      </div>
    )
  }
  
  export default PixelAvatar
  
  