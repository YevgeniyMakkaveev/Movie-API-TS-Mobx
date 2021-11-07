import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import MovieCard from "./MovieCard";

const app = (
  <MovieCard
    id={1}
    title="Name"
    poster_path={"/none"}
    overview={"I did it for test"}
    vote_average={"8"}
    release_date="1984"
    tagline="testing"
    toggleFavorite={() => {}}
    isFavorite={true}
    genres={[
      { id: 1, name: "1" },
      { id: 2, name: "2" },
    ]}
  />
);

describe("Movie card component should work", () => {
  it("should render correctly", () => {
    render(
      <MovieCard
        id={1}
        title="Name"
        poster_path={"/none"}
        overview={"I did it for test"}
        vote_average={"8"}
        release_date="1984"
        tagline="testing"
        toggleFavorite={() => {}}
        isFavorite={true}
        genres={[
          { id: 3, name: "1" },
          { id: 4, name: "2" },
        ]}
      />
    );
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("I did it for test")).toBeInTheDocument();
    expect(screen.getByText("Release date: 1984")).toBeInTheDocument();
    expect(screen.getByText("Score 8")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });
  describe("it should be used to test snapshots", () => {
    it("should mach the snapshot", () => {
      const snap = app;
      expect(snap).toMatchSnapshot();
    });
  });
});
