import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Post from '../components/Post';

export default class Details extends Component {

    // static navigationOptions = {
    //     title: `${state.picture.title}`
    // };

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('picture', 'APOD').title/*,
            headerStyle: {
                backgroundColor: 'transparent',
                position: 'absolute',
                height: 50,
                top: 0,
                left: 0,
                right: 0,
                headerMode: 'float'
            }*/
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            picture: {}
        };
    }



    render() {
        const { navigation } = this.props;
        const picture = navigation.getParam('picture', null);
        console.log(picture);
        return (
            <View style={styles.container}>
                <Post picture={picture} />                
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1        
    },
    textExplanation: {
        fontSize: 16
    },
    image: {
        height: 250
    }
})