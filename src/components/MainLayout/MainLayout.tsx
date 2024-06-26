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
import cintillo from "../../img/cintillo_unefa.jpg";

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
  // const token = searchItemLocal(localToken);
  // useEffect(
  //   () => {
  //     if (!token) navigate(NAVIGATION.LOGIN);
  //   },
  //   [token, navigate]
  // );

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles["cintillo"]}>
        <img src={cintillo} alt="cintillo" />
      </div>
      <div className="App" style={{ backgroundColor: "#2d90c4" }}>
        {/* <div className={styles["buttonDrawer"]}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </div> */}
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
