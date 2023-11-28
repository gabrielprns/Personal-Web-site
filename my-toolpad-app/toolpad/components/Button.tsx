import * as React from "react";
import { Typography } from "@mui/material";
import { createComponent } from "@mui/toolpad/browser";

export interface ButtonProps {
  msg: string;
}

function Button({ msg }: ButtonProps) {
  return <Typography>{msg}</Typography>;
}

export default createComponent(Button, {
  argTypes: {
    msg: {
      type: "string",
      default: "Hello world!",
    },
  },
});
