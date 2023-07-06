import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id, ...rest } = useParams();

  const hero = useMemo( () => getHeroeById(id), [id]);

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  }

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft animate__faster">
      <div className="col-4">
        <img
          className="img-thumbnail"
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            {" "}
            <b>First apperance: </b>
            {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{hero.characters}</p>
        <button onClick={onNavigateBack} className="btn btn-outline-primary">Back</button>
      </div>
    </div>
  );
};
