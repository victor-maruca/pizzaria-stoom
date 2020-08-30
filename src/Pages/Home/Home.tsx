import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, CardMedia } from '@material-ui/core';
import 'fontsource-roboto';
import './home.css';

let image = require('../../static/images/pizza_home.jpg');

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    alignSelf: 'center',
    margin: 'auto',
    backgroundColor: 'pink'
  },
  topButton: {
    margin: '5px',
    width: '-webkit-fill-available',
    backgroundColor: 'red',
    color: 'white'
  },
  media: {
    height: '350px'
  },
  card: {
    width: '500px',
    height: '90%',
    marginTop: '40px',
    marginBottom: '40px',
    backgroundColor: 'darkred',
    boxShadow: 'inset 0 0 100px black'
  },
  bottomContainer: {
      margin: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.35)',
      height: '-webkit-fill-available'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  bottomButton: {
    margin: '5px',
    width: '-webkit-fill-available',
    backgroundColor: 'red',
    color: 'white'
  },
  title: {
    color: 'white'
  },
  outerDiv: {
      width: '100%',
      height: '100vh'
  }
});

const Home = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className={classes.outerDiv}>
            <div className="bg-img"></div>
            <div className="bg-text">
                <h1>Bem Vindo! Estamos muito felizes de ter você por aqui :D</h1>
                <p className="subtitle">O forno está quente e estamos entregando. Nossas pizzas são feitas com carinho e ingredientes de primeira linha!</p>
                <br/>
                <p>Você pode pedir nosso especial do dia e acumular pontos</p>
                <Button id='btnOrder' className='button-order' variant="outlined">
                    ESPECIAL DO DIA
                </Button>
                <p>Ou se preferir monte sua pizza do jeito que você gosta </p>
                <Button id='btnOrder2' className='button-order' variant="outlined">
                    <a href='/tamanho'>MONTE JÁ SUA PIZZA!</a>
                </Button>
            </div>
        </div>
    );

        /*
        <Container className={classes.container}>
            <Card className={classes.card}>
                <Button className={classes.topButton} variant="contained" color="secondary">
                    Peça já sua Pizza do dia e ganhe pontos!
                </Button>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                />
                <div className={classes.bottomContainer}>
                    <CardContent>
                        <Typography variant="h3" className={classes.title} gutterBottom>
                            BEM VINDO!
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Estamos entregando em sua região! 
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <Button className={classes.bottomButton} variant="contained">
                        Monte já sua pizza!
                    </Button>
                </div>
            </Card>
        </Container>
      );*/
}

export default Home;