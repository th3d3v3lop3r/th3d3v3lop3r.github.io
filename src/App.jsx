import reactLogo from './assets/react.svg'
import './App.css'
import StockForm from './components/StockForm'
import StockList from './components/StockList'
import StockContext from './contexts/StockContext'
import { useState } from 'react'

function App() {

  const[stockData, setStockData] = useState([]);

  return (
    <>
      <StockContext.Provider
        value={{
          stockData,
          setStockData,
        }}
      >
        <StockForm />
        <StockList />
      </StockContext.Provider>

    </>
  )
}

export default App
