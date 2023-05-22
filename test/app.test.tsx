import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "../src/app";

describe('test for app', () => {
    test('test app', () => {
        render(<App />);
        const text = screen.getByText("Hello React545")
        expect(text).toBeInTheDocument();
    })
})