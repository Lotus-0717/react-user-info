import { useState, useEffect } from "react";
import List from "./components/list";

export default function Home() {
  const [dataLimit, setDataLimit] = useState(0);
  const [data, setData] = useState([]);
  const [initialLoad, setInitialLoad] = useState(false); // Track initial load
  useEffect(() => {
    if (initialLoad) {
      fetchData(dataLimit, setData);
    } else {
      setInitialLoad(true); // Enable initial load for subsequent requests
    }
  }, [dataLimit, initialLoad]);
  
  async function fetchData(limit, setFetchedData) {
    const res = await fetch(`http://localhost:3000/newsData?_start=${limit}&_end=${limit + 5}`);
    const newData = await res.json();
    setFetchedData(prevData => [...prevData, ...newData]); // Append new data to the existing data
  }

  function loadMore() {
    setDataLimit(prevLimit => prevLimit + 5); // Increase the data limit to load the next batch
  }

  return (
    <section className="page">
      <h2>Home</h2>
      <hr></hr>
      <List listData={data}></List>
      <div className="flex justify-center">
        <button className="p-2 bg-[#ddd] hover:bg-[#aaa] hover:text-white transition rounded-xl text-center w-60" onClick={loadMore}>
          More
        </button>
      </div>
    </section>
  );
}
