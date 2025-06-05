import Tour from "./Tour";

export default function Tours({ tours }) {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <ul className="tours">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
      </ul>
    </section>
  );
}
