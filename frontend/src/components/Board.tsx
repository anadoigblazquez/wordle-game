import BoardField from "./BoardField"

const Board = () => {
  
  return (
    <div className="mb-[60px] max-w-fit mx-auto">
      <div className="
          row flex 
          gap-2 
          justify-between 
          mb-2">
        <BoardField />
        <BoardField />
        <BoardField />
        <BoardField />
        <BoardField /> 
      </div>
      <div className="
        row 
        flex 
        gap-2 
        justify-between 
        mb-2">
        <BoardField />
        <BoardField />
        <BoardField />
        <BoardField />
        <BoardField /> 
      </div>
      <div className="
        row 
        flex 
        gap-2 
        justify-between 
        mb-2">
        <BoardField />
        <BoardField />
        <BoardField />
        <BoardField />
        <BoardField /> 
      </div>
      <div className="
        row 
        flex 
        gap-2 
        justify-between 
        mb-2">
        <BoardField />
        <BoardField />
        <BoardField />
        <BoardField />
        <BoardField /> 
      </div>
      <div className="
        row 
        flex 
        gap-2 
        justify-between 
        mb-2">
        <BoardField />
        <BoardField />
        <BoardField />
        <BoardField />
        <BoardField /> 
      </div>
    </div>
  )
}

export default Board