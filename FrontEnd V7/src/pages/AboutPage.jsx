import React from 'react'
import { Footer } from "../components";

const AboutPage = () => {
    const containerStyle = {
      textAlign: 'center',
      padding: '40px',
      backgroundColor: '#b4b4b4',
      borderRadius: '10px',
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    };
  
    const headingStyle = {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#333',
    };
  
    const paragraphStyle = {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#666',
    };
  
  return (
    <>
    <div style={containerStyle}>
      <h2 style={headingStyle}>About Us</h2> 
      <p style={paragraphStyle}>
      Online <b>Medicaretrack.in</b> It is a Online Pharmacy, ayurvedic store,Health Store - Its a one stop shop that offers effective Medical products, healthcare solutions to all those individuals who are health enthusiasts. Providing over 20,000 health  and ayurvedic herbal medicines online at the lowest guaranteed price - with the highest pharmaceutical standards. 

We offer premium and the largest range of original health and fitness products across various categories and leading brands. We dedicate this portal to all those people who are keen to purchase healthcare products online.
      </p> <hr></hr>
      <p style={paragraphStyle}>
      The aim is to supply cheaper products to everybody who has access to the internet and deliver those products to their door. Through harnessing the power of the internet and supplying you directly, this website will save up to 75% off the cost of many well known products found in your local Medical Shop.

We aim at covering various healthcare categories comprehensively which include –Diabetes,Nutrition,Sports and fitness,Body Building, Beauty care and Personel Care Produts,Mother and Baby Care and Health Devices. We enjoy comprehensive understanding of the shopper’s needs and make our best efforts to cater them with an extensive choice of both Indian and globalbrands

      </p> <hr></hr>
      <p style={paragraphStyle}>
      online medical store offers a variety of key services includingayurvedic herbal  pharmacy and over-the-counter medicines, vitamins and health supplements, family planning , ayurvedic herbal beauty cosmetic products,  ayurvedic herbal medicine ,toiletries, electrical items and baby care products.

The service is supervised by fully qualified pharmacists who are available to discuss symptoms and issues about medical problems in a confidential environment through email and oversee all medicinal purchases.

      </p>

      <h4>So, make a move and Happy Shopping !!!!</h4>
    </div>
   
      <Footer />
    </>
  )
}

export default AboutPage