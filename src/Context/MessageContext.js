import React, { useState, createContext } from "react";

export const MessageContext = createContext(null);

export const MessageProvider = (props) => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <MessageContext.Provider value={{ showMessage, setShowMessage }}>
      {props.children}
    </MessageContext.Provider>
  );
};
