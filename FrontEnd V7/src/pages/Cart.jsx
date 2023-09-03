import React from "react";
import store from '../redux/store';
import { useState, useEffect } from "react";
import CartService from "../services/cart.service";
import { Footer } from "../components";
import {  useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import CartItem from '../models/item';


const Cart = () => {
  const [cart, setCart] = useState({});
  const currentUser = store.getState().user;
  const BASE_URL="http://localhost:8080/products/";

  const dispatch = useDispatch();

  useEffect(() => {

    CartService.getMyCart(currentUser.id).then((response) => {
      setCart(response.data);
      // console.log(response.data);

      });

  }, []);


  const calculateTotalCartAmount = () => {
    let totalAmount = 0;
    cart.cartItems.forEach((item) => {
      totalAmount += item.totalPrice;
    });
    return totalAmount;
  };


  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <Link to="/" className="btn  btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    // console.log("In add");

    const item1=new CartItem(1,currentUser.id,product.productId.id);
    CartService.addToCart(item1).then((resp)=>{
      cart.cartItems.map((item)=>{
        if(item.productId.id===product.productId.id){
          item.quantity=item.quantity+1;
          item.totalPrice=item.totalPrice+item.productId.price;
        }
      })
      // console.log(cart.cartItems);
      const tp=cart.totalPrice+product.productId.price;

      setCart(prevState=>{
      return{
          ...prevState , 
          ["cartItems"]: cart.cartItems,
          ["totalItems"]: cart.totalItems + 1,
          ["totalPrice"]: tp
      }
      })
      // console.log("In add"+cart.totalPrice)
    // < EmptyCart />

    });



    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    if(product.quantity==1){
      CartService.deleteItem(product.id).then((resp)=>{
        cart.cartItems.map((item,index)=>{
          if(item.productId.id===product.productId.id){
            cart.cartItems.splice(index,1);
          }
        })
        // console.log(cart.cartItems);
        const tp=cart.totalPrice-product.productId.price;

        setCart(prevState=>{
        return{
            ...prevState , 
            ["cartItems"]: cart.cartItems,
            ["totalItems"]: cart.totalItems-1,
            ["totalPrice"]: tp
        }
        })
    
  
      });
     
      cart.totalItems > 0 ? <ShowCart /> : <EmptyCart />

    }else{
      CartService.decreaseItem(product.id).then((resp)=>{
        cart.cartItems.map((item)=>{
          if(item.productId.id===product.productId.id){
            item.quantity=item.quantity-1;
            item.totalPrice=item.totalPrice-item.productId.price;
          }
        })
        // console.log(cart.cartItems);
        const tp=cart.totalPrice-product.productId.price;
        setCart(prevState=>{
        return{
            ...prevState , 
            ["cartItems"]: cart.cartItems,
            ["totalItems"]: cart.totalItems-1,
            ["totalPrice"]: tp
        }
        })
      
  
      });
    }


    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 40;
    let totalItems = 0;
    // state.map((item) => {
    //   return (subtotal += item.price * item.qty);
    // });

    // state.map((item) => {
    //   return (totalItems += item.qty);
    // });
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
        
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
               
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <i className="fa fa-shopping-cart"></i> Cart (
                {cart.totalItems}) - Rs {calculateTotalCartAmount()}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Item List</h5>
                  </div>
                  <div className="card-body">
                    {cart.cartItems.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                              <div
                                className="bg-image rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src={BASE_URL + item.productId.id + '/image'}//src={item.image}
                                  // className="w-100"
                                  alt={item.productName}
                                  width={100}
                                  height={75}
                                />
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6">
                              <p>
                                <strong>{item.productName}</strong>
                              </p>
                              {/* <p>Color: blue</p>
                              <p>Size: M</p> */}
                            </div>

                            <div className="col-lg-4 col-md-6">
                              <div
                                className="d-flex mb-4"
                                style={{ maxWidth: "300px" }}
                              >
                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    removeItem(item);
                                  }}
                                >
                                  <i className="fas fa-minus"></i>
                                </button>

                                <p className="mx-5">{item.quantity}</p>

                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    addItem(item);
                                  }}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>

                              {/* <p className="text-start text-md-center">
                                <strong>
                                  <span className="text-muted">{item.qty}</span>{" "}
                                  x ${item.price}
                                </strong>
                              </p> */}
                            </div>
                          </div>

                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      {
                        cart.cartItems.map((item,index)=>{
                          return(<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            {index+1})  {item.productId.name} x {item.quantity}  <span>Rs {item.totalPrice}</span>
                          </li>)
                        })
                      }
                      {/* <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products ({cart.cartItems.length})<span>Rs {cart.totalPrice}</span>
                      </li> */}
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Rs {shipping}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        {/* {console.log(cart)} */}
                        <span>
                          <strong>Rs {parseInt(cart.totalPrice) + shipping}</strong>
                        </span>
                      </li>
                    </ul>

                    <Link to="/checkout" className="btn btn-dark btn-lg btn-block" myCart={cart}> Check Out </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
     
      <div className="container my-3 py-3">
        <h1 className="text-center">Cart</h1>
        <hr />
        {cart.totalItems > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;