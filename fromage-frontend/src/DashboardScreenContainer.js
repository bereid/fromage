import { connect } from 'react-redux';
import DashboardScreen from './DashboardScreen';
import getAllWS from './config/getallWS';

const mapStateToProps = state => ({
  workshops: state.deliverReducer.workshops
});

const mapDispatchToProps = dispatch => ({
  getWorkshops: () => getAllWS(dispatch)
});

const DashboardScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardScreen);

export default DashboardScreenContainer;
