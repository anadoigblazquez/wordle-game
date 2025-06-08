import { DataContext } from "./DataContext";

type ProvisionalType = {
  children: any
}

const DataProvider = ({ children }: ProvisionalType ) => {
  // Obetener datos desde custom hook de llamadas a la API

  
  return (
    <DataContext.Provider value={{ word: 'ESAVE' }}>
        { children }
    </DataContext.Provider>
  )
}

export default DataProvider