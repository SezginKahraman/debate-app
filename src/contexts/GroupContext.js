// src/contexts/GroupContext.js

import React, { createContext, useState } from 'react';

export const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(null);

  const createGroup = (groupName) => {
    setGroups([...groups, { name: groupName, messages: [] }]);
  };

  const sendMessage = (groupName, message) => {
    setGroups(groups.map(group =>
      group.name === groupName
        ? { ...group, messages: [...group.messages, message] }
        : group
    ));
  };

  return (
    <GroupContext.Provider value={{ groups, currentGroup, createGroup, sendMessage, setCurrentGroup }}>
      {children}
    </GroupContext.Provider>
  );
};