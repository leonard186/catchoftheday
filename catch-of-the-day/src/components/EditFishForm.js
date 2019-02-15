import React from 'react';

export class EditFishForm extends React.Component {

    handleChange = (e) => {
        let currentValue = e.currentTarget.value;
        console.log(currentValue);
        //1 Take a copy of current fish
        const updateFish = {
            ...this.props.fish,
            [e.currentTarget.name]: currentValue
        };
        console.log(updateFish);
        this.props.editFish(this.props.fishName, updateFish)
    };

    render() {
        return (
            <div className="fish-edit">
                <input type="text" onChange={this.handleChange} name="name" value={this.props.fish.name} />
                <input type="text" onChange={this.handleChange} name="price" value={this.props.fish.price} />
                <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
                <input type="text" onChange={this.handleChange} name="image" value={this.props.fish.image} />
            </div>
        )
    }
}