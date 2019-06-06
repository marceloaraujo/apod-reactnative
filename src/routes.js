import { createStackNavigator } from 'react-navigation';

import  Main from './pages/main';
import Details from './pages/details';

export default createStackNavigator({
    Main: {screen: Main},
    Details: {screen: Details}
}, {
    initialRouteName: 'Main',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#283593"
        },
        headerTintColor: "#FFF"
    }
});
