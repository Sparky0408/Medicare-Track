import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
  <div className="card bg-dark text-white border-0 mx-3 position-relative">
    <img
      className="card-img"
      src="./images/Homenew.jpg"
      alt="Card"
      height={700}
    />
    <div className="card-img-overlay d-flex align-items-start justify-content-end">
      <div className="container">
        <h5 className="card-title fs-1 text fw-lighter" style={{color:"black"}}>
          <p>सर्वे सन्तु निरामयाह | </p>
        </h5>
        <p className="card-text fs-5 d-none d-sm-block" style={{color:"black"}} >
        To prolong life and promote perfect health !!
        </p>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Home;
