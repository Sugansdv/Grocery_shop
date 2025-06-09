import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/Payment.css';
import { Helmet } from 'react-helmet';

const Payment = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/'); 
  };

  return (
   <>
    <Helmet>
                           <title>Groceries Payment</title>
                         </Helmet>
    <div className="payment-container mt-5 pt-md-5">
      <div className="icon-circle">
        <i className="bi bi-check2-circle"></i>
      </div>
      <h2>Payment Successful!</h2>
      <p>Your order has been confirmed by the vendor.<br />
        Thank you for giving us the opportunity to serve you.
      </p>
      <button className="continue-btn" onClick={handleContinue}>CONTINUE</button>
    </div>
   </>
  );
};

export default Payment;
