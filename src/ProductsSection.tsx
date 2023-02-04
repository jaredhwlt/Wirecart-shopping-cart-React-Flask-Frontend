import { useState, useEffect } from 'react';
import axios from "axios";
import ProductRow from "./ProductRow";
import Spinner from './Spinner';

interface Props{
    user_id: number;
}


export default function ProductsSection(props: Props){
    var [ProductsInCart, setProductsInCart] = useState([]);


    useEffect(() => {
        axios({
            // :8081 for FastAPI
            url: `http://localhost:5000/cart/user/5`,
            method: "GET",
            headers: {
        
            // Add any auth token here
            // authorization: "super_secret_token",
            },
        })
    
        // Handle the response from backend here
        .then((res) => { 
            if (res.data.length > 3){
                // cut the array and show only the first 3 items
                res.data = res.data.slice(0, 3)
                setProductsInCart(res.data)
            }
        })
        // Catch errors if any
        .catch((err) => {
                console.log(err);
        });

    }, [])

    return (
        <>
            {
                ProductsInCart.length > 0 ? (
                    // Map items in cart
                    ProductsInCart.map((item: any) => (
                        <ProductRow key={item.id} user_id={item.user_id} id={item.id} product_price={item.product_price} product_title={item.product_title} quantity={item.quantity} />
                    ))
                )
                :
                    <Spinner />
            }
                <p className="mt-16 italic text-gray-400 text-sm">*Showing only the first 3 items for the sake of design</p>
        </>
    )
}






    // A list of example products data for testing
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let cartProducts = [
        {
          "auto_date": "Fri, 03 Feb 2023 11:34:36 -0000",
          "id": 24,
          "product_desc": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          "product_id": 2,
          "product_price": 22,
          "product_title": "Mens Casual Premium Slim Fit T-Shirts ",
          "quantity": 5,
          "user_id": "8",
          "username": "hopkins"
        },
        {
          "auto_date": "Fri, 03 Feb 2023 11:34:39 -0000",
          "id": 26,
          "product_desc": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
          "product_id": 18,
          "product_price": 9,
          "product_title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
          "quantity": 2,
          "user_id": "8",
          "username": "hopkins"
        },
        {
          "auto_date": "Fri, 03 Feb 2023 11:34:42 -0000",
          "id": 28,
          "product_desc": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
          "product_id": 14,
          "product_price": 999,
          "product_title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) \u2013 Super Ultrawide Screen QLED ",
          "quantity": 2,
          "user_id": "8",
          "username": "hopkins"
        },
    ]
