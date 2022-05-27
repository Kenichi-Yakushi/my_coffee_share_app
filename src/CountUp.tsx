import { useState } from "react";
import { Grid, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const CountUp = (): JSX.Element | null => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid container>
        <h1>{count}</h1>
        <Grid container>
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
        <Grid container>
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
        <Grid container>
          <Button type="button" variant="contained" onClick={() => setCount(0)}>
            リセット
          </Button>
        </Grid>
        <div>
          <p>
            <AccessTimeIcon />
            {new Date().toTimeString()}
          </p>
        </div>
      </Grid>
    </>
  );
};

export default CountUp;
