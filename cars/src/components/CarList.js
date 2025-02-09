import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();

  const memoizedCars = createSelector(
    [(state) => state.cars.data, (state) => state.cars.searchTerm],
    (data, searchTerm) =>
      data.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const cars = useSelector(memoizedCars);
  const name = useSelector((state) => state.form.name);

  const searchTerm = useSelector((state) => state.cars.searchTerm);

  const handleDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedList = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className="button is-danger" onClick={() => handleDelete(car)}>
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {renderedList}
      <hr />
    </div>
  );
}

export default CarList;
