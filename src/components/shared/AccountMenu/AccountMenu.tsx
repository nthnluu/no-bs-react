import {FC, useRef, useState} from "react";
import {Avatar, ButtonBase, Paper, Popper, Stack, Typography} from "@material-ui/core";
import {User} from "../../../util/auth/auth_helpers";
import Button from "../Button";

export interface AccountMenuProps {
    /** The current user. */
    user: User;
}

/**
 * Displays a button with the current user's picture and presents an account menu when clicked
 */
const AccountMenu: FC<AccountMenuProps> = ({user}) => {
    const [open, setOpen] = useState(false);
    const id = open ? 'simple-popper' : undefined;
    const buttonRef = useRef(null);

    function getInitials(name: string) {
        const names = name.split(' ');
        let initials = names[0].substring(0, 1).toUpperCase();

        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }

        return initials;
    }

    return (<>
        {/*Avatar button*/}
        <ButtonBase aria-label="account menu" sx={{borderRadius: '100%'}} ref={buttonRef}
                    onClick={() => setOpen(!open)}>
            <Avatar src={user.image}>{getInitials(user.name)}</Avatar>
        </ButtonBase>

        {/*Account menu popover*/}
        <Popper id={id} open={open} anchorEl={buttonRef.current}>
            <Paper elevation={2} sx={{p: 3, width: 300, m: 1, textAlign: "center"}}>
                <Stack alignItems="center" spacing={1}>
                    <Avatar
                        src={user.image}
                        sx={{width: 84, height: 84, fontSize: 36, marginBottom: 2}}>{getInitials(user.name)}</Avatar>
                    <Typography variant="h6">
                        {user.name}
                    </Typography>
                    <Typography variant="subtitle2">
                        {user.email}
                    </Typography>
                    <Button sx={{mt: 2}} variant="contained" size="large">Sign out</Button>
                </Stack>
            </Paper>
        </Popper>
    </>);
};

export default AccountMenu;


