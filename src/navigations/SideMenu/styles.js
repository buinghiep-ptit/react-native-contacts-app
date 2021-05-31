import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    logoImage: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 50
    },
    item: {
        flexDirection: 'row',
        // justifyContent: 'center', chieu ngang
        alignItems: 'center'
    },

    itemText: {
        fontSize: 17,
        paddingVertical: 7,
        paddingLeft: 20
    }
})