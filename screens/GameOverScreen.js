import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
    return (
        <View style = {styles.screen} >
            <BodyText> The Game is Over! </BodyText>
            <View style = {styles.imageContainer} >
                <Image 
                    fadeDuration = {300}
                    //source = {require('../assets/success.png')}           //local image
                    source = {{uri: 'https://images.wallpaperscraft.com/image/mountains_night_northern_lights_148100_1440x900.jpg' }}             //web image
                    style = {styles.image} 
                    resizeMode = "cover"
                />
            </View>
            <BodyText> Number of Rounds: {props.roundsNumber} </BodyText>
            <BodyText> Number was: {props.userNumber} </BodyText>
            <Button title = "NEW GAME" onPress = {props.onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        width: '100%',
        height: '100%',
    },

    imageContainer: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    }
});

export default GameOverScreen;