import React from 'react';

class StorePicker extends React.Component {
    goToStore() {
        alert('it works')
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store name" />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;

