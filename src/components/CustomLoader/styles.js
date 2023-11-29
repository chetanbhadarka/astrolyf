import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    subContainer: {
        flexDirection: 'row',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#FFF'
    },
    loader: {
        marginRight: 10
    },
    onlyLoader: {

    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#836A64',
    }
})