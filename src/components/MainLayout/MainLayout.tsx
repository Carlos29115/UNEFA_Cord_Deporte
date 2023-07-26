import {
  useState,
  FunctionComponent,
  PropsWithChildren,
  useEffect,
} from "react";
import "styles/layout.css";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "styles/Layout.module.scss";
import { DrawerMenu } from "components/index";
import { styled } from "@mui/material/styles";
import { searchItemLocal } from "utils/helpers";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NAVIGATION from "routes/navigation";
import { localToken } from "constants/index";
import banner from "img/banner.jpg";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: "-75x",
  }),
}));

const MainLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const token = searchItemLocal(localToken);
  useEffect(
    () => {
      if (!token) navigate(NAVIGATION.LOGIN);
    },
    [token, navigate]
  );

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#005b9a",
        }}
      >
        <figure
          style={{
            backgroundColor: "#005b9a",
            width: "56.5rem",
            margin: "0",
            height: "70px",
          }}
        >
          <img src={banner} alt="" style={{ width: "100%", height: "70px" }} />
        </figure>
      </header>
      <div className="App" style={{ backgroundColor: '#f4f7fe' }}>
        <div className={styles["buttonDrawer"]}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </div>

        <DrawerMenu open={open} handleDrawerClose={handleDrawerClose} />
        <Main open={open}>
          <section className={styles["content"]}>
            {children ? children : <Outlet />}
          </section>
        </Main>
      </div>
    </>
  );
};

export default MainLayout;
