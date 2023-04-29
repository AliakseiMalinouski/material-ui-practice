import { TextField } from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField
    sx={{mt: '1rem'}}
    label="search"
    variant="standard" 
    fullWidth
    type='search' 
    value={value} 
    onChange={onChange} 
    />;
};

export default Search;