import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../testUtils";
import { Home } from "../../pages/index";

describe("Home page", () => {
  it("clicking button triggers alert", () => {
    render(<Home />, {});
    window.alert = jest.fn();
    userEvent.click(screen.getByRole("button", { name: "Test Button" }));
    expect(window.alert).toHaveBeenCalledWith("With typescript and Jest");
  });
});
