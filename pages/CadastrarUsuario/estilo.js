import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    corpo: {
        margin: 0,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#E5E5E5",
        flex: 1,

    },

    input: {
        height: 55,
        backgroundColor: "#fff",
        width: 340,
        borderRadius: 10,
        paddingHorizontal:15,
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
    },

    botao: {
        backgroundColor: "#6732FF",
        marginTop:55,
        marginBottom:25,
        padding: 10,
        borderRadius: 15,
    },
    
    botao_texto: {
        fontSize: 20,
        textTransform:"uppercase",
        fontWeight: "bold",
        color: "#fff",
    },

    titulo: {
        fontWeight: "bold",
        fontSize: 55,
        textAlign: "center",
        marginBottom: 25
    },

});