import Tour from "./Tour";

export default function Tours({ tours, onHandleRemoveTours }) {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>

      <ul className="tours">
        {tours.map((tour) => (
          <Tour
            key={tour.id}
            {...tour}
            onHandleRemoveTours={onHandleRemoveTours}
          />
        ))}
      </ul>
    </section>
  );
}
