import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Customers from "./Customers";

export default function App() {
  const [customers, setCustomers] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  const fetchData = async () => {
    axios.get(url).then((response) => {
      setCustomers(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Table</h1>
      {<Customers customers={customers} />}
    </div>
  );
}
