import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const SCREEN_WIDTH = width;

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainBox: {

    },
    basicContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalContainer: {
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    },
    buttonView: {
        width: SCREEN_WIDTH,
        padding: 8,
        borderTopWidth: 0.5,
        borderTopColor: 'lightgrey',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    bottomPicker: {
        width: SCREEN_WIDTH,
    },
    flag: {
        fontSize: 28,
        height: 36,
        width: 30,
        borderColor: '#ffffff00',
        backgroundColor: '#ffffff00',
    },
    text: {
        height: 20,
        padding: 0,
        justifyContent: 'center',
    },
});
