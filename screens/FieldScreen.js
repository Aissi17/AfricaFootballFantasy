import React from 'react'
import { StyleSheet } from 'react-native'

import Sceen from '../components/Sceen.js'
import Field from '../components/Field.js'




const FieldScreen = () => {
    return (
        <Sceen style={styles.container}>
            <Field />
        </Sceen>
    )
}

export default FieldScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})
