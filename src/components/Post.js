import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'; 
import { Image, Avatar } from 'react-native-elements';
import ViewMoreText from 'react-native-view-more-text';

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            picture: this.props.picture,
            navigation: this.props.navigation
        }
    }

    render() {
        const { picture } = this.state;
        let textExplanation =
            <View style={{
                flexDirection: "row",
                marginTop: 10,
                marginLeft: 16,
                marginBottom: 16,
                marginRight: 16
            }}>
                <ViewMoreText
                    numberOfLines={2}
                    renderViewMore={this._renderTruncatedFooter}
                    renderViewLess={this._renderRevealedFooter}
                >
                    <Text>
                        {picture.explanation}
                    </Text>
                </ViewMoreText>
            </View>;
        if (picture['copyright']) {
            textExplanation =
                <View style={{
                    flexDirection: "row",
                    marginTop: 10,
                    marginLeft: 16,
                    marginBottom: 16,
                    marginRight: 16
                }}>
                    <ViewMoreText
                        numberOfLines={2}
                        renderViewMore={this._renderTruncatedFooter}
                        renderViewLess={this._renderRevealedFooter}
                    >
                        <Text style={{ fontWeight: "bold" }}>
                            {picture.copyright}
                        </Text>
                        <Text> </Text>
                        <Text>
                            {picture.explanation}
                        </Text>
                    </ViewMoreText>
                </View>;
        }
        /**
         * Gambis: formatar a data
         */
        let dateArr = picture.date.split("-");
        let date = dateArr[2] + "/" + dateArr[1] + "/" + dateArr[0];

        return(
            <View>
                <View style={styles.viewContainerItem}>
                    <Avatar rounded source={require('../images/space.png')} />
                    <View style={styles.viewProfile}>
                        <Text style={styles.textTitle}>
                            {picture.title}
                        </Text>
                        <Text style={styles.textDate}>
                            {date}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.goToDetails()}>
                    <Image
                        style={styles.imageFeed}
                        source={{ uri: picture.url }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </TouchableOpacity>
                {textExplanation}
            </View>
        );
    }

    _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{ color: "gray" }} onPress={handlePress}>
                mais
            </Text>
        );
    }

    _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{ color: "gray" }} onPress={handlePress}>
                menos
            </Text>
        );
    }

    goToDetails = () => {
        // this.props.navigation.navigate('Details');
        if(this.state.navigation) {
            this.state.navigation.navigate('Details', {picture: this.state.picture});
        }
    }

}

const styles = StyleSheet.create({
    viewContainerItem: {
        flexDirection: "row",
        marginLeft: 16,
        marginRight: 16,
        marginTop: 10,
        alignItems: "center"
    },
    viewProfile: {
        marginLeft: 8
    },
    textTitle: {
        fontWeight: "bold"
    },
    textDate: {
        fontSize: 12,
        color: "grey"
    },
    imageFeed: {
        marginTop: 10,
        height: 250
    },
    likeButton: {
        marginTop: 10,
        marginLeft: 16,
        width: 30,
        height: 30
    }
});