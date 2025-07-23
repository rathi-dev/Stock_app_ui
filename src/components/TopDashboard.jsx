import products from '../data/products.json';
import stockData from '../data/stocks.json';
import orderData from '../data/orders.json';


export default function Topdashboard(){
    
const inStockItems = stockData.filter(item => item.quantity > 0);
const totalCount = inStockItems.length;
const lowStockCount = stockData.filter(item => item.quantity < 10).length;
const outOfStockItems = stockData.filter(item => item.quantity == 0);
const ordersLength = orderData.length;

return (
     <main class="flex-1 p-6">
            <div class="flex justify-between items-center mb-2">
                <h2 class="font-bold text-2xl text-gray-800">Dashboard</h2>
                <div class="flex items-center space-x-4">
                    <input type="text" placeholder="Search..." class="border px-3 py-2 rounded"/>
                    <i class="fa fa-bell text-yellow-500"></i>
                    <div class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">JS</div>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-2">
                <div class="bg-white p-6 rounded shadow hover:scale-105 transition-transform duration-300">
                    <p class="text-sm font-semibold text-gray-700">Total Products</p>
                    <p class="text-2xl font-bold">{products.length}</p>
                    <a href="Products.html" class="text-blue-600 text-sm mt-2 inline-block">View all products→</a>
                </div>
                <div class="bg-white p-6 rounded shadow hover:scale-105 transition-transform duration-00">
                    <p class="text-sm font-semibold text-gray-700">Total Orders</p>
                    <p class="text-2xl font-bold">{ordersLength}</p>
                    <a href="Orders.html" class="text-blue-600 text-sm mt-2 inline-block">View all orders→</a>
                </div>
                <div class="bg-white p-6 rounded shadow hover:scale-105 transition-transform duration-200">
                    <p class="text-sm font-semibold text-gray-700">Low Stock Items</p>
                    <p class="text-2xl font-bold">{lowStockCount}</p>
                    <a href="Inventory.html" class="text-blue-600 text-sm mt-2 inline-block">View all inventory→</a>
                </div>
                <div class="bg-white p-6 rounded shadow hover:scale-105 transition-transform duration-200">
                    <p class="text-sm font-semibold text-gray-700">Out of Stock</p>
                    <p class="text-2xl font-bold">{outOfStockItems.length}</p>
                    <a href="Inventory.html" class="text-blue-600 text-sm mt-2 inline-block">View all inventory→</a>
                </div>
            </div>
        </main>
);
}