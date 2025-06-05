import { useState } from "react";

export default function Tour({
  id,
  image,
  name,
  info,
  price,
  onHandleRemoveTours,
}) {
  const [toggle, setToggle] = useState(false);

  return (
    <li>
      <article className="single-tour">
        <img className="img" src={image} alt={name} />
        <span className="tour-price">{price}</span>
        <div className="tour-info">
          <h5>{name}</h5>
          <p>
            {toggle ? `${info} ` : `${info.substring(0, 200)}... `}
            <button
              className="info-btn"
              onClick={() => {
                setToggle((currToggle) => !currToggle);
              }}
            >
              {!toggle ? "Read More" : "Read Less"}
            </button>
          </p>
          <button
            className="btn btn-block delete-btn"
            onClick={() => {
              onHandleRemoveTours(id);
            }}
          >
            Not Interested
          </button>
        </div>
      </article>
    </li>
  );
}
