import { StyleSheet } from "react-native";

export default StyleSheet.create({
    input: {
        width: '66%',
        height: 'auto',
        color: '#fff',
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#79b6f2',
        borderWidth: 1,
        borderRadius: 20,
        minHeight: 50,
        textAlignVertical: 'center'
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
        backgroundColor: '#282C34',
        marginLeft: '2%',
        borderWidth: 1,
        height: 50

    },
    textButton: {
        color: '#fff'
    },
    image: {
        width: '60%',
        height: '60%',
    },
    first: {
        borderColor: '#fc929e'
    },
    second: {
        borderColor: '#fac863'
    },
    shadow: {
        borderColor: '#fc5a03',
        shadowColor: "#fc5a03",
        shadowOffset: {
            width: 15,
            height: 15,
        },
        shadowRadius: 3,
        elevation: 20,
    }
})