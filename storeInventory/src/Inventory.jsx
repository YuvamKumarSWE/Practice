import Button from "./Button";

function Inventory({inventory, updateQuantity}){

    // Add a safety check to ensure inventory is an array
    if (!inventory || !Array.isArray(inventory)) {
        return <div>Loading inventory...</div>;
    }

    return(
    <div className="flex gap-4 text-2xl p-4  ">
        {
            inventory.map((item, index) => (
                <Button key={index} title={item.name} quantity={item.quantity} onClick={()=>updateQuantity(item.name)} />
            ))
        }
    </div>
    );

}

export default Inventory;