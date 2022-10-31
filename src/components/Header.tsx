import { useState } from "react";
import {
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export const Header = () => {
  const [language, setLanguage] = useState<any>("");
  const { t } = useTranslation();
  return (
    <AppBar position="static">
      <Stack spacing={2} direction="row" justifyContent="space-between">
        <Box>
          <Toolbar>
            <Typography variant="h5" component="div">
              {t("app_title")}
            </Typography>
          </Toolbar>
        </Box>
        <Box sx={{ width: "200px" }}>
          <Toolbar>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                {t("language")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={`${t("language")}`}
                value={language}
                onChange={(e) => {
                  i18next.changeLanguage(e.target.value);
                  setLanguage(e.target.value);
                }}
              >
                <MenuItem value={"en"}>English</MenuItem>
                <MenuItem value={"fr"}>French</MenuItem>
              </Select>
            </FormControl>
          </Toolbar>
        </Box>
      </Stack>
    </AppBar>
  );
};
