import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:"center",
      // alignItems: 'center',
      backgroundColor: "red",
      // height: 20
      // marginTop: StatusBar.currentHeight || 0,
    },
    list: {
      flexDirection: "row",
      //height: 850,
      marginVertical: 8,
      marginHorizontal: 10,
    },
    card: {
      backgroundColor: "gray",
      marginVertical: 3,
      height: 200,
      borderRadius: 20,
      width: 160,
      shadowOpacity: 0.4,
      shadowColor: "gray",
      shadowOffset: {width: 0, height: 2},
      elevation: 5
    },
    modal: {
      backgroundColor: "white",
      margin: 0,
      alignItems: undefined,
      justifyContent: undefined,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: undefined,
    //   margin: 0,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      flex: 1,
      borderRadius: 2,
      padding: 10
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
      borderRadius: 5,
    },
    buttonClose: {
      backgroundColor: "#9932cc",
      borderRadius: 5,
    },
    textStyle: {
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalHeadText: {
      marginBottom: 15,
      fontWeight: "700",
      fontSize: 24,
      textAlign: "center"
    },
    modalBodyText: {
      marginBottom: 15,
      fontWeight: "500",
      fontSize: 16,
      textAlign: "left",
    },
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    },
   separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
   },
   fixToText: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  });
  
