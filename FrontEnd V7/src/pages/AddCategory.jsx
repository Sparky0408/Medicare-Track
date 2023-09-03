import React from "react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Footer } from "../components";
import Category from "../models/category";
import categoryService from "../services/category.service";
import {toast} from 'react-toastify';

const AddCategory = () => {

    const [category , setCategory] = useState(new Category('',''));
    const navigate = useNavigate();

    const handleChange = (e)=>{
    const {name,value} = e.target;
        setCategory(prevState=>{
            return{
                ...prevState , 
                [name]:value
            }
        })
    }
    
   const handleAddCategory=(e)=>{
        e.preventDefault();
        

        if(!category.categoryName) return;
       categoryService.addCategory(category).then(_=>{
        //alert("Category added")
        toast.success("Category added" ,{autoClose: 1500})
        navigate('/product')
       })
       .catch((error)=>{
        console.log(error)
       })

   }
  return (
    <>
           
            <div className="container my-3 py-3">
                <h1 className="text-center">Add Category</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                   

                        {/* {errorMessage &&
                        <div className="alert alert-danger">
                            {errorMessage}
                        </div>
                        } */}
                        <form onSubmit={(e) => handleAddCategory(e)}>
                            <div class="form my-3">
                                <label for="CName">Category Name </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="CName"
                                    name="categoryName"
                                    value={category.categoryName}
                                    placeholder="Enter Category Name"
                                    minLength={4}
                                    maxLength={20}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Desc">Description</label>
                                <textarea 
                                 class="form-control"
                                name="description"
                                 id="description" 
                                 cols="60" 
                                 rows="10"
                                 value={category.description}
                                 placeholder="Enter Description Here"
                                 onChange={handleChange}>
                                </textarea>
                                {/* <input
                                    type="text"
                                    class="form-control"
                                    id="LName"
                                    name="lastName"
                                    value={user.lastName}
                                    placeholder="Enter Last Name"
                                    minLength={4}
                                    maxLength={20}
                                    onChange={handleChange}
                                    required
                                /> */}
                           
                            </div>


                            
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                                  Add Category
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
  );
};

export default AddCategory;
