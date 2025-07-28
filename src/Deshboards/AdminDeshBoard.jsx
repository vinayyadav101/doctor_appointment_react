import * as React from "react";
import {
  alpha,
  Box,
  Grid,
  InputBase,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FaUserDoctor } from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";
import { BsCalendar2MonthFill } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import SearchIcon from "@mui/icons-material/Search";
import {
  AspectRatio,
  Link,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/joy";

// table imports //

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

// chart imports//
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { desktopOS, valueFormatter } from "./webUsageStats";

export default function AdminDeshBoard() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
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
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  // table data //

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
    {
      id: "population",
      label: "Population",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "size",
      label: "Size\u00a0(km\u00b2)",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "density",
      label: "Density",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }

  const rows = [
    createData("India", "IN", 1324171354, 3287263),
    createData("China", "CN", 1403500365, 9596961),
    createData("Italy", "IT", 60483973, 301340),
    createData("United States", "US", 327167434, 9833520),
    createData("Canada", "CA", 37602103, 9984670),
    createData("Australia", "AU", 25475400, 7692024),
    createData("Germany", "DE", 83019200, 357578),
    createData("Ireland", "IE", 4857000, 70273),
    createData("Mexico", "MX", 126577691, 1972550),
    createData("Japan", "JP", 126317000, 377973),
    createData("France", "FR", 67022000, 640679),
    createData("United Kingdom", "GB", 67545757, 242495),
    createData("Russia", "RU", 146793744, 17098246),
    createData("Nigeria", "NG", 200962417, 923768),
    createData("Brazil", "BR", 210147125, 8515767),
  ];

  const SmallSizeCss = isSmall
    ? {
        card: {
          parent: {
            maxWidth: 160,
            minWidth: 100,
            minHeight: 120,
          },
          box: {
            size: 40,
          },
          content: {
            NumSize: 18,
            TextSize: 12,
          },
        },
        mainDiv: {
          p: 2,
        },
        table_1: "span 6",
        table_2: "span 6",
      }
    : {
        card: {
          parent: {
            maxWidth: 300,
            minWidth: 300,
            minHeight: 100,
          },
          box: {
            size: 90,
          },
          content: {
            NumSize: 25,
            TextSize: 18,
          },
        },
        mainDiv: {
          p: 4,
        },
        table_1: "span 4",
        table_2: "span 2",
      };

  const margin = { right: 24 };
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  return (
    <Box
      component="section"
      sx={{ p: SmallSizeCss.mainDiv.p }}
      className="flex flex-col gap-6"
    >
      {/* first div */}

      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Card
          variant="outlined"
          orientation="horizontal"
          sx={{
            alignItems: "center",
            maxWidth: SmallSizeCss.card.parent.maxWidth,
            minWidth: SmallSizeCss.card.parent.minWidth,
            minHeight: SmallSizeCss.card.parent.minHeight,
            textAlign: "center",
          }}
        >
          <Box sx={{ width: SmallSizeCss.card.box.size }}>
            <FaUserDoctor
              className="bg-transparent"
              size={SmallSizeCss.card.box.size}
            />
          </Box>
          <CardContent>
            <Typography
              variant="p"
              sx={{ fontSize: SmallSizeCss.card.content.NumSize }}
            >
              100000
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: SmallSizeCss.card.content.TextSize }}
            >
              Total Doctors
            </Typography>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          orientation="horizontal"
          sx={{
            alignItems: "center",
            maxWidth: SmallSizeCss.card.parent.maxWidth,
            minWidth: SmallSizeCss.card.parent.minWidth,
            minHeight: SmallSizeCss.card.parent.minHeight,
            textAlign: "center",
          }}
        >
          <Box sx={{ width: SmallSizeCss.card.box.size }}>
            <LuCalendarClock
              className="bg-transparent"
              size={SmallSizeCss.card.box.size}
            />
          </Box>
          <CardContent>
            <Typography
              variant="p"
              sx={{ fontSize: SmallSizeCss.card.content.NumSize }}
            >
              100000
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: SmallSizeCss.card.content.TextSize }}
            >
              Appointment Today
            </Typography>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          orientation="horizontal"
          sx={{
            alignItems: "center",
            maxWidth: SmallSizeCss.card.parent.maxWidth,
            minWidth: SmallSizeCss.card.parent.minWidth,
            minHeight: SmallSizeCss.card.parent.minHeight,
            textAlign: "center",
          }}
        >
          <Box sx={{ width: SmallSizeCss.card.box.size }}>
            <BsCalendar2MonthFill
              className="bg-transparent"
              size={SmallSizeCss.card.box.size}
            />
          </Box>
          <CardContent>
            <Typography
              variant="p"
              sx={{ fontSize: SmallSizeCss.card.content.NumSize }}
            >
              100000
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: SmallSizeCss.card.content.TextSize }}
            >
              Total Doctors
            </Typography>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          orientation="horizontal"
          sx={{
            alignItems: "center",
            maxWidth: SmallSizeCss.card.parent.maxWidth,
            minWidth: SmallSizeCss.card.parent.minWidth,
            minHeight: SmallSizeCss.card.parent.minHeight,
            textAlign: "center",
          }}
        >
          <Box sx={{ fontSize: SmallSizeCss.card.box.size }}>
            <MdPendingActions
              className="bg-transparent"
              size={SmallSizeCss.card.box.size}
            />
          </Box>
          <CardContent>
            <Typography
              variant="p"
              sx={{ fontSize: SmallSizeCss.card.content.NumSize }}
            >
              100000
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: SmallSizeCss.card.content.TextSize }}
            >
              Total Doctors
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* second div */}

      <Box
        component="div"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(6,1fr)",
          justifyContent: "center",
        }}
      >
        <Box
          component="div"
          sx={{
            gridColumn: SmallSizeCss.table_1,
            display: "flex",
            flexDirection: "column",
            order: { xs: 2, md: 1 },
          }}
        >
          <Search>
            <SearchIcon />
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box component="div" sx={{ color: "white" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column.id} align={column.align}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </Box>

        <Box
          component="div"
          sx={{
            gridColumn: SmallSizeCss.table_2,
            order: { xs: 1, md: 2 },
            display: "flex",
            flexDirection:"column",
            py: 2,
            gap: 2,
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <PieChart
            series={[
              {
                data: desktopOS,
                highlightScope: { fade: "global", highlight: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
                valueFormatter,
              },
            ]}
            height={200}
            width={200}
          />
          <LineChart
            height={200}
            series={[
              { data: pData, label: "pv" },
              { data: uData, label: "uv" },
            ]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
            yAxis={[{ width: 50 }]}
            margin={margin}
          />
        </Box>
      </Box>

      {/* third div */}
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Search>
          <SearchIcon />
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box component="div" sx={{ color: "white" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Box>
    </Box>
  );
}
