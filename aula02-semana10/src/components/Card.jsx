export default function Card({titulo, subtitulo = "Subtitulo do card"}){
  
  return (
    <>
      <h1>{titulo}</h1>
      <span>{subtitulo}</span>
    </>
  )
}