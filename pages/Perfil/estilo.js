import { StyleSheet } from 'react-native';

export default StyleSheet.create({

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

    fotoPerfil :{
        marginBottom: 25,
        backgroundColor: "#fff",
        borderColor: "#C41FFE",
        borderRadius: 100,
        borderWidth: 10,
        height: 200,
        width: 200
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
        fontSize: 25,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "center"
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


    vitrine: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: "wrap"
    }

});