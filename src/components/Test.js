import {Component} from "react";

class Test extends Component {
    constructor(props) {
        console.log('constructor');
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
    componentDidMount() {
        console.log('componentDidMount');
    }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     if (prevState.a === 5){
    //         return 'SNAPSHOT!!!!!!!!!!!!!'
    //     }
    //     return null
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('STATE',prevState);
        console.log('PROPS', prevProps);
        console.log(snapshot);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
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
