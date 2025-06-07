
const FailMessage = () => {
  return (
    <div className="
      mt-[30px] 
      bg-lime-200 
      py-6
      text-center
      rounded-md
      font-mono">
      <div className="
        flex 
        justify-center
        mb-3">
        <i>👾</i>
        <p className="
          font-bold 
          text-2xl
          mx-4">GAME OVER</p>
        <i>👾</i>
      </div>
      <p className="">Has agotado el número de intentos</p>
      <button className="
        bg-lime-500
        font-bold
        text-2xl
        mt-6
        rounded-md
        py-2
        px-4
        border
        border-lime-500
        hover:bg-transparent">Reintentar</button>
    </div>
    
  )
}

export default FailMessage