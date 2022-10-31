import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Stack,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  FormControl,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function StudentTable({ tableData, handleDelete }: any) {
  const { t } = useTranslation();
  const [state, setState] = useState<any>({
    from: 0,
    to: 0,
    class: "",
  });

  const [statetableData, setStatetableData] = useState<any>(tableData);

  useEffect(() => {
    setStatetableData([...tableData]);
  }, [tableData]);
  const handleFilter = () => {
    setStatetableData(
      // eslint-disable-next-line array-callback-return
      tableData.filter((item: any) => {
        if (
          state.to >= item.score &&
          item.score >= state.from &&
          item.class === state.class
        ) {
          return item;
        }
      })
    );
  };

  console.log("statetableData", tableData, statetableData);
  return (
    <Stack spacing={2} m={4} borderRadius="50%">
      <Paper
        sx={{ margin: "10px 10%", padding: "40px", borderRadius: "20px" }}
        elevation={5}
      >
        <Box>
          <FormControl>
            <Stack direction="row">
              <FormLabel>{t("from")}</FormLabel>
              <TextField
                id="outlined-basic"
                label="0"
                variant="outlined"
                size="small"
                sx={{ margin: "5px" }}
                value={state.from}
                onChange={(e) => {
                  setState({ ...state, from: e.target.value });
                }}
              />
              <FormLabel>{t("to")}</FormLabel>
              <TextField
                id="outlined-basic"
                label="100"
                variant="outlined"
                size="small"
                sx={{ margin: "5px" }}
                value={state.to}
                onChange={(e) => {
                  setState({ ...state, to: e.target.value });
                }}
              />
            </Stack>
          </FormControl>
        </Box>
        <Stack direction="row" justifyContent="center">
          <Box sx={{ padding: "10px" }}>
            <FormLabel id="demo-radio-buttons-group-label">
              {t("class")}
            </FormLabel>
          </Box>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={state.class}
            onChange={(e) => {
              setState({ ...state, class: e.target.value });
            }}
          >
            <Stack direction="row">
              <FormControlLabel value="A" control={<Radio />} label="A" />
              <FormControlLabel value="B" control={<Radio />} label="B" />
              <FormControlLabel value="C" control={<Radio />} label="C" />
            </Stack>
          </RadioGroup>
        </Stack>
        <Box>
          <Button variant="contained" onClick={handleFilter}>
            {t("filter")}
          </Button>
        </Box>
      </Paper>
      <Box>
        <TableContainer component={Paper}>
          <Table aria-label="simple-table">
            <TableHead>
              <TableRow>
                <TableCell>{t("id")}</TableCell>
                <TableCell>{t("studentName")}</TableCell>
                <TableCell>{t("score")}</TableCell>
                <TableCell>{t("class")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {statetableData.map((row: any) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.studentName}</TableCell>
                  <TableCell>{row.score}</TableCell>
                  <TableCell>{row.class}</TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleDelete(row.id)}
                  >
                    {t("delete")}
                  </Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  );
}

export default StudentTable;
