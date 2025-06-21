
function Button({title , quantity, onClick}){
  return(
    <>
      <button onClick={onClick} className="flex p-2 cursor-pointer bg-black text-white border-2 rounded-xl ">
        <h3>{title }: </h3>
        <h5 className="ml-2 text-blue-500"> { quantity}</h5>
      </button>
    </>
  );
}

export default Button;