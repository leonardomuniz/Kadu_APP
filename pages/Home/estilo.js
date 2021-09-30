import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    corpo: {
        margin: 0,
        padding: 5,
        backgroundColor: "#E5E5E5",
        flex: 1,

    },

    centralizar: {
        margin: 0,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    input: {
        height: 55,
        backgroundColor: "#fff",
        width: 300,
        borderRadius: 10,
        paddingHorizontal:15,
        fontSize: 20,
        marginBottom: 45,
        marginTop: 15,
        marginLeft: 20
    },


    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#6732FF',
    },
    
    botao_texto: {
        fontSize: 20,
        textTransform:"uppercase",
        fontWeight: "bold",
        color: "#fff",
    },



    kadu: {
        backgroundColor: "#5555",
        display: "flex",
        height: 300,
        justifyContent:"flex-end",
        margin: "1.25%",
        width: "47.5%"
    },

    kaduTexto:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        marginLeft: 10,
        textShadowColor: "gray",
        zIndex: 99,
    },  

    titulo: {
        fontSize: 25,
        fontWeight: "bold"
    },

    vitrine: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: "wrap"
    }

});