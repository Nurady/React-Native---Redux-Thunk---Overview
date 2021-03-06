import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import PeopleList from '../components/PeopleList';
import {fetchPeople} from '../redux/actions/peopleActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class AppContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     people: [],
  //     errorMessage: '',
  //     isFetching: true,
  //   };
  // }

  // async fetchRandomPeopleAPI() {
  //   try {
  //     let response = await fetch('https://randomuser.me/api/?results=15');
  //     let json = await response.json();
  //     this.setState({people: json.results, isFetching: false});
  //   } catch (error) {
  //     this.setState({errorMessage: error});
  //   }
  // }

  componentDidMount() {
    // this.fetchRandomPeopleAPI();
    this.props.fetchPeople();
  }

  render() {
    console.log(this.props);
    // let content = <PeopleList people={this.state.people} />;
    // if (this.state.isFetching) {
    //   content = <ActivityIndicator size="large" />;
    // }
    let content = <PeopleList people={this.props.randomPeople.people} />;
    if (this.props.randomPeople.isFetching) {
      content = <ActivityIndicator size="large" />;
    }
    return <View style={styles.container}>{content}</View>;
  }
}

AppContainer.propTypes = {
  fetchPeople: PropTypes.func.isRequired,
  randomPeople: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    randomPeople: state,
  };
};

export default connect(mapStateToProps, {fetchPeople})(AppContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#093339',
  },
});
