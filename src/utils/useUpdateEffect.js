import React from 'react';

export function useUpdateEffect(callback, dependencies) {
  const isInitialMount = React.useRef(true);

  React.useEffect(() => {
    if (isInitialMount.current) {
      console.log('its true!!!');
      isInitialMount.current = false;
    } else {
      callback();
    }
  }, dependencies);
}
