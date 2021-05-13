import React from 'react';

export const CursorContext = React.createContext();

export const CursorProvider = ({ children }) => {
  const [image, rawSetImage] = React.useState(null);

  const contextValue = React.useMemo(() => {
    function setImage(newValue) {
      rawSetImage(newValue);
    }

    return {
      image,
      setImage,
    };
  }, [image, rawSetImage]);

  return <CursorContext.Provider value={contextValue}>{children}</CursorContext.Provider>;
};
