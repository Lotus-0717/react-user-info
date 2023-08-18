import { useState, useEffect } from "react";
import List from "./components/list";

async function fetchData(setData) {
  const res = await fetch(`http://localhost:3000/newsData??_start=0&_end=5`);
  const data = await res.json();
  setData(data)
}

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData(setData);
  }, []);
  

  function loadMore() {

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

