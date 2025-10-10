import React from 'react'
import { BGMButton, BlinkAnimation, Heading, Image } from './styles'

const Celebration = () => {
  const [isMuted, setIsMuted] = React.useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      <Image src="/rickroll.gif" alt="Rick Astley Dancing" width={100} height={100}/>      
      <BlinkAnimation>
        <Heading onClick={toggleMute}>
          It's the weekend! 🎉
        </Heading>  
      </BlinkAnimation>
      
      <audio src='/rickrollonloop.m4a' autoPlay loop muted={isMuted}/>
    </>
  )
}

export default Celebration