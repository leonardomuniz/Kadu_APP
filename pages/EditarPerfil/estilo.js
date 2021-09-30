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


    infoPrincipal: {
        fontSize: 25,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "center"
    },

    input: {
        height: 55,
        backgroundColor: "#fff",
        width: 300,
        borderRadius: 10,
        paddingHorizontal:15,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 10,

    },

    subTitulo:{
        color: "#9B9B9B",
        fontSize: 20,
        textAlign:"center"
    },
    

    titulo: {
        fontWeight: "bold",
        fontSize: 25,
        marginLeft:20,
        marginTop: 20,
    },

});