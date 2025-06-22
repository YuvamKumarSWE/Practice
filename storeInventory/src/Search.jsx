import { useState } from "react";

function Search({addItem}){
    const [inputValue, setInputValue] = useState("");

    return(
        <div className="flex p-2 justify-center  text-white ">
            <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="rounded-2xl p-4 w-sm border-black border-2 bg-amber-600"
            />
            <button 
                className=" rounded-2xl ml-2 p-4 w-20 border-black border-2 bg-amber-600" 
                onClick={() => {
                    addItem(inputValue); 
                    setInputValue(""); 
                }}
            >
                Add
            </button>
        </div>
    );
}

export default Search;