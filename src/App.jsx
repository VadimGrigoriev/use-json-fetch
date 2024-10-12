import Data from "./components/Data/Data";
import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";

function App() {
  
  return (
    <div>
      <h1>Data Component</h1>
      <Data />
      <h1>Error Component</h1>
      <Error />
      <h1>Loading Component</h1>
      <Loading />
    </div>
  )
}

export default App
