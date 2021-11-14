import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    buttonSelect: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 15,
        margin: 15,
        elevation: 3,
        backgroundColor: '#6732FF',
    },

    buttonText: {
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "#fff",
    },

    errorMessage: {
        color: "#ff421c",
        fontWeight: "bold",
        marginBottom: 4,
        marginTop: 1,
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

    kadu: {
        backgroundColor: "#5555",
        borderRadius: 5,
        display: "flex",
        height: 300,
        justifyContent:"flex-end",
        margin: "1.25%",
        width: "47.5%"
    },

    kaduText:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        marginLeft: 10,
        textShadowColor: "gray",
        position: 'absolute',
        zIndex: 99,
    }, 

    logo: {
        marginBottom: 25,
        backgroundColor: "#C41FFE",
        borderRadius: 5,
        height: 202,
        width: 235
    },

    pictureProfile: {
        marginBottom: 25,
        backgroundColor: "#fff",
        borderColor: "#C41FFE",
        borderRadius: 100,
        borderWidth: 10,
        height: 200,
        width: 200
    },

    scrollBody: {
        margin: 0,
        padding: 0,
        backgroundColor: "#E5E5E5",
        flex: 1,
    },

    showCase: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: "wrap"
    },

    successMessage: {
        color: 'green',
        fontWeight: "bold"
    },

    subTitle : {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 15,
        marginLeft: 10,
        marginTop: 30,
    },
    
    staticBody: {
        margin: 0,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#E5E5E5",
        flex: 1,
    },

    tag: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 35,
        margin: 2.5,
        elevation: 3,
        backgroundColor: '#C083F0',
    },

    title: {
        fontWeight: "bold",
        fontSize: 55,
        textAlign: "center",
        marginBottom: 25
    },

    userIcon: {
        backgroundColor: "#C41FFE",
        borderRadius: 25,
        height: 40,
        margin: 10,
        marginTop: 10,
        width:40,
    }
    
});