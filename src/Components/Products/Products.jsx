import React from "react";
import TopNav from "../Nav/components/TopNav";
import "./Products.css";
import { BuildingStore } from "tabler-icons-react";
import TriProducts from "./components/TriProducts";
import Footer from "../Landing/Footer";

function Products() {
    return (
        <div>
          
            <section className='products-s1'>
            <div style={{position: 'absolute', width: '100%'}}>
                <TopNav />
               
            </div>
            <div id='products-info-icon'>
                    <BuildingStore size={48}  />
                </div>
                <h2 id='products-title'> Products that champion the college counseling process. </h2>
                <p id='products-desc'> Search through our store and find the perfect plan for you.</p>
            </section>
            <section className='products-s2'>
                <h2 id='products-s2-header'> MyNext4's Store </h2>
                <p id='products-s2-desc'> Find a feasible plan, or just browse around.   </p>
                <TriProducts />
            </section>
            <Footer />
            
        </div>
    )
}

export default Products;