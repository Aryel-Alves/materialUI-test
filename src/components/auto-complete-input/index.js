import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Tags(props) {
  const classes = useStyles();
  const [ selectedValues, setSelectedValues] = useState([])

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        options={props.optionsList}
        getOptionLabel={option => option.name}
        filterSelectedOptions
        onChange={(event, value) => setSelectedValues(value)}
        // value={selectedValues}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="Formato do Documento"
            fullWidth
          />
        )}
      />
    </div>
  );
}
