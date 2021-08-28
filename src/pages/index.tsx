import Navbar from "../components/shared/Navbar";
import AccountMenu from "../components/shared/AccountMenu";
import {testUser} from "../util/auth/auth_helpers";
import React from "react";

function AccountButton() {
    return <AccountMenu key="account" user={testUser()}/>;
}

export default function Home() {
    return (
        <div>
            <Navbar endItems={[<AccountButton key="account"/>]}/>
        </div>
    );
}
