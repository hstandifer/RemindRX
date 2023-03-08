import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function AccountScreeen() {
    return (
        <View style={styles.rootContainer}>
            <Text>Account Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    }
})