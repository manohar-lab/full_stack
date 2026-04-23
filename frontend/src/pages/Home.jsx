import { useEffect, useState } from "react";
import { getHealth } from "../services/api";

function Home() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    async function checkApi() {
      try {
        const data = await getHealth();
        setStatus(data.message);
      } catch (error) {
        setStatus("API not reachable");
      }
    }

    checkApi();
  }, []);

  return (
    <section>
      <h2>Home Page</h2>
      <p>Backend status: {status}</p>
    </section>
  );
}

export default Home;
