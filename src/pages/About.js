import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUser } from "../features/getUserSlice";

function About() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => {
    // console.log("--state///", state);
    return state.userlist;
  });
console.log('err--',error)
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error != null) {
    return <h3>{error}</h3>;
  }

  return (
    <div>
      <h3>---About--- </h3>
      <div style={{
      
        // height: 'auto',
        maxHeight: '100px',
        overflowY: 'auto',
      }}>
        <h2> testing---------------------------------</h2>
      </div>
      {users?.map((ele, ind) => {
        return <h2>{ele.name}</h2>;
      })}
    </div>
  );
}

export default About;
