import { Button } from "@mui/material";
import React, { useState } from "react";
import Drawers from "./Drawers";

const Header = () => {
    const [modal, setModal] = useState(false);

    const HnadleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <div className="header-main">
                <Button onClick={HnadleModal}>open</Button>
            </div>

            {modal && <Drawers setModal={HnadleModal} modal={modal} />}
        </>
    );
};

export default Header;
