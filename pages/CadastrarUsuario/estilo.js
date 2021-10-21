import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    corpo: {
        margin: 0,
        padding: 0,
        backgroundColor: "#E5E5E5",
    },

    input: {
        height: 55,
        backgroundColor: "#fff",
        width: 340,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
    },

    botao: {
        backgroundColor: "#6732FF",
        marginTop: 55,
        marginBottom: 25,
        padding: 10,
        borderRadius: 15,
    },

    botao_texto: {
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "#fff",
    },

    titulo: {
        fontWeight: "bold",
        fontSize: 55,
        textAlign: "center",
        marginBottom: 25
    },
    erro: {
        color: "#ff421c",
        fontWeight: "bold",
        marginBottom: 0.5,
        marginTop: 0.5,
    },

    success: {
        color: 'green',
        fontWeight: "bold"
    },
    wrap: {
        margin: 0,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#E5E5E5",
        flex: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        fontSize: 35,
        marginBottom: 15,
        textAlign: 'center',
    },

});