import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'; 
import ViewMoreText from 'react-native-view-more-text';

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            picture: this.props.picture
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
                    <View style={styles.viewProfile}>
                        <Text style={styles.textTitle}>
                            {picture.title}
                        </Text>
                        <Text style={styles.textDate}>
                            {date}
                        </Text>
                    </View>
                </View>
                <Image
                    style={styles.imageFeed}
                    source={{ uri: picture.url }}
                />
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