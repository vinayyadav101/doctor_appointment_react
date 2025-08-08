import SearchIcon from "@mui/icons-material/Search";
import { alpha, Box, InputBase ,styled } from "@mui/material";



export default function Search(){
          const Search = styled("div")(({ theme }) => ({
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            border: `1px solid ${alpha(theme.palette.common.black, 0.25)}`, // ✅ Add this
                "&:hover": {
                    backgroundColor: alpha(theme.palette.common.white, 0.25),
                },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: "100%",
            [theme.breakpoints.up("sm")]: {
              marginLeft: theme.spacing(3),
              width: "auto",
            },
          }));
        
          const StyledInputBase = styled(InputBase)(({ theme }) => ({
            color: "inherit",
            width: "100%",
            "& .MuiInputBase-input": {
              padding: theme.spacing(1, 1, 1, 0),
              // vertical padding + font size from searchIcon
              paddingLeft: `calc(1em + ${theme.spacing(4)})`,
              transition: theme.transitions.create("width"),
              width: "100%",
              
            },
          }));
    return(
        <Search>
          <Box
              sx={{
              position: "absolute",
              height: "100%",
              display: "flex",
              alignItems: "center",
              pl: 1,
              pointerEvents: "none",
              }}
          >
              <SearchIcon />
          </Box>
            <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            />
        </Search>
    )
}