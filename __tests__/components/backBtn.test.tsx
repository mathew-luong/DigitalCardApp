import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BackBtn from "@/app/components/Buttons/backBtn";

describe("Home", () => {
    it("renders a back button", () => {
        render(<BackBtn />);

        const btn = screen.getByRole("button");

        expect(btn).toBeInTheDocument();
    });
});
