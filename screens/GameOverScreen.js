import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    Image, 
    Dimensions,
    ScrollView,
    SafeAreaView 
} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {

    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        };

        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

    return (
        
            <ScrollView>
                <View style = {styles.screen} >
                    <TitleText> The Game is Over! </TitleText>
                    <View style = {{...styles.imageContainer, ...{
                        height: availableDeviceWidth * 0.7,
                        width: availableDeviceWidth * 0.7,
                        borderRadius: (availableDeviceWidth * 0.7) / 2,
                        marginVertical: availableDeviceHeight / 30
                    }}} >
                        <Image 
                            fadeDuration = {300}
                            source = {require('../assets/success.png')}           //local image
                            //source = {{uri: 'https://images.wallpaperscraft.com/image/mountains_night_northern_lights_148100_1440x900.jpg' }}             //web image
                            style = {styles.image} 
                            resizeMode = "cover"
                        />
                    </View>
                    <View style = {{...styles.resultContainer, ...{
                        marginVertical: availableDeviceHeight / 60
                    }}}>
                    <BodyText style = {{...styles.resultText, ...{
                        fontSize: availableDeviceHeight < 400 ? 16 : 20
                    }}}> 
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
            </ScrollView>
        
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },

    image: {
        width: '100%',
        height: '100%',
    },

    imageContainer: {
        
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden'
        
    },

    highlight: {
        color:Colors.primary,
        fontFamily: 'open-sans-bold',
    
    },

    resultContainer: {
       marginHorizontal: 30
       
    },

    resultText: {
        textAlign: 'center'
        
    }
});

export default GameOverScreen;