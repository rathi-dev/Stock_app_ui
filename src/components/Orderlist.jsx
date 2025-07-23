import orders from '../data/orders.json';

export default function Orderlist(){
    return (
    <>
    <div> Recent orders placed below</div>
    {orders.map( order => 
       <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 my-4">
  <h3 className="text-lg font-semibold text-gray-800 mb-2">
    🧾 Order <span className="text-blue-600 font-bold">{order.order_id}</span>
  </h3>
  <p className="text-gray-700 mb-1">
    Placed by <span className="font-medium text-indigo-600">{order.user_id}</span> 
    <br></br>Order date is{" "}
  {new Date(order.order_date).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  })}
  </p>
  <p className="text-gray-700 mb-1">
    Total Price: <span className="font-bold text-green-700">{order.total_price}</span>
  </p>
  <p className="text-gray-700">
    Status:{" "}
    <span className="inline-block px-2 py-1 rounded-full text-white bg-green-600 text-sm">
      {order.status}
    </span>
  </p>
</div> 
    )}
   

    </>
    )
}