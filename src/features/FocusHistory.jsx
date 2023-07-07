import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors } from "../utils/colors";
import HistoryList from "../components/HistoryList";

function FocusHistory({ history }) {

    if(!history || !history.length) return <Text style={styles.title}>We haven't focused on anything yet</Text>

    const listing = () => {
      return history.map((item, idx) => {
        return <HistoryList title={item} key={idx} />;
      });
    };
  
    return (
      <>
        <Text style={styles.title}>Things we've focused on:</Text>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          {listing()}
        </ScrollView>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: colors.black,
      paddingVertical: 15, // Adjust the padding as needed
      paddingHorizontal: 10, // Add horizontal padding if desired
    },
    title: {
      color: colors.white,
      fontSize: 17,
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: 7,
    },
  });
  
  export default FocusHistory;
  