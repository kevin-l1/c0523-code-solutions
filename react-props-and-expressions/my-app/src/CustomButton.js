import './CustomButton.css'

export default function CustomButton({className, text}) {
  return (
    <button className={className}>
      {text}
    </button>
  )
}
