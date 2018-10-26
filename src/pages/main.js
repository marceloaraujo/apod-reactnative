import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Post from '../components/Post';
import api from '../services/api';

export default class Main extends Component {

    static navigationOptions = {
        title: "APOD"
    };

    constructor(){
        super();
        this.state = {
            pictures: []
        }
    }

    async componentDidMount(){
        this.loadPictures();
    }

    loadPictures = async () => {
        const response = await api.get(`/apod?api_key=IinX6zbjodFMrB5qlYKXIldbXiddc0YXMWIJUL2q&start_date=2018-10-01&end_date=2018-10-06`);
        this.setState({pictures: response.data});
    }

    renderItem = ({ item }) => {
        return(
            <Post picture={item} />
        );
    }

    render() {
        return (
            <View styles={styles.container}>
                <FlatList 
                    contentContainerStyle={{backgroundColor: "#FFF"}}
                    data={this.state.pictures}
                    keyExtractor={item => item.date}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    }
});