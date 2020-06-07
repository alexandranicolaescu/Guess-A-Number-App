import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

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
            <BodyText style = {styles.resultText}> 
                I only needed
                <Text style = {styles.highlight}> {props.roundsNumber} </Text> 
                rounds to guess the number
                <Text style = {styles.highlight}> {props.userNumber}, </Text> 
                haha!
            </BodyText>
            </View>
            <MainButton onPress = {props.onRestart}>
            NEW GAME
            </MainButton>
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
        color:Colors.primary,
        fontFamily: 'open-sans-bold',
    
    },

    resultContainer: {
       marginHorizontal: 30,
       marginVertical: 15
    },

    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default GameOverScreen;