import { Component } from "react";
import "./NewBoxForm.css";

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "",
            width: "",
            height: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addBox(this.state);
        this.setState({ color: "", width: "", height: "" });
    }
    render() {
        return (
            <form className="NewBoxForm" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="color">Color:   </label>
                    <input type="text" id="color" name="color" value={this.state.color} onChange={this.handleChange}></input>
                </div>
                <div>
                    <label htmlFor="width">Width: </label>
                    <input type="text" id="width" name="width" value={this.state.width} onChange={this.handleChange}></input>
                </div>
                <div>
                    <label htmlFor="height">Height:</label>
                    <input type="text" id="height" name="height" value={this.state.height} onChange={this.handleChange}></input>
                </div>
                <button>Create new box!</button>
            </form>
        )
    }
}

export default NewBoxForm;