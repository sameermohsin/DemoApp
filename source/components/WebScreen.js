import AnimatedLottieView from 'lottie-react-native';
import React, {Component} from 'react';
import {View, ActivityIndicator, BackHandler, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import {Color} from '../color/Color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class WebScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  _onNavigationStateChange(navState) {
    // console.log(navState);
    this.setState({
      canGoBack: navState.canGoBack,
    });
  }

  handleBackButton = () => {
    // console.log(this.state);
    if (this.state.canGoBack === true) {
      this.webView.goBack();
      return true;
    } else {
      return false;
    }
  };

  render() {
    const {link, animate} = this.props;
    // console.log(link);
    return (
      <View style={{height: HEIGHT * 0.92, width: WIDTH}}>
        <WebView
          source={{uri: link}}
          javaScriptEnabled={true}
          allowsFullscreenVideo={true}
          userAgent="Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
          originWhitelist={['*']}
          allowsBackForwardNavigationGestures={true}
          onLoadStart={() => this.setState({visible: true})}
          onLoadEnd={() => this.setState({visible: false})}
          enableApplePay={true}
          startInLoadingState={true}
          cacheEnabled={true}
          allowFileAccess={true}
          domStorageEnabled={true}
          pullToRefreshEnabled={true}
          ref={webView => (this.webView = webView)}
          onNavigationStateChange={this._onNavigationStateChange.bind(this)}
        />
        {this.state.visible ? (
          // <View
          //   style={{
          //     flex: 1,
          //     position: 'absolute',
          //     marginTop: 'auto',
          //     marginBottom: 'auto',
          //     marginLeft: 'auto',
          //     marginRight: 'auto',
          //     top: 0,
          //     bottom: 0,
          //     left: 0,
          //     right: 0,
          //     justifyContent: 'center',
          //     alignItems: 'center',
          //     backgroundColor: Color.white,
          //   }}>
          //   <ActivityIndicator
          //     size={'large'}
          //     color={Color.primaryColor}
          //     style={{height: 40, width: 40, borderRadius: 50}}
          //   />
          // </View>
          <View
            style={{
              flex: 1,
              position: 'absolute',
              marginTop: 'auto',
              marginBottom: 'auto',
              marginLeft: 'auto',
              marginRight: 'auto',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Color.white,
            }}>
            {animate ? (
              <AnimatedLottieView
                source={require('../assets/AAA.json')}
                autoPlay
                loop
                speed={4}
              />
            ) : (
              <ActivityIndicator
                size={'large'}
                color={Color.primaryColor}
                style={{height: 40, width: 40, borderRadius: 50}}
              />
            )}
          </View>
        ) : null}
      </View>
    );
  }
}

export default WebScreen;
