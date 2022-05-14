import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    marginBlocks: {
      margin: theme.spacing(1),
    },
    iconVerticalAlign: {
      display: `inline-flex`,
      verticalAlign: `middle`,
    },
  })
);

const CountUp = (): JSX.Element => {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid container>
        <h1>{count}</h1>
        <Grid container className={classes.marginBlocks}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={() => setCount(count + 1)}
          >
            +
          </Button>
          <br />
        </Grid>
        <Grid container className={classes.marginBlocks}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={() => setCount(count - 1)}
          >
            -
          </Button>
          <br />
        </Grid>
        <Grid container className={classes.marginBlocks}>
          <Button type="button" variant="contained" onClick={() => setCount(0)}>
            リセット
          </Button>
        </Grid>
        <div>
          <p className={classes.iconVerticalAlign}>
            <AccessTimeIcon className={classes.iconVerticalAlign} />
            {new Date().toTimeString()}
          </p>
        </div>
      </Grid>
    </>
  );
};

export default CountUp;
