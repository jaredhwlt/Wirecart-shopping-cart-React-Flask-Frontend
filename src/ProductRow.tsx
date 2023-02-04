import { useState, useEffect } from 'react';
import axios from "axios";



interface Props{
    id: number;
    user_id: number;
    product_title: string;
    product_price: number;
    quantity: number;
}


export default function ProductRow(props: Props){
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setQuantity(props.quantity)
    }, [props.quantity])

    function ChangeQuantity(NewQuantity: number){
        
        // Validate quantity
        if(NewQuantity < 0){
            return
        }
        else if(NewQuantity > 10){
            return
        }

        // Save the current quantity in case the request fails
        // and the quantity wasn't actually changed in the backend
        let oldQuantity = quantity;

        // Temporarily set the state to the new quantity for
        // the quantity change to appear faster 
        setQuantity(NewQuantity)


        axios({
          // 8081 for FastAPI
          url: `http://localhost:5000/cart/user/${props.user_id}/product/${props.id}`,
          method: "PUT",
          headers: {
      
            // Add any auth token here
            // authorization: "super_secret_token",
          },
      
          // Attaching the required data
          data: {"quantity": NewQuantity},
        })
      
          // Handle the response from backend here
          .then((res) => {
            if (res.status !== 200){    
                setQuantity(oldQuantity)
            }
           })
      
          // Catch errors if any
          .catch((err) => { 
                console.log(err);
                setQuantity(oldQuantity)
           });
    }

    return (
        <div className="flex justify-between items-center mt-6 pt-6">
            <div className="flex min-w-[30rem] items-center">
                <img
                    className="rounded-full w-12 h-12"
                    src={`https://api.dicebear.com/5.x/icons/svg?seed=${props.id}`}
                    alt="avatar"
                />

                <div className="flex flex-col ml-3">
                    <span className="md:text-md font-medium">{props.product_title}</span>
                    <span className="text-xs font-light text-gray-400">#{props.id}</span>
                </div>
            </div>

            <div className="flex justify-center items-center">

                <div className="pr-8 flex ">
                    {
                        quantity === 1 ? (
                            <button id="minus-btn" className="font-semibold text-gray-300 cursor-not-allowed">-</button>
                        )
                        :   <button id="minus-btn" onClick={() => ChangeQuantity(quantity - 1)} className="text-gray-500 font-semibold">-</button>
                    }
                    <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value={quantity}></input>
                    {
                        quantity >= 5 ? (
                            <button id="plus-btn" className="font-semibold text-gray-300 cursor-not-allowed">+</button>
                        )
                        :   <button id="plus-btn" onClick={() => ChangeQuantity(quantity + 1)} className="text-gray-500 font-semibold">+</button>
                    }
                </div>

                <div className="pr-8 ">
                    
                    <span className="text-xs font-medium">${props.product_price}</span>
                </div>
                <div>
                    <i className="fa fa-close text-xs font-medium"></i>
                </div>

            </div>
        </div>
    )
}