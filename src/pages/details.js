import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Details extends Component {

    static navigationOptions = {
        title: "APOD - Detalhes"
    };

    constructor() {
        super();
        this.state = {
            picture: {}
        };
    }

    render() {
        return (
            <View>
                <Text>Detalhes</Text>
            </View>
        );
    }

}