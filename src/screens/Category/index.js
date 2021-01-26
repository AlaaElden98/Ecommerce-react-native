import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {fetchChildrenCategroies} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {ChildrenCategory} from '../../components/ChildrenCategory';
import styles from './styles';

function renderChildrenCategory({item}) {
  return <ChildrenCategory category={item} />;
}

const keyExtractor = (item) => item._id;

function renderChildrenCategories(childrenCategories) {
  return (
    <FlatList
      horizontal={true}
      data={childrenCategories}
      renderItem={renderChildrenCategory}
      keyExtractor={keyExtractor}
    />
  );
}

export function CategoryScreen(props) {
  const {category} = props.route.params;
  const dispatch = useDispatch();
  const childrenCategories = useSelector(
    (state) => state.home.childrenCategories[category._id] || [],
  );

  React.useEffect(() => {
    dispatch(fetchChildrenCategroies(category._id));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {renderChildrenCategories([category, ...childrenCategories])}
      <Text style={styles.headerText}>Products</Text>
    </SafeAreaView>
  );
}
