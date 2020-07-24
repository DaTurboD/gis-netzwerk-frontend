import React from "react"
import Lottie from "react-lottie"
import data from "../../animation-data/confetti.json"

export default () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <span title="Home">
      <Lottie
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          height: '100%',
          width: '100%',
          zIndex: '99999'
        }}
        isClickToPauseDisabled={true}
        options={defaultOptions}
      />
    </span>
  )
}