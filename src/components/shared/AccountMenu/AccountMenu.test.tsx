import AccountMenu from "./AccountMenu";
import {render, screen} from "@testing-library/react";
import {testUser} from "../../../util/auth/auth_helpers";

describe('account menu', () => {
    it("should render an avatar with the user's initials if no image is available", () => {
        render(<AccountMenu user={testUser({image: ""})}/>);
        expect(screen.getByText("NB")).toBeInTheDocument();
    });

    it("should render the user's avatar", () => {
        render(<AccountMenu user={testUser()}/>);
        expect(screen.getByRole("button").firstElementChild!.firstElementChild!.getAttribute("src"))
            .toBe("/sample_avatar.jpg");
    });
});
