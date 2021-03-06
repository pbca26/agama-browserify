import React from 'react';
import { connect } from 'react-redux';
import WalletsNativeInfoRender from './walletsInfo.render';
import { toggleClaimInterestModal } from '../../../actions/actionCreators';
import Store from '../../../store';

class WalletsInfo extends React.Component {
  constructor() {
    super();
    this.openClaimInterestModal = this.openClaimInterestModal.bind(this);
    this.displayClaimInterestUI = this.displayClaimInterestUI.bind(this);
  }

  openClaimInterestModal() {
    Store.dispatch(toggleClaimInterestModal(true));
  }

  displayClaimInterestUI() {
    const _activeCoin = this.props.ActiveCoin;

    if (_activeCoin &&
        _activeCoin.balance &&
        _activeCoin.balance.transparent &&
        _activeCoin.balance.transparent > 0) {
      return true;
    }
  }

  render() {
    if (this.props &&
        this.props.ActiveCoin &&
        this.props.Dashboard.electrumCoins &&
        this.props.ActiveCoin.activeSection === 'settings') {
      return WalletsNativeInfoRender.call(this);
    }

    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    ActiveCoin: state.ActiveCoin,
    Dashboard: state.Dashboard,
  };
};

export default connect(mapStateToProps)(WalletsInfo);