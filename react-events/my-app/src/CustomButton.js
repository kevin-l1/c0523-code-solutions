export default function CustomButton({text, color, onCustomClick}) {
  return(
    <button style={{background: color}} onClick={() => onCustomClick(text)}>
      {text}
    </button>
  )
}
