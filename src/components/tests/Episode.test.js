import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";

const exampleEpisodeData = {
  airdate: "2016-07-15",
  airstamp: "2016-07-15T12:00:00+00:00",
  airtime: "",
  id: 553946,
//   image: "https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg",
  image: null,
  name: "Chapter One: The Vanishing of Will Byers",
  number: 1,
  rating: { average: 8.2 },
  runtime: 49,
  season: 1,
  summary:
    "Sam is testing the summary",
  type: "regular",
  url: "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
};

test("renders without error", () => {
    render(<Episode episode = {exampleEpisodeData}/>)
});

test("renders the summary test passed as prop", () => {
    render(<Episode episode = {exampleEpisodeData}/>)
    const value = screen.getByText('Sam is testing the summary')
    expect(value).toBeVisible()
});

test("renders default image when image is not defined", () => {
    render(<Episode episode = {exampleEpisodeData} />)
    const img = screen.getByRole('img')
    expect(img).toBeVisible()
});

