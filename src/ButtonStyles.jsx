import React from "react"
import { makeStyles } from "@mui/styles"
import Button from "@mui/material/Button"

const useStyle = makeStyles(
    {
        root: {
            background: 'linear-gradient(45deg, #FFFFFF 10%, #000000 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'red',
            height: 48,
            padding: '0 30px',
        }
    }
);

export default function StyledButton() {
    const classes = useStyle();
    return <Button className={classes.root}>Sample Button</Button>
}


