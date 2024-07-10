import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
      fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#80B9AD"
      viewBox="0 0 24 24"
      className={classes.svgHover}
    >
      <path d="M12,17 C9.23857625,17 7,14.7614237 7,12 C7,9.23857625 9.23857625,7 12,7 C14.7614237,7 17,9.23857625 17,12 C17,14.7614237 14.7614237,17 12,17 Z M12,16 C14.209139,16 16,14.209139 16,12 C16,9.790861 14.209139,8 12,8 C9.790861,8 8,9.790861 8,12 C8,14.209139 9.790861,16 12,16 Z M17.1446181,18.1266652 C17.3559949,17.9489731 17.6713975,17.9762799 17.8490896,18.1876567 C18.0267817,18.3990334 17.9994749,18.714436 17.7880981,18.8921281 C16.1784361,20.245277 14.1466943,21 12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 L21,14.5 C21,15.8807119 19.8807119,17 18.5,17 C17.1192881,17 16,15.8807119 16,14.5 L16,8.5 C16,8.22385763 16.2238576,8 16.5,8 C16.7761424,8 17,8.22385763 17,8.5 L17,14.5 C17,15.3284271 17.6715729,16 18.5,16 C19.3284271,16 20,15.3284271 20,14.5 L20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C13.9090665,20 15.7135178,19.3297077 17.1446181,18.1266652 Z" />
    </svg>
  );
};