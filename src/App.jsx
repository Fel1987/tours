const url = "https://www.course-api.com/react-tours-project";
import { useState, useEffect } from "react";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setIsError(true);
        throw new Error(
          "Failed to load resources, check URL. Error: " + res.status
        );
      }

      const data = await res.json();

      console.log(data);
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

  return <h2>Tours Starter</h2>;
};
export default App;
