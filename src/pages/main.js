import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import Post from '../components/Post';
import api from '../services/api';

export default class Main extends Component {

    static navigationOptions = {
        title: "APOD"/*,
        headerRight: (
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 8}}>
                <Icon name='filter'
                    type='antdesign'
                      color='#FFF' />
            </View>
        )*/
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
        const today = new Date();
        const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
        const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        console.log("Today >>> ", this.formatDate(today));
        console.log("First day >>> ", this.formatDate(firstDay));
        console.log("Last day >>> ", this.formatDate(lastDay));        
        // var date = new Date();
        // var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        // var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);


        const response = await api.get(`/apod?api_key=IinX6zbjodFMrB5qlYKXIldbXiddc0YXMWIJUL2q&start_date=${this.formatDate(firstDay)}&end_date=${this.formatDate(today)}`);
        this.setState({pictures: response.data});
    }

    formatDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    }

    renderItem = ({ item }) => {
        return(
            <Post picture={item} navigation={this.props.navigation}/>
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
    },
    viewHeader: {
        flex: 1,
        flexDirection: 'row'
    },
    viewHeaderChild: {
        flex: 1
    }
});