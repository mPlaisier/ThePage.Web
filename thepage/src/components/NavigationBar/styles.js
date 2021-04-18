import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: {
      paddingLeft: theme.spacing(10),
      borderBottom: `1px solid ${theme.palette.divider}`,
      borderTop: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
      marginLeft: theme.spacing(10),
      marginBottom: theme.spacing(1),
    },
    toolbarLink: {
      marginRight: theme.spacing(7),
      textDecoration: 'none',
      color: '#FFFFFF',
      fontFamily: theme.typography.fontFamily
    },
    navigationBar: {
      marginTop: theme.spacing(1),
    },
    linkIcon: {
      marginRight: theme.spacing(1),
      fontSize: "24px"
    },
    logout: {
      flexGrow: '1',
      display: 'flex'
    },
    logoutButton: {
      marginLeft: 'auto'
    }
  }));  