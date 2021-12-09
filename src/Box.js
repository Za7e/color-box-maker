import { Component } from "react";

class Box extends Component {
    render() {
        const styling = {
            backgroundColor: this.props.styling.color,
            width: `${this.props.styling.width}px`,
            height: `${this.props.styling.height}px`,
        }
        return (
            <div style={styling}></div>
        )
    }
}

export default Box