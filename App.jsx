import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getDataAsync, getDataMethod} from './src/redux/Action';

const App = () => {
  const data = useSelector(state => state.data);
  console.log('🚀 ~ App ~ dataFromApi:', data);
  console.log('Hello');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataAsync());
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
