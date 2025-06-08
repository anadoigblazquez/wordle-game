
const EndOffGameMessage = () => {
  // Recuperar propiedades del contexto isGameWon y attemptsLeft. Condicionar el mensaje según haya perdido la partida o no.

  //Provisional
  const isGameWon = true;
  const attemptsLeft = 3;

  return (
    <div className="
      mt-[30px] 
      bg-lime-200 
      py-6
      text-center
      rounded-md
      font-mono">
      {
        isGameWon ? (
          <div>
            <div className="success">
              <div className="
                flex 
                justify-center
                mb-3">
                <i>🎉</i>
                <p className="
                  font-bold 
                  text-2xl
                  mx-4">¡¡Felicidades!!</p>
                <i>🎉</i>
              </div>
              <p className="">Has adivinado la palabra en {5 - attemptsLeft } intentos</p>
            </div>
            
          </div>
        ) : (
          <div>
            <div className="fail">
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
          </div>
        )
      }
    </div>
    
  )
}

export default EndOffGameMessage