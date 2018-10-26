import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

import ReadMore from 'react-native-read-more-text';

export default class Main extends Component {

    static navigationOptions = {
        title: "APOD"
    };

    state = {
        pictures: [
            {
                "date": "2018-10-01",
                "explanation": "A new chapter in space flight began in 1950 with the launch of the first rocket from Cape Canaveral, Florida: the Bumper V-2.  Featured here, the Bumper V-2 was an ambitious two-stage rocket program that topped a V-2 missile base with a WAC Corporal rocket.  The upper stage was able to reach then-record altitudes of almost 400 kilometers, about the height of the modern International Space Station.  Launched under the direction of the General Electric Company, the Bumper V-2 was used primarily for testing rocket systems and for research on the upper atmosphere.  Bumper V-2 rockets carried small payloads that allowed them to measure attributes including air temperature and cosmic ray impacts.  Seven years later, the Soviet Union launched Sputnik I and Sputnik II, the first satellites into Earth orbit.  In response in 1958, 60 years ago today, the USA created NASA.    Anniversary: NASA: 60 Years and Counting",
                "hdurl": "https://apod.nasa.gov/apod/image/1810/bumper2_nasa_1500.jpg",
                "media_type": "image",
                "service_version": "v1",
                "title": "The First Rocket Launch from Cape Canaveral",
                "url": "https://apod.nasa.gov/apod/image/1810/bumper2_nasa_960.jpg"
            },
            {
                "copyright": "John Entwistle",
                "date": "2018-10-02",
                "explanation": "Yes, but can your rainbow do this?  After the remnants of Hurricane Florence passed over the Jersey Shore, New Jersey, USA last month, the Sun came out in one direction but something quite unusual appeared in the opposite direction: a hall of rainbows.  Over the course of a next half hour, to the delight of the photographer and his daughter, vibrant supernumerary rainbows faded in and out, with at least five captured in this featured single shot.  Supernumerary rainbows only form when falling water droplets are all nearly the same size and typically less than a millimeter across.  Then, sunlight will not only reflect from inside the raindrops, but interfere, a wave phenomenon similar to ripples on a pond when a stone is thrown in. In fact, supernumerary rainbows can only be explained with waves, and their noted existence in the early 1800s was considered early evidence of light's wave nature.   Follow APOD on: Facebook,  Google Plus,  Instagram, or Twitter",
                "hdurl": "https://apod.nasa.gov/apod/image/1810/SupernumeraryRainbows_Entwistle_1362.jpg",
                "media_type": "image",
                "service_version": "v1",
                "title": "Supernumerary Rainbows over New Jersey",
                "url": "https://apod.nasa.gov/apod/image/1810/SupernumeraryRainbows_Entwistle_960.jpg"
            },
            {
                "date": "2018-10-03",
                "explanation": "Jewels don't shine this bright -- only stars do. And almost every spot in this glittering jewel-box of an image from the Hubble Space Telescope is a star. Now some stars are more red than our Sun, and some more blue -- but all of them are much farther away.  Although it takes light about 8 minutes to reach Earth from the Sun, NGC 1898 is so far away that it takes light about 160,000 years to get here. This huge ball of stars, NGC 1898, is called a globular cluster and resides in the central bar of the Large Magellanic Cloud (LMC) -- a satellite galaxy of our large Milky Way Galaxy. The featured multi-colored image includes light from the infrared to the ultraviolet and was taken to help determine if the stars of NGC 1898 all formed at the same time, or at different times. There are increasing indications that most globular clusters formed stars in stages, and that, in particular, stars from NGC 1898 formed shortly after ancient encounters with the Small Magellanic Cloud (SMC) and our Milky Way Galaxy.   Space Telescope Live: Where is Hubble looking right now?",
                "hdurl": "https://apod.nasa.gov/apod/image/1810/NGC1898_Hubble_2913.jpg",
                "media_type": "image",
                "service_version": "v1",
                "title": "NGC 1898: Globular Cluster in the Large Magellanic Cloud",
                "url": "https://apod.nasa.gov/apod/image/1810/NGC1898_Hubble_960.jpg"
            },
            {
                "date": "2018-10-04",
                "explanation": "On Mars dust storms can't actually blow spacecraft over, but they can blot out the Sun. Over three months ago a planet-wide dust storm caused a severe lack of sunlight for the Mars rover Opportunity at its location near the west rim of Endeavour crater. The lack of sunlight sent the solar-powered Opportunity into hibernation and for over 115 sols controllers have not received any communication from the rover. The dust is clearing as the storm subsides though. On September 20th, when this image was taken by the Mars Reconnaissance Orbiter's HiRISE camera, about 25 percent of the sunlight was reaching the surface again. The white box marks a 47-meter-wide (154-foot-wide) area centered on a blip identified as the silent-for-now Opportunity rover.",
                "hdurl": "https://apod.nasa.gov/apod/image/1810/PIA22549_fig1.jpg",
                "media_type": "image",
                "service_version": "v1",
                "title": "Opportunity After the Storm",
                "url": "https://apod.nasa.gov/apod/image/1810/PIA22549_fig1s.jpg"
            },
            {
                "copyright": "Radu-Mihai Anghel",
                "date": "2018-10-05",
                "explanation": "That's not a young crescent Moon poised above the hills along the western horizon at sunset. It's Venus in a crescent phase. About 54 million kilometers away and less than 20 percent illuminated, it was captured by telescope and camera on September 30 near Bacau, Romania. The bright celestial beacon is now languishing in the evening twilight, its days as the Evening Star in 2018 coming to a close. But it also grows larger in apparent size and becomes an ever thinner crescent in telescopic views. Heading toward an inferior conjunction (non-judgmental), the inner planet will be positioned between Earth and Sun on October 26 and lost from view in the solar glare. At month's end a crescent Venus will reappear in the east though, rising just before the Sun as the brilliant Morning Star.",
                "hdurl": "https://apod.nasa.gov/apod/image/1810/Venus_Radu-Mihai_MG_3429.jpg",
                "media_type": "image",
                "service_version": "v1",
                "title": "The Last Days of Venus as the Evening Star",
                "url": "https://apod.nasa.gov/apod/image/1810/Venus_Radu-Mihai_MG_3429_1067px.jpg"
            },
            {
                "copyright": "Mia Stalnacke",
                "date": "2018-10-06",
                "explanation": "What does an aurora look like to a frog? \"Awesome!\" is the likely answer, suggested by this imaginative snapshot taken on October 3rd from Kiruna, Sweden. Frequented by apparitions of the northern lights, Kiruna is located in Lapland north of the Arctic Circle, and often under the auroral oval surrounding planet Earth's geomagnetic north pole. To create a tantalizing view from a frog's perspective the photographer turned on the flashlight on her phone and placed it on the ground facing down, resting her camera's lens on top. The \"diamonds\" in the foreground are icy pebbles right in front of the lens, lit up by the flashlight. Reflecting the shimmering northern lights, the \"lake\" is a frozen puddle on the ground. Of course, in the distance is the Bengt Hultqvist Observatory.",
                "hdurl": "https://apod.nasa.gov/apod/image/1810/AuroraFrogStalnacke3072.jpg",
                "media_type": "image",
                "service_version": "v1",
                "title": "Aurora: The Frog's View",
                "url": "https://apod.nasa.gov/apod/image/1810/AuroraFrogStalnacke1024.jpg"
            }
        ]
    };

    renderItem = ({ item }) => {
        let textExplanation = 
            <View style={{
                flexDirection: "row",
                marginTop: 10,
                marginLeft: 16,
                marginBottom: 16,
                marginRight: 16
            }}>
                <ReadMore
                    numberOfLines={2}
                    renderTruncatedFooter={this._renderTruncatedFooter}
                    renderRevealedFooter={this._renderRevealedFooter}
                >
                    <Text>
                        {item.explanation}
                    </Text>
                </ReadMore>
            </View>;
        if(item['copyright']) {
            textExplanation = 
                <View style={{
                    flexDirection: "row", 
                    marginTop: 10,
                    marginLeft: 16,
                    marginBottom: 16,
                    marginRight: 16}}>
                    <ReadMore
                        numberOfLines={2}
                        renderTruncatedFooter={this._renderTruncatedFooter}
                        renderRevealedFooter={this._renderRevealedFooter}
                    >
                        <Text style={{ fontWeight: "bold" }}>
                            {item.copyright}
                        </Text>
                        <Text> </Text>
                        <Text>
                            {item.explanation}
                        </Text>
                    </ReadMore>
                </View>;
        }
        /**
         * Gambis: formatar a data
         */
        let dateArr = item.date.split("-");
        let date = dateArr[2] + "/" + dateArr[1] + "/" + dateArr[0];
        return (
            <View>
                <View style={styles.viewContainerItem}>
                    <View style={styles.viewProfile}>
                        <Text style={styles.textTitle}>
                            {item.title}
                        </Text>
                        <Text style={styles.textDate}>
                            {date}
                        </Text>
                    </View>
                </View>
                <Image
                    style={styles.imageFeed}
                    source={{ uri: item.url }}
                />
                {textExplanation}
            </View>
        )
    }

    _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{color: "gray"}} onPress={handlePress}>
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

    render() {
        return (
            <View styles={styles.container}>
                <FlatList 
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
    },
    viewContainerItem: {
        flexDirection: "row",
        marginLeft: 16,
        marginRight: 16,
        marginTop: 10,
        alignItems: "center"
    },
    viewProfile: {
    },
    textDate: {
        fontSize: 12,
        color: "grey"
    },
    imageProfile: {
        width: 51,
        height: 51,
        borderRadius: 50,
        marginRight: 10
    },
    textTitle: {
        fontWeight: "bold"
    },
    imageFeed: {
        marginTop: 10,
        height: 250
    },
    textExplanation: {
        marginTop: 10,
        marginLeft: 16,
        marginRight: 16
    }
});