import "../index.css";
import ProductsSection from '../Components/ProductsSection';



function Checkout(){
    
    return( 
        <div className="h-screen bg-gray-300">
        <div className="py-12">
            
        
        <div className="max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg md:max-w-5xl">
            <div className="md:flex ">
                <div className="w-full p-4 px-5 py-5">

                    <div className="gap-2 md:grid md:grid-cols-3 ">
                        <div className="col-span-2 p-5">

                            <h1 className="text-xl font-medium ">Shopping Cart</h1>                            
                            {
                                <ProductsSection user_id={5} />
                            }

                            <div className="flex items-center justify-between pt-6 mt-6 border-t"> 
                                <div className="flex items-center">
                                    <i className="pr-2 text-sm fa fa-arrow-left"></i>
                                    <span className="font-medium text-blue-500 cursor-pointer text-md">Continue Shopping</span>
                                </div>

                                <div className="flex items-end justify-center">
                                    <span className="mr-1 text-sm font-medium text-gray-400">Subtotal:</span>
                                    <span className="text-lg font-bold text-gray-800 "> $24.90</span>
                                    
                                </div>
                            </div>
                        </div>

                            
                        <div className="p-5 overflow-visible bg-gray-800 rounded ">

                            <span className="block pb-3 text-xl font-medium text-gray-100">Card Details</span>

                            <span className="text-xs text-gray-400 ">Card Type</span>
                            <div className="flex items-center justify-between mt-2 overflow-visible">

                            


                                <div className="relative px-4 py-2 bg-gray-500 rounded w-52 h-28 right-10">

                                    <span className="text-lg italic font-medium text-gray-200 underline">VISA</span>

                                    <div className="flex items-center justify-between pt-4 ">                                        
                                        <span className="text-xs font-medium text-gray-200">****</span>
                                        <span className="text-xs font-medium text-gray-200">****</span>
                                        <span className="text-xs font-medium text-gray-200">****</span>
                                        <span className="text-xs font-medium text-gray-200">****</span>
                                    </div>

                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs text-gray-200">Giga Tamarashvili</span>
                                        <span className="text-xs text-gray-200">12/24</span>
                                    </div>


                                    
                                </div>






                                <div className="flex flex-col items-center justify-center">
                                    <img src="https://img.icons8.com/color/96/000000/mastercard-logo.png" alt="Mastercard logo" width="40" className="relative right-5" />
                                    <span className="relative text-xs font-medium text-gray-200 bottom-2 right-5">mastercard.</span>
                                    
                                </div>
                                
                            </div>




                            <div className="flex flex-col justify-center pt-3">
                                <label className="text-xs text-gray-400 ">Name on Card</label>
                                <input type="text" className="w-full h-6 py-4 text-sm text-white placeholder-gray-300 bg-gray-800 border-b border-gray-600 focus:outline-none" placeholder="Giga Tamarashvili" />
                            </div>


                            <div className="flex flex-col justify-center pt-3">
                                <label className="text-xs text-gray-400 ">Card Number</label>
                                <input type="text" className="w-full h-6 py-4 text-sm text-white placeholder-gray-300 bg-gray-800 border-b border-gray-600 focus:outline-none" placeholder="****     ****      ****      ****" />
                            </div>




                            <div className="grid grid-cols-3 gap-2 pt-2 mb-3">

                                <div className="col-span-2 ">
                                    <label className="text-xs text-gray-400">Expiration Date</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <input type="text" className="w-full h-6 py-4 text-sm text-white placeholder-gray-300 bg-gray-800 border-b border-gray-600 focus:outline-none" placeholder="mm" />
                                        <input type="text" className="w-full h-6 py-4 text-sm text-white placeholder-gray-300 bg-gray-800 border-b border-gray-600 focus:outline-none" placeholder="yyyy" />
                                    </div>
                                </div>


                                    

                                <div className="">
                                    <label className="text-xs text-gray-400">CVV</label>
                                    <input type="text" className="w-full h-6 py-4 text-sm text-white placeholder-gray-300 bg-gray-800 border-b border-gray-600 focus:outline-none" placeholder="XXX" />
                                </div>
                            </div>



                            <button className="w-full h-12 text-white bg-blue-500 rounded focus:outline-none hover:bg-blue-600">Check Out</button>




                        </div>

                        
                    </div>
                    
                
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Checkout;