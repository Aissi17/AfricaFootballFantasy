import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { Dimensions } from 'react-native'

const sceenWidth = Dimensions.get('screen').width

const ViewPlayersButton = () => {
    const onPress = () => {
        console.warn('haha')
    }
    return (
        <Pressable
            onPress={onPress}
            style={styles.button}
        >
            <Text>View Players</Text>
        </Pressable>
    )
}

export default ViewPlayersButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'orange',
        margin: 20,
        padding: 10,
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 'auto',
        width: sceenWidth * 90 / 100
    }
})
