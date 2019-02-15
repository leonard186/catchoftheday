import React from 'react';
import AddFishForm from './AddFishForm';
import {EditFishForm} from "./EditFishForm";

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
                {Object.keys(this.props.fish).map(fish => <EditFishForm
                    editFish={this.props.editFish}
                    key={fish}
                    fishName={fish}
                    fish={this.props.fish[fish]}
                />)}
            </div>
        );
    }
}

export default Inventory