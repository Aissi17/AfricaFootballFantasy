import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'


const Player = ({ position, player }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <FontAwesome5 name='tshirt' size={35} color={player ? '#d170db' : '#5c5c5cbb'} />
            <Text>{position}</Text>
        </View>
    )
}

export default Player

const styles = StyleSheet.create({})
