import { StyleSheet } from 'react-native'
import colors from '../../../assets/theme/colors'

export default styles = StyleSheet.create({
    wrapper: {
        height: 42,
        borderRadius: 4,
        paddingHorizontal: 5,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    inputContainer: {
        paddingVertical: 12
    },

    textInput: {
        flex: 1,
        width: '100%'
    },

    error: {
        color: colors.danger,
        paddingTop: 4,
        fontSize: 12
    },
    loaderSection : {
        flexDirection: 'row'
    }
})