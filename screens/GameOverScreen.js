import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style = {styles.screen} >
            <TitleText> The Game is Over! </TitleText>
            <View style = {styles.imageContainer} >
                <Image 
                    fadeDuration = {300}
                    source = {require('../assets/success.png')}           //local image
                    //source = {{uri: 'https://images.wallpaperscraft.com/image/mountains_night_northern_lights_148100_1440x900.jpg' }}             //web image
                    style = {styles.image} 
                    resizeMode = "cover"
                />
            </View>
            <View style = {styles.resultContainer}>
            <BodyText> 
                Your phone needed 
                <Text style = {styles.highlight}> {props.roundsNumber} </Text> 
                rounds to guess the number 
                <Text style = {styles.highlight}> {props.userNumber} </Text> 
            </BodyText>
            </View>
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
    },

    highlight: {
        color:Colors.primary
    },

    resultContainer: {
       width: '80%',
    }
});

export default GameOverScreen;