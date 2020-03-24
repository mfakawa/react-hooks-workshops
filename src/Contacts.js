import React, { useState, useEffect, useReducer } from "react";
import { User } from "./User";
import { checkAllFields } from "./CheckAllFields";
import { reducer } from "./Reducer";

export const Contacts = () => {
  const [{ users }, dispatch] = useReducer(reducer, { users: [] });
  const [keyWord, setKeyWord] = useState("");
  const [error, setError] = useState("");
  const [incName, setIncName] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(data => dispatch({ type: "GET_DATA", users: data.results }))
      .catch(error => setError(error.message));
  }, []);

  const handleSearchUsers = e => {
    e.preventDefault();
    let results = users.map(user => checkAllFields(user, keyWord));
    results = results.filter(result => result !== undefined);
    dispatch({ type: "SEARCH_USER", searchResults: results });
    setKeyWord("");
  };

  const handleSortName = () => {
    dispatch({ type: incName ? "SORT_USERS_INC" : "SORT_USERS_DEC" });
    setIncName(!incName);
  };

  const handleAddUsers = () => {
    fetch("https://randomuser.me/api/?results=3")
      .then(response => response.json())
      .then(data => {
        return dispatch({ type: "ADD_USERS", newUsers: data.results });
      });
  };

  return (
    <main>
      <form onSubmit={handleSearchUsers}>
        <input
          value={keyWord}
          placeholder="name..."
          onChange={e => {
            return setKeyWord(e.target.value);
          }}
        />
      </form>
      <button onClick={handleSortName}>&uarr;&darr;</button>
      {error ? (
        <div>Error: {error} :(</div>
      ) : (
        <div>
          {users.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <div>
              {users.map(contact => {
                return <User contact={contact} key={contact.login.uuid} />;
              })}
            </div>
          )}
        </div>
      )}
      <button type="button" onClick={handleAddUsers}>
        3 users more
      </button>
    </main>
  );
};
