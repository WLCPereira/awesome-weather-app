/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from 'react';
import { Grid, Fab, Tooltip } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Map, Mapmarker } from 'Components';
import HomeFactory from './Home';
import useStyles from './styles';

export default function Home(props) {
  const classes = useStyles();
  const mapMarker = useRef(null);
  const { states, events } = HomeFactory({ props });
  const { position, isDragin } = states;

  const { anchorToWeaher, eventHandlers } = events;

  return (
    <Grid container className={classes.homeContainer} spacing={0}>
      <Grid item className={classes.homeGrid} xs={12}>
        <Map
          center={position}
          style={{ width: '100%', height: '100%' }}
          zoom={8}
        >
          <Mapmarker
            ref={mapMarker}
            eventHandlers={eventHandlers}
            position={position}
            draggable
          />
        </Map>
        <Tooltip title="Search" aria-label="Serach">
          <span>
            <Fab
              color="primary"
              className={classes.homeSearchButton}
              disabled={isDragin}
              onClick={anchorToWeaher}
            >
              <Search />
            </Fab>
          </span>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
