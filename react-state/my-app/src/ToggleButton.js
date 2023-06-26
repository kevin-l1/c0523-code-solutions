import { useState } from "react"

export default function ToggleButton({text, color}) {
  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    console.log('Value before calling the setter: ', isClicked)
    setIsClicked(!isClicked)
    console.log('Value after calling the setter: ', isClicked)
  }

  console.log('Value returned by useState: ', isClicked)

  return(
    isClicked ? (<button style={{background: color}} onClick={handleClick}>
      {text}
    </button>)
    :
    (<button style={{background: 'white'}} onClick={handleClick}>
      {text}
    </button>)
  )
}
