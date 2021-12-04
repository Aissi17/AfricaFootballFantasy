import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'

import field from "../assets/images/field.jpg"
import Player from './Player'


const players = {
    FWD: [null, null, null],
    MID: [null, null, null],
    DEF: [null, null, null, null],
    GK: [null],
}

const Field = () => {
    return (
        <ImageBackground
            resizeMode='contain'
            source={field}
            style={styles.field}
        >
            {Object.keys(players).map((position, index_position) =>
                <View
                    key={`${index_position}+${position}`}
                    style={styles.positionRow}
                >
                    {players[position].map((player, index_player) => (
                        <Player key={`${index_player}+${position}`} position={position} player={player} />
                    ))}
                </View>)
            }
        </ImageBackground>
    )
}

export default Field

const styles = StyleSheet.create({
    field: {
        width: "100%",
        aspectRatio: 2 / 3,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    positionRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    }
})
