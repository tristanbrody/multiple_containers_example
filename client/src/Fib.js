import React, { useState, useEffect } from "react";
import axios from "axios";

const Fib = () => {
  const [values, setValues] = useState({});
  const [indices, setIndex] = useState([]);
  const [newIndex, setNewIndex] = useState();
  let [entries, setEntries] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("/api/values", {
      index: newIndex,
    });
    setNewIndex();
  };

  useEffect(() => {
    async function makeRequests() {
      await fetchValues();
      await fetchIndexes();
    }

    async function fetchValues() {
      const v = await axios.get("/api/values/current");
      setValues(v.data);
      const _entries = [];
      console.dir(v);
      for (let [key, value] of Object.entries(v.data)) {
        _entries.push(
          <div>
            For index {key} I calculated {value}
          </div>
        );
      }
      setEntries(_entries);
      console.dir(_entries);
    }

    async function fetchIndexes() {
      const seenIndexes = await axios.get("/api/values/all");
      setIndex(seenIndexes.data);
      console.log(seenIndexes.data);
    }
    makeRequests();
  }, [newIndex]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input value={newIndex} onChange={e => setNewIndex(e.target.value)} />
        <button>Submit</button>
      </form>
      <h5>Indexes I have seen: {indices.map(idx => `${idx["number"]}, `)}</h5>
      <h5>Calculated Values: {entries.map(e => e)}</h5>
    </div>
  );
};

export default Fib;
