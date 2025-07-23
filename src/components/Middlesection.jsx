
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  ordersdata from '../data/orders.json';
import products from '../data/products.json';
import styles from './middlesection.module.css';
import { iconMap } from '../utils/iconmap.js'
import React, { useState } from "react";
import Orderlist from './Orderlist.jsx';

export default function Middlesection(){
   
   const [isOpen, setIsOpen] = useState(false);
   const [selectedProduct, setSelectedProduct] = useState(null);
   
   function handleModal(product){
   setIsOpen(true);
   setSelectedProduct(product);
   console.log(product);
   }
   function closeModal(){
    setIsOpen(false);
    setSelectedProduct(null);
   }
    return ( 
    <main class="flex-1">
        <div className="flex">
        <div className="max-h-[250px] overflow-y-auto overflow-x-auto w-1/2 p-6 m-2 bg-white rounded-lg"> 
       <Orderlist className="max-h-[250px]"></Orderlist>
        </div>  
        <div class=" flex-1 w-[500px] h-[250px] p-6 m-2  bg-white overflow-auto rounded-lg">
            <table class="min-w-full text-sm text-left text-gray-700 divide-y divide-gray-200">
                <thead class="bg-gray-100 text-gray-600 uppercase text-xs">
                <tr>
                    <th></th>
                    <th class="px-4 py-2">Product</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Category</th>
                    <th class="px-4 py-2">
                      <button className={styles.productButton}>VIEW ALL PRODUCTS</button></th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-100">
                 {products.map((product) => (
            <tr key={product.product_id}>
              <td className="px-4 py-2">
                <i className={`${product.icon} text-lg text-gray-700`} />
              </td>
               <td className="px-4 py-2"><FontAwesomeIcon icon={iconMap[product.icon]}/> </td>
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">{product.category}</td>
              <td className="px-4 py-2"><button className={styles.productButton} 
              onClick={() => handleModal(product)}>
                 View</button></td>               
            </tr>
            
          ))}
                </tbody>
            </table>  
           {/* Modal */}
            {isOpen && (
              <div  className="fixed inset-0 bg-opacity-50 flex items-center 
              justify-center z-50">
              <div className="bg-blue p-6  bg-white rounded shadow-md w-96">
                  <h2 className="text-xl  text-blue-800 font-bold mb-2">
                   <FontAwesomeIcon icon={iconMap[selectedProduct.icon]}/>  {selectedProduct.name}</h2>
                  <p>{selectedProduct.description}</p>
                  <p> $ {selectedProduct.price}</p>
                  <p>{selectedProduct.category}</p>                  
                  <button
                    className="mt-4 bg-blue-800 text-white px-4 py-2 rounded"
                    onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
            )}        
            </div>           
        </div>
    </main>);
}