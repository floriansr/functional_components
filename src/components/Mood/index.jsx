import React, { useEffect, useState } from "react";

const Mood = () => {
  //State
  const [id, setId] = useState({
    firstname: "Jean-Jacques",
    surname: "Goldman",
  });
  const [mood, setMood] = useState("Sad");

  //componentDidMount
  useEffect(() => {
    setMood("Happy !");
    console.log("Component is Update");
  }, []);

  //componentDidMount
  useEffect(() => {
    setId({ firstname: "Jean-Michel", surname: "Goldfish" });
    console.log("Component is Update");
  }, []);

  //componentDidUpdate
  useEffect(() => {
    console.log(
      "Component is Update, because mood change OR the component is mounted"
    );
  }, [mood]);

  //componentDidUpdate
  useEffect(() => {
    console.log(
      "Component is Update, because id change OR the component is mounted"
    );
  }, [id]);

  //checkAllStatesOnlyOneUseEffect
  useEffect(() => {
    console.log(
      "Component is Update, because id or mood changed OR the component is mounted"
    );
  }, [id, mood]);

  //checkAllStates
  useEffect(() => {
    console.log(
      "Component is Update, because all state changed or the component is mounted"
    );
  });

  return (
    <div>
      <h1>
        FirstName: {id.firstname}, Surname: {id.surname}
      </h1>
      <p>Mood : {mood}</p>
    </div>
  );
};

export default Mood;
