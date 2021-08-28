import AccountMenu from "./AccountMenu";
import {render, screen, waitFor} from "@testing-library/react";
import {testUser} from "../../../util/auth/auth_helpers";

describe('account menu', () => {
    it('should display an avatar with initials if no image is available', () => {
        render(<AccountMenu user={testUser({image: ""})}/>);
        expect(screen.getByText("NB")).toBeInTheDocument();
    });

    it('should display the profile picture of the user if provided', () => {
        render(<AccountMenu user={testUser()}/>);
        expect(screen.getByRole("button").firstElementChild!.firstElementChild!.getAttribute("src"))
            .toBe("/sample_avatar.jpg");
    });

    it('should open the account menu when clicked', async () => {
        render(<AccountMenu user={testUser()}/>);
        expect(screen.queryByText(testUser().name)).toBeNull();
        expect(screen.queryByText(testUser().email)).toBeNull();
        expect(screen.queryByText("Sign out")).toBeNull();
        expect(screen.queryByText("Manage account")).toBeNull();

        const menuButton = screen.getByRole("button");
        menuButton.click();

        await waitFor(() => screen.queryByText(testUser().name));
        expect(screen.queryByText(testUser().name)).toBeInTheDocument();
        expect(screen.queryByText(testUser().email)).toBeInTheDocument();

        const signOutButton = screen.queryByText("Sign out");
        expect(signOutButton).toBeInTheDocument();
        expect(signOutButton).toBeEnabled();

        const manageAccountButton = screen.queryByText("Manage account");
        expect(manageAccountButton).toBeInTheDocument();
        expect(manageAccountButton).toBeEnabled();
    });
});
