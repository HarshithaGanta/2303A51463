import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllNotifications from "./pages/AllNotifications";
import PriorityNotifications from "./pages/PriorityNotifications";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} variant="h6">
            Campus Notifications
          </Typography>

          <Button color="inherit" component={Link} to="/">
            All
          </Button>

          <Button color="inherit" component={Link} to="/priority">
            Priority
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<AllNotifications />} />
        <Route path="/priority" element={<PriorityNotifications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;