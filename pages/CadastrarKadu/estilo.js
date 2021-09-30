import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    alinharEsquerda:{
        alignItems: 'flex-start',
        display: "flex",
        flexDirection:"row",
        flexWrap: "wrap",
        flex: 1,
    },

    corpo: {
        margin: 0,
        padding: 10,
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
        width: 340,
        borderRadius: 10,
        paddingHorizontal:15,
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
    },


    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 15,
        margin: 15,
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
        borderRadius: 25,
        display: "flex",
        height: 300,
        justifyContent:"flex-end",
        margin: "1.25%",
        width: "47.5%"
    },
    infoPrincipal: {
        fontSize: 20,
        fontWeight: "bold"
    },
    
    infoSecundaria: {
        fontSize: 25,
        color: "#9B9B9B"
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

    subTitulo:{
        fontSize: 20,
        marginTop:20
    },
    
    tag: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 35,
        margin: 5,
        elevation: 3,
        backgroundColor: '#C083F0',
    },

    titulo: {
        fontWeight: "bold",
        fontSize: 40,
        textAlign: "center",
        marginBottom: 45
    },

    vitrine: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: "wrap"
    }

});