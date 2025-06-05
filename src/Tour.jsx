export default function Tour({ id, image, name, info, price }) {
  return (
    <li>
      <article className="single-tour">
        <img className="img" src={image} alt={name} />
        <span className="tour-price">{price}</span>
        <div className="tour-info">
          <h5>{name}</h5>
          <p>{info}</p>
        </div>
      </article>
    </li>
  );
}
