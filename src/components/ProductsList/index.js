import React from 'react';
import {FlatList} from 'react-native';
import {Product} from '../Product';
import {EmptyList} from '../EmptyList';
function renderProduct({item}) {
  return <Product product={item} />;
}
const keyExtractor = (item) => item._id;

export function ProductsList(props) {
  const {isLoading} = props;
  const Loading = React.useCallback(
    () => (isLoading ? <ActivityIndicator /> : null),
    [isLoading],
  );

  const Empty = React.useCallback(() => (!isLoading ? <EmptyList /> : null), [
    isLoading,
  ]);

  return (
    <FlatList
      keyExtractor={keyExtractor}
      renderItem={renderProduct}
      numColumns={2}
      ListEmptyComponent={Empty}
      ListFooterComponent={Loading}
      {...props}
    />
  );
}
