import React from "react";
import { AppBar, Toolbar, IconButton, Hidden, Drawer, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

import Footer from "./footer";
import Link from "./link";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  drawer: {
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar, // necessary for content to be below app bar
  content: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    padding: theme.spacing(3),
  },
}));

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  const container = React.useRef<HTMLElement | undefined>(undefined);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    if (window) {
      container.current = window.document.body;
    }
  }, []);

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link href="/">
          <ListItem button>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        <Link href="/posts/ssg-ssr">
          <ListItem button>
            <ListItemText>SSG vs SSR</ListItemText>
          </ListItem>
        </Link>
        <Link href="/posts/pre-rendering">
          <ListItem button>
            <ListItemText>Pre-Rendering</ListItemText>
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemText>
            <Link href="/countries">Countries</Link>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="navigations">
        <Hidden xsUp implementation="css">
          <Drawer
            container={container.current}
            variant="temporary"
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            open={mobileOpen}
            onClose={handleDrawerToggle}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
