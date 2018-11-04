
import { connect } from "react-redux";
import Feed from '../components/Feed/Feed';
import { toggleToCart } from '../actions/actions';
import { bindActionCreators } from "redux";


//Tasks
// 1. first map to state
// 2. mapDispatch to props
// 3. then import connect
// 4. create feedcontainer with two parameter and then pass Feed
// 5. return default 
const mapStateToProps = state => ({
    cart:state
});

const mapDispatchToProps = {
    toggleAddToCart:toggleToCart
}
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(toggleToCart, dispatch);
//   }

const FeedContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);

export default FeedContainer;