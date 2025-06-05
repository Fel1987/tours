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

  const handleRemoveTour = (id) => {
    const filteredTours = tours.filter((tour) => tour.id !== id);
    setTours(filteredTours);
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <div className="title">
          <h2>Oh Uh! There was an error loading the tours</h2>
        </div>
      </main>
    );
  }

  if (!tours.length) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button
            type="button"
            style={{ marginTop: "2rem" }}
            className="btn"
            onClick={() => {
              fetchData(url);
            }}
          >
            Reload Tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <main>
        <Tours tours={tours} onHandleRemoveTours={handleRemoveTour} />
      </main>
    </>
  );
};
export default App;
