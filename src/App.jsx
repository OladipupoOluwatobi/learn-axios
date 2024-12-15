import UseAxios from './useAxios';
import Button from './Button';
import './App.css'

const App=({props})=> {
  const [error,response,loading,fetchData] = UseAxios()


  console.log(loading);

  return (
    <div className="App">
      {!loading && !error && !response && <p>Click the button for your Cat Facts</p>}
      {loading && <p>cat facts Loading.....</p>}
      {!loading && response&& <p>{response}</p>}
      {!loading && <p>{error}</p>}
      <Button content={"Get Cat Facts"} click={()=>fetchData({method:"get"})}/>
    </div>
  );
  
}

export default App;