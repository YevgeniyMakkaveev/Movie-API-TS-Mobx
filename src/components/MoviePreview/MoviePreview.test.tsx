import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import MoviePreview from "./MoviePreview";

describe("Movie preview component should work", () => {
  it("should render correctly", () => {
    render(
      <MoviePreview
        id={1}
        title="Name"
        poster_path={"/none"}
        overview={"I did it for test"}
        vote_average={"8"}
      />
    );
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("I did it for test")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
  });
  describe("it should be used to test snapshots", () => {
    it("should mach the snapshot", () => {
      const app = render(
        <MoviePreview
          id={1}
          title="Name"
          poster_path={"/none"}
          overview={"I did it for test"}
          vote_average={"8"}
        />
      );
      expect(app).toMatchSnapshot();
    });
  });
});
