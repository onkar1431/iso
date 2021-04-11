import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import CameraIcon from "@material-ui/icons/PhotoCamera";
import SearchIcon from '@material-ui/icons/Search';
import React from "react";
import useStyles from "./data/config";
import courses from "./data/mock-data";

export default function Album() {
  const classes = useStyles();
  const [courseList, setCourseList] = React.useState(courses[0].lessons);
  const [filteredCourses, setFilteredCourses] = React.useState([]);
  const filterCourses = (event) => {
    setFilteredCourses(courseList.filter((item) => item.name === event.target.value));
  }

  React.useEffect(() => {
    if (filteredCourses.length > 0) {
      setCourseList(filteredCourses);
    } else {
      setCourseList(courses[0].lessons);
    }
  }, [filteredCourses])

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Dentsu
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Courses
            </Typography>
            <Paper component="form" className={classes.root}>
              <IconButton className={classes.iconButton} aria-label="menu">
                <MenuIcon />
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="Search Courses"
                inputProps={{ 'aria-label': 'search courses' }}
                onChange={filterCourses}
              />
              <SearchIcon />
            </Paper>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {courseList.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>{card.description}</Typography>
                    <div className={classes.authorName}>- {card.author}</div>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </>
  );
}
