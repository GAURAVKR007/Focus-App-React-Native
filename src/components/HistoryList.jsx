import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import { colors } from '../utils/colors';

function HistoryList({ title }) {
  return (
    <View>
      <List.Item
        title={title}
        style={{
          backgroundColor: colors.darkBlue,
          marginTop: 8,
          marginBottom: 20,
        }}
        titleStyle={{
          color: colors.white,
          fontWeight: 'bold',
          fontSize: 17,
        }}
        left={(props) => <List.Icon {...props} icon="calendar" style={{marginLeft: 25}} color='white' />}
      />
    </View>
  );
}

export default HistoryList;
