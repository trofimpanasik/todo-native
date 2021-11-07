import { StyleSheet } from "react-native";

export default StyleSheet.create({
    input: {
        width: '83%',
        height: 'auto',
        color: '#fff',
        fontSize: 20,
        paddingHorizontal: 20,
        borderColor: '#79b6f2',
        borderWidth: 1,
        borderRadius: 20
    },
    flex: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    button: {
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',
        marginLeft: '2%',
        borderColor: '#79b6f2',
        borderWidth: 1,
        height: 50

    },
    textButton: {
        color: '#fff'
    },
    image: {
        width: '40%',
        height: '40%'
    }
})