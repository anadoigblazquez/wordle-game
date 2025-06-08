import { useContext } from "react";
import BoardField from "./BoardField";
import { DataContext } from "../context/DataContext";

const Board = () => {
  // Provisional
  const provisionalData = useContext(DataContext);
  console.log(provisionalData);

  return (
    <div className="mb-[60px] max-w-fit mx-auto">
      <p>{ JSON.stringify(provisionalData, null, 1) }</p>
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