import React from 'react';
import { useRouteData } from 'react-static';
//
import { Link } from 'components/Router';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import NotesIcon from '@material-ui/icons/Notes';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    position: 'relative',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#fff',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    height: '100%',
    '&::after': {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      content: "''",
      display: 'block',
      zIndex: 1,
      position: 'absolute',
      borderRadius: '6px',
      backgroundColor: 'rgba(0, 0, 0, 0.56)'
    },
    '& a': {
      color: '#fff'
    }
  },
  item: {
    zIndex: 2,
    position: 'relative'
  }
}));

export default function Blog() {
  const { posts } = useRouteData();
  const classes = useStyles();
  return (
    <div>
      <h1>It's blog time.</h1>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {posts.map(post => (
            <Grid key={post.data.slug} item xs={12} md={4}>
              <Paper
                className={classes.paper}
                style={{ backgroundImage: `url(${post.data.featuredimage})` }}
              >
                <div className={classes.item}>
                  <div>{post.data.tags}</div>
                  <Link to={`/blog/post/${post.data.slug}`}>{post.data.title}</Link>
                  <div>{post.data.description}</div>
                  <Fab
                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label="Read"
                    component={Link}
                    to={`/blog/post/${post.data.slug}`}
                  >
                    <NotesIcon className={classes.extendedIcon} />
                    Read
                  </Fab>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
