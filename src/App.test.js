import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SearchResultPage from "./SearchResultPage";

test("renders landing page heading", () => {
  render(<App />);
  const landingPageHeading = screen.getByText(
    /What should your next vacation destination be like compared to/i
  );
  expect(landingPageHeading).toBeInTheDocument();
});

test("renders results page heading", () => {
  render(
    <BrowserRouter>
      <SearchResultPage />
    </BrowserRouter>
  );

  const resultsPageHeading = screen.getByText(/Here are some places you might like to visit/i);
  expect(resultsPageHeading).toBeInTheDocument();
});
