import { connect } from 'react-redux';

import { newName, showModal } from './actions';
import App from './App';

const mapStateToProps = (state) => {
  return {
    name: state.name,
    show: state.showModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    nameChange: (name) => {
      dispatch(showModal(false));
      dispatch(newName(name));
    },
    modalOpen: () => dispatch(showModal(true))
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
