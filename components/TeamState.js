import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Dimensions } from 'react-native'

const sceenWidth = Dimensions.get('screen').width

const TeamState = () => {
    return (
        <View style={styles.container} >

            <View style={styles.valueContainer}>
                <Text style={styles.label}>Players</Text>
                <Text style={styles.value}>0 / 15</Text>
            </View>

            <View style={styles.valueContainer}>
                <Text style={styles.label}>Remaining</Text>
                <Text style={styles.value}>$100m</Text>
            </View>

        </View>
    )
}

export default TeamState

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: sceenWidth * 0.9,
        borderWidth: 4,
        borderColor: '#38abd1',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10
    },
    valueContainer: {
        marginRight: 25
    },
    label: {
        color: '#333'
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
