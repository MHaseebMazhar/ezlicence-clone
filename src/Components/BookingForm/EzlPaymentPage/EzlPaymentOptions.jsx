import React from 'react';

const EzlPaymentOptions = () => {
  const [isBillingOpen, setIsBillingOpen] = React.useState(false);
  const [selectedMethod, setSelectedMethod] = React.useState('paypal'); 

  const toggleBilling = () => {
    setIsBillingOpen(!isBillingOpen);
  };

  return (
    <div className="ezl-payment-options">
      
      {/* Payment Method Cards */}
      <div className="ezl-payment-method-group">
        
        {/* Credit Card */}
        <label className={`ezl-method-card ${selectedMethod === 'credit' ? 'ezl-selected' : ''}`}>
          <input 
            type="radio" 
            name="payment-method" 
            value="credit" 
            checked={selectedMethod === 'credit'}
            onChange={() => setSelectedMethod('credit')}
          />
          <span className="ezl-card-label">Credit card</span>
          <div className="ezl-card-logos">
            <img src="/11.png" alt="Visa" className="ezl-logo" />
            <img src="/22.jpeg" alt="Mastercard" className="ezl-logo" />
          </div>
        </label>

        {/* PayPal */}
        <label className={`ezl-method-card ${selectedMethod === 'paypal' ? 'ezl-selected' : ''}`}>
          <input 
            type="radio" 
            name="payment-method" 
            value="paypal" 
            checked={selectedMethod === 'paypal'}
            onChange={() => setSelectedMethod('paypal')}
          />
          <img src="/logo-paypal-payin4-a432892ea675bf73c06c06a6bb4ac4cdd32a4e5214d6fbeef7e3b431fafcedd6.svg" alt="PayPal" className="ezl-paypal-logo" />
          
        </label>

        {/* Clearpay */}
        <label className={`ezl-method-card ${selectedMethod === 'clearpay' ? 'ezl-selected' : ''}`}>
          <input 
            type="radio" 
            name="payment-method" 
            value="clearpay" 
            checked={selectedMethod === 'clearpay'}
            onChange={() => setSelectedMethod('clearpay')}
          />
          <img src="/clearpay-59b545b62013b0074997065871feb4611c2fa766330334b145501a722533b768.png" alt="Clearpay" className="ezl-clearpay-logo" />
        </label>
      </div>

      {/* Billing Details Accordion */}
      <div className="ezl-billing-accordion" onClick={toggleBilling}>
        <div className="ezl-accordion-header">
          <span>Billing Details</span>
          <span className="ezl-dropdown-arrow">{isBillingOpen ? '▲' : '▼'}</span>
        </div>
      </div>

      {/* Security Warning */}
      <div className="ezl-security-box">
        <span className="ezl-icon">✓</span>
        <p>
          To protect your payment, never transfer money or communicate about lesson payments outside of the EzLicence website.
        </p>
      </div>
    </div>
  );
};

export default EzlPaymentOptions;
