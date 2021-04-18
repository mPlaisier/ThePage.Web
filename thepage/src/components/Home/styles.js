import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  root: {
    backgroundColor: '#ffffff',
    backgroundImage: 'url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    overflow: "auto"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  loader: {
    marginTop: theme.spacing(5),
  },
  alert: {
    marginTop: theme.spacing(1),
  }
}));