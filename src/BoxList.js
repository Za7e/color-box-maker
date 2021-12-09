import { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuidv4 } from 'uuid';
import "./BoxList.css";

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };
        this.addBox = this.addBox.bind(this);
        this.renderBoxes = this.renderBoxes.bind(this);
    }
    addBox(styling) {
        let newBox = { ...styling, id: uuidv4() };
        this.setState(state => ({
            boxes: [...state.boxes, newBox]
        }));
    }
    renderBoxes() {
        return (
            this.state.boxes.map(box => (
                <Box styling={box} key={box.id} />
            ))
        )
    }
    render() {
        return (
            <div className='BoxList'>
                <NewBoxForm addBox={this.addBox} key="form" />
                {this.renderBoxes()}
            </div>
        )
    }
}


export default BoxList;