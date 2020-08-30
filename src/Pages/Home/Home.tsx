import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import 'fontsource-roboto';
import './home.css';

const useStyles = makeStyles({
  outerDiv: {
      width: '100%',
      height: '100vh'
  }
});

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.outerDiv}>
            <div className="bg-img"></div>
            <div className="bg-text">
                <h1>Bem Vindo! Estamos muito felizes de ter você por aqui :D</h1>
                <p className="subtitle">O forno está quente e estamos entregando. Nossas pizzas são feitas com carinho e ingredientes de primeira linha!</p>
                <br/>
                <p>Você pode pedir nosso especial do dia e acumular pontos</p>
                <Button id='btnOrder' className='button-order' variant="outlined">
                    <a href='/pizza-of-the-day'>ESPECIAL DO DIA</a>
                </Button>
                <p>Ou se preferir monte sua pizza do jeito que você gosta </p>
                <Button id='btnOrder2' className='button-order' variant="outlined">
                    <a href='/tamanho'>MONTE JÁ SUA PIZZA!</a>
                </Button>
            </div>
        </div>
    );
}

export default Home;