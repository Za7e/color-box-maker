import { Component } from "react";
import "./Box.css";

class Box extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove() {
        this.props.removeBox(this.props.styling.id);
    }

    render() {
        const styling = {
            backgroundColor: this.props.styling.color,
            width: `${this.props.styling.width}px`,
            height: `${this.props.styling.height}px`,
        }
        return (
            <div className="Box">
                <div style={styling}></div>
                <button onClick={this.handleRemove}>X</button>
            </div>
        )
    }
}

export default Box