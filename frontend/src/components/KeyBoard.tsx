import Key from "./Key";

const KeyBoard = () => {
  const letrasProvisional = ['Q', 'W','E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const letrasProvisional2 = ['A', 'S','D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
  const letrasProvisional3 = ['ENTER', 'Z', 'X','C', 'V', 'B', 'N', 'M', 'DEL'];

  return (
    <>
    <div className="
      flex 
      gap-2 
      justify-center
      mb-2">
      {
        letrasProvisional.map( (key) => {
          return (
            <Key key='key' keyLetter={key} />
          )
        } )
      }
    </div>
    <div className="flex 
      gap-2 
      justify-center
      mb-2">
      {
        letrasProvisional2.map( (key) => {
          return (
            <Key key='key' keyLetter={key} />
          )
        } )
      }
    </div>
    <div className="
      flex gap-2 
      justify-center">
      {
        letrasProvisional3.map( (key) => {
          return (
            <Key key='key' keyLetter={key} />
          )
        } )
      }
    </div>
    </>
  )
}

export default KeyBoard