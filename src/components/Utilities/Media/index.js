import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export const Desktop = ({ children }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('960'));
  return isDesktop ? children : null;
};

export const Tablet = ({ children }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('960'));
  return isTablet ? children : null;
};

export const MobileDown = ({ children }) => {
  const theme = useTheme();
  const isMobileDown = useMediaQuery(theme.breakpoints.down('600'));
  return isMobileDown ? children : null;
};

export const MobileUp = ({ children }) => {
  const theme = useTheme();
  const isMobileUp = useMediaQuery(theme.breakpoints.up('600'));
  return isMobileUp ? children : null;
};
