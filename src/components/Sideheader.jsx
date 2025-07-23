export default function Sideheader(){
    return (<>
         <aside className="w-64 bg-blue-800 text-white p-5">
            <h1 className="font-bold bg-blue-900 text-2xl mb-6">StockMaster</h1>
            <nav class="space-y-2">
                <a href="Dashboard.html" className="block hover:bg-blue-700 px-4 py-2 rounded">Dashboard</a>
                <a href="Inventory.html" className="block hover:bg-blue-700 px-4 py-2 rounded">Inventory</a>
                <a href="Products.html" class="block hover:bg-blue-700 px-4 py-2 rounded">Products</a>
                <a href="Orders.html" class="block hover:bg-blue-700 px-4 py-2 rounded">Orders</a>
                <a href="Suppliers.html" class="block hover:bg-blue-700 px-4 py-2 rounded">Suppliers</a>
                <a href="Report.html" class="block hover:bg-blue-700 px-4 py-2 rounded">Report</a>
                <a href="Settings.html" class="block hover:bg-blue-700 px-4 py-2 rounded">Settings</a>
            </nav>
        </aside>
    </>);
}