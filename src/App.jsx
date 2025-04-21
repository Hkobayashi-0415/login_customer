import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import CustomerList from "./components/CustomerList";
import Login from "./components/Login";

// MUIのテーマを作成
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/customers" element={<CustomerList />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 