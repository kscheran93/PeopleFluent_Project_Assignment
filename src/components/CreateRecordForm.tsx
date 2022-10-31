import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  Paper,
  Box,
  Typography,
} from "@mui/material";
export const CreateRecordForm = ({ handleCreateRecord }: any) => {
  const [value, setValue] = useState<any>({
    studentName: "",
    score: 0,
    class: "A",
  });
  const { t } = useTranslation();
  console.log(value);
  return (
    <Paper
      sx={{ margin: "30px 25%", padding: "40px", borderRadius: "20px" }}
      elevation={5}
    >
      <Typography variant="body1">{t("CSSR")}</Typography>
      <FormControl>
        <TextField
          id="outlined-basic"
          label={`${t("studentName")}`}
          variant="outlined"
          size="small"
          value={value.studentName}
          sx={{ margin: "5px" }}
          onChange={(e) => {
            setValue({ ...value, studentName: e.target.value });
          }}
        />
        <TextField
          id="outlined-number"
          label={`${t("score")}`}
          type="number"
          size="small"
          value={value.score}
          onChange={(e) => {
            setValue({ ...value, score: e.target.value });
          }}
          sx={{ margin: "5px" }}
        />
        <FormLabel id="demo-radio-buttons-group-label">Class</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="class"
          value={value.class}
          onChange={(e) => {
            setValue({ ...value, class: e.target.value });
          }}
        >
          <FormControlLabel value="A" control={<Radio />} label="A" />
          <FormControlLabel value="B" control={<Radio />} label="B" />
          <FormControlLabel value="C" control={<Radio />} label="C" />
        </RadioGroup>
      </FormControl>
      <Box className="button">
        <Button variant="contained" onClick={() => handleCreateRecord(value)}>
          {t("createRecord")}
        </Button>
      </Box>
    </Paper>
  );
};
