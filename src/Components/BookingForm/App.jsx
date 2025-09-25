import React from "react";
import BookingForm from "./BookingForm";

const App = () => {
  const lessonTypes = [
    { id: 1, label: "1-Hour Lesson" },
    { id: 2, label: "2-Hour Lesson" },
  ];

  const availableDates = ["Wed, 8 Oct 2025", "Thu, 9 Oct 2025", "Fri, 10 Oct 2025"];
  const availableTimes = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];

  const defaultLocation = "123 Placeholder Street, London, UK, NW1 6XE";

  const orderSummary = {
    items: [
      { label: "20 hrs Booking Credit", amount: "£800.00" },
      { label: "Credit Discount 10% OFF", amount: "-£80.00", type: "discount" },
      { label: "Platform Processing Fee", amount: "£14.40", type: "fee" },
      { label: "Total Payment Due", amount: "£734.40", type: "total" },
    ],
    altText: "Or 4 payments of £183.60",
    buttons: [
      { label: "Add Another Booking", disabled: true },
      { label: "Continue", disabled: true },
    ],
  };

  const paymentOptions = [
    { label: "Pay in 4 (PayPal)", className: "paypal-btn", onClick: () => alert("PayPal Selected") },
    { label: "Clearpay", className: "clearpay-btn", onClick: () => alert("Clearpay Selected") },
  ];

  const features = [
    { title: "Purchase with peace of mind", desc: "Our refund policy is hassle-free." },
    { title: "Manage Your Lessons Online", desc: "24/7 access. Manage your account. Switch your instructor at no cost." },
    { title: "Secure Payments", desc: "We use 100% secure payments to provide you with a simple and safe experience." },
  ];

  return (
    <BookingForm
      lessonTypes={lessonTypes}
      availableDates={availableDates}
      availableTimes={availableTimes}
      defaultLocation={defaultLocation}
      orderSummary={orderSummary}
      paymentOptions={paymentOptions}
      features={features}
    />
  );
};

export default App;
