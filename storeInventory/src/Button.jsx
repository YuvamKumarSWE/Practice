
function Button({title , quantity}){
  return(
    <>
      <button className="flex flex-col cursor-pointer bg-black text-white border-2 rounded-xl ">
        <h3>{title } :</h3>
        <h5>{{quantity}}</h5>
      </button>
    </>
  );
}

export default Button;