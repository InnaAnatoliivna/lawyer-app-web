import { Box, useTheme } from "@mui/material";
import Header from "./navigation/Header";
import MenuIcon from "@mui/icons-material/Menu";
import Nav from "./navigation/Nav";
// import MenuLink from "./navigation/MenuLink";
// import CurrencySwitch from "./navigation/CurrencySwitch";
import ThemeSwitchButton from "./navigation/ThemeSwitchButton";
import { ColorModeContext } from "./ToggleColorMode";
import { useContext, useState } from "react";
import IconButton from "./navigation/IconButton";
import Logo from "./navigation/Logo";
// import Description from "./navigation/Description";
import Button from "@mui/material/Button";
import SignInButton from "./navigation/SignInButton";
import Link from "next/link";
// import MenuLinksBox from "./navigation/MenuLinksBox";
import Sidebar from "./navigation/SidebarMenu/Sidebar";
// import { menuElements } from "../../utils/menuElements";

const Navigation = () => {
  const theme = useTheme();
  const { mode, handleToggleColorMode } = useContext(ColorModeContext);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <Header>
      <Logo />

      <Nav>
        <ThemeSwitchButton
          checked={mode === "dark"}
          onChange={handleToggleColorMode}
          theme={theme}
        />
        <Button
          LinkComponent={Link}
          variant="outlined"
          href="/offers/create"
          sx={{
            [theme.breakpoints.down("laptop")]: { display: "none" },
            borderRadius: 'var(--border-radius-btn)',
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "#fb3938;"
                  : "#fb3938;",
              color:
                theme.palette.mode === "dark"
                  ? "var(--color-light);"
                  : "var(--color-light)",
            },

          }}
        >
          Dodaj ogloszenie
        </Button>
        <SignInButton>
          Zaloguj się
        </SignInButton>
      </Nav>
      <Box
        width="68px"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          [theme.breakpoints.down("laptop")]: {
            width: 40,
          },
        }}
      >
        <IconButton onClick={() => setIsOpenSidebar(true)}>
          <MenuIcon />
        </IconButton>
        <Sidebar open={isOpenSidebar} setOpen={setIsOpenSidebar} />
      </Box>
    </Header>
  );
};

export default Navigation;