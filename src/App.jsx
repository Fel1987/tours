const url = "https://www.course-api.com/react-tours-project";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import Error from "./Error";
import Tours from "./Tours";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setIsError(true);
        throw new Error(
          "Failed to load resources, check URL. Error: " + res.status
        );
      }

      const data = await res.json();
      setTours(data);
    } catch (error) {
      setIsError(true);
      throw new Error("Failed to load resources. Error: " + error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  console.log(tours);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
};
export default App;
