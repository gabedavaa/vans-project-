import React from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
  return getVans();
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = React.useState(null);
  const vans = useLoaderData();
  console.log(vans);

  const typeFilter = searchParams.get("type");

  const displayVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  if (error) return <h1>There was an Error: {error.message}</h1>;

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className={`van-type simple ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          luxury
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className={`van-type simple ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
        >
          rugged
        </button>
        {typeFilter ? (
          <button
            onClick={() => setSearchParams({})}
            className="van-type clear-filters"
          >
            clear filter
          </button>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
