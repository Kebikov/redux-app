import { connect } from "react-redux";
import * as actions from '../actions';

const Counter = ({counter, snth, inc, dec, rnd}) => {
    return(
        <div className="jumbotron">
            <h1>{counter}{snth}</h1>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.value,
        snth: state.foo
    }
}

export default connect(mapStateToProps, actions)(Counter);



