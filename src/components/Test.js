import {Component} from "react";

class Test extends Component {
    constructor(props) {
        super(props);
        // this.inc = this.inc.bind(this)
        this.state = {
            a: 0,
            b: 25
        }
    }

    inc() {
        this.setState(prev => ({a: prev.a + 1}))
    }

    render() {
        return (

            <div>
                {this.props.sss}
                <div>Hello from class component</div>
                <div>A:{this.state.a}</div>
                <button onClick={this.inc.bind(this)}>inc</button>
            </div>

        )
    }
}

export {Test}
