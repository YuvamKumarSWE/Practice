import  {useEffect, useState}  from "react";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setresult] = useState(null);
  const [error, setError] = useState("");

  function calc  (event){
      event.preventDefault();
      try {
        setresult(weight / (height ** 2));
      } catch (error) {
        setError(error);
      }
      
    }



  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-amber-500 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          BMI Calculator
        </h1>
        
        <form className="flex flex-col space-y-4">
          <input 
            type="number" 
            placeholder="Weight (kg)" 
            value={weight}
            onChange={(event)=>{setWeight(Number(event.target.value))}}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="number" 
            placeholder="Height (cm)" 
            value={height}
            onChange={(event)=>{setHeight(Number(event.target.value))}}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={(event)=> {calc(event)}}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Calculate BMI
          </button>
        </form>

        <div> <div>
      {result ? (
        <h1>{result}</h1>
      ) : (
        <h1>{error}</h1>
      )}
    </div></div>
      </div>
    </div>
  );
}

export default App;
