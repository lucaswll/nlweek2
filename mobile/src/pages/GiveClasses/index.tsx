import React from 'react'
import { View, ImageBackground, Text} from 'react-native'

import giveClassesBackgroundImage from '../../assets/images/give-classes-background.png'

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

function GiveClasses() {
    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.goBack()
    }
    
    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode='contain'
                source={giveClassesBackgroundImage}
                style={styles.content}
            >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar você precisa se cadastrar na plataforma WEB.
                </Text>
            </ImageBackground>

            <RectButton onPress={handleNavigateBack}style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses