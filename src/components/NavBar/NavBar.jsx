import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CartWidget from "./CartWidget/CartWidget";
import LeftMenu from "./LeftMenu/LeftMenu";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const NavBar = () => {
  const [openLeftMenu, changeOpenLeftMenu] = useState(false);

  const handleSidebarOpen = () => {
    changeOpenLeftMenu(true);
  };

  const handleSidebarClose = () => {
    changeOpenLeftMenu(false);
  };

  const { countItems } = useCart();

  return (
    <>
      <AppBar
        position="static"
        className="navbar"
        style={{ backgroundColor: "#262626" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 2 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ alignSelf: "flex-end" }}
            >
              <Link to="/">
                <img
                  className="logo"
                  src="https://by3302files.storage.live.com/y4mScn6mbKvDOkPwUWk9Dq6pDKuapILXm-1ilmgqV3RH-RljYuGsLzhBEJhQjcEBADZTVlBhcT3AcTqm5HWdas9Q_0EOsgv995BOcmdgEqx5uL05uUcd_8LG7yXFJP0D3IGtP6sQclZQkevIXSdQfRttbxRDa96ViPfPUaluyO30XUJQ79fZzaI4z1GI7S9OY4u?width=200&height=200&cropmode=none"
                  alt="Logo TUCASAGAMER"
                />
              </Link>
            </Typography>
          </Box>
          {countItems() > 0 ? <CartWidget /> : null}
        </Toolbar>
      </AppBar>
      <LeftMenu
        open={openLeftMenu}
        onOpen={handleSidebarOpen}
        onClose={handleSidebarClose}
      />
    </>
  );
};

export default NavBar;
