import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("check if the products are displayed", async () => {
  render(<App />);

  const phoneCards = await screen.findAllByTestId("phoneCards");
  expect(phoneCards.length).toBeGreaterThanOrEqual(1);
});

test("check the path to publish page", async () => {
  render(<App />);

  const buttonPublish = await screen.findByTestId("buttonHeader");

  userEvent.click(buttonPublish);

  const publishTitle = await screen.findByTestId("titlePublishPage");
  expect(publishTitle).toBeInTheDocument();
});

test("check the path to home page", async () => {
  render(<App />);

  const buttonPublish = await screen.findByTestId("buttonHeader");

  userEvent.click(buttonPublish);

  const logo = await screen.findByTestId("logo");

  userEvent.click(logo);

  const phoneCards = await screen.findAllByTestId("phoneCards");
  expect(phoneCards.length).toBeGreaterThanOrEqual(1);
});

test("check the path to productById page", async () => {
  render(<App />);

  const phoneCards = await screen.findAllByTestId("phoneCards");

  userEvent.click(phoneCards[0]);

  const buttonModify = await screen.findByTestId("buttonModify");

  expect(buttonModify).toBeInTheDocument();

  const logo = await screen.findByTestId("logo");

  userEvent.click(logo);
});

test("check the path to modify page", async () => {
  render(<App />);

  const phoneCards = await screen.findAllByTestId("phoneCards");

  userEvent.click(phoneCards[0]);

  const buttonModify = await screen.findByTestId("buttonModify");

  userEvent.click(buttonModify);

  const buttonSendModification = await screen.findByTestId(
    "buttonSendModification"
  );

  expect(buttonSendModification).toBeInTheDocument();

  const logo = await screen.findByTestId("logo");

  userEvent.click(logo);
});

test("delete a product", async () => {
  render(<App />);

  const phoneCards = await screen.findAllByTestId("phoneCards");

  userEvent.click(phoneCards[0]);

  const buttonDelete = await screen.findByTestId("buttonDelete");

  userEvent.click(buttonDelete);

  const phoneCards2 = await screen.findAllByTestId("phoneCards");
  expect(phoneCards2.length).toBeGreaterThanOrEqual(1);
});
