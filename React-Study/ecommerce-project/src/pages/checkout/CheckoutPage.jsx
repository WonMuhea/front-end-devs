import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import "./CheckoutPage.css";
import "./CheckoutHeader.css";
import { OrderSummary } from "./OrderSummay";
import { PaymentSummary } from "./PaymentSummary";


export function CheckoutPage({ cart, loadCart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const deliveryOpt = await axios.get('/api/delivery-options');
                // Set your state here
                setDeliveryOptions(deliveryOpt.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();

    }, []);

    useEffect(() => {
        const fetchPaymentSummary = async () => {
            try {
                const paymentSummaryResponse = await axios.get('/api/payment-summary');
                setPaymentSummary(paymentSummaryResponse.data);
            } catch (error) {
                console.error("Error fetching payment summary", error);
            }
        };
        fetchPaymentSummary();
    }, [cart]);

    return (
        <>
            <title>Checkout</title>
            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <Link to="/">
                            <img className="logo" src="images/logo.png" />
                            <img className="mobile-logo" src="images/mobile-logo.png" />
                        </Link>
                    </div>
                    <div className="checkout-header-middle-section">
                        Checkout (
                        <Link className="return-to-home-link" to="/">
                            3 items
                        </Link>
                        )
                    </div>

                    <div className="checkout-header-right-section">
                        <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />
                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    );
}
