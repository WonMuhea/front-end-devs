import axios from 'axios';
import dayjs from 'dayjs';
import { formatMoney } from "../../util/money";

export function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {

    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((option) => {
                let deliveryPriceString = "FREE Shipping";
                if (option.priceCents > 0) {
                    deliveryPriceString = `${formatMoney(option.priceCents)} - Shipping`;
                }
                const updateDeliveryOption = async () => {
                    try {
                        await axios.put(`/api/cart-items/${cartItem.productId}`, {
                            deliveryOptionId: option.id,
                        });
                        await loadCart();
                    } catch (error) {
                        console.error("Error updating delivery option", error);
                    }
                };
                return (
                    <div key={option.id} className="delivery-option" onClick={updateDeliveryOption} >
                        <input
                            onChange={() => { }}
                            type="radio"
                            checked={option.id === cartItem.deliveryOptionId}
                            className="delivery-option-input"
                            name={`delivery-option-${cartItem.productId}`}
                        />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(option.estimatedDeliveryTimeMs).format(
                                    "dddd, MMMM D",
                                )}
                            </div>
                            <div className="delivery-option-price">
                                {deliveryPriceString}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}