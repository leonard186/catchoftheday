import React from 'react';
import {formatPrice} from "../helpers";

class Order extends React.Component {
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        //make sure the fish is loaded before we continue
        if(!fish) return null;
        //if fish is available show fish
        if(fish.status === 'available') {
            return <li key={key}>
                {count} Kg <i>{fish.name}</i> {formatPrice(count * fish.price)}
            </li>
        } else { //if fish is unavailable show no fish message
            return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available</li>
        }


    };

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, currentValue) => {
            const fish = this.props.fishes[currentValue];
            const count = this.props.order[currentValue];
            const isAvailable = fish && fish.status === 'available';

            if(isAvailable) {
                return prevTotal + (count * fish.price)
            }

            return prevTotal;
        }, 0);

        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                </ul>
                <div>
                    Total:
                    <strong> {formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order