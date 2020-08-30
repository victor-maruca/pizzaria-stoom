import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './pizzaOfTheDay.css';
import Button from '@material-ui/core/Button';
import { Tamanho, RecheioBorda, Sabor } from '../../MockBackend/models';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import database from '../../Repository/PizzaRepository'
import Divider from '@material-ui/core/Divider';
import { IProps } from '../../App';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    outerDiv: {
        width: '100%',
        height: '100vh'
    }
  });
var props: IProps;
let recomendation = database.recomendation();

const PizzaOfTheDay = (_props: IProps) => {
    const classes = useStyles();
    props = _props;
    return (
        <div className={classes.outerDiv}>
            <div className="bg-img-day"></div>
            <div className="bg-text-day">
                <h1>Todos clientes que pedem a Pizza do Dia recebem pontos do clube de benefícios!</h1>
                <p className="subtitle">Nossas pizzas são preparadas cuidadosamente para você ter a experiência que mercere.</p>
                <p>Nosso especial do dia hoje é:</p>
                <div className='list-container'>
                    <List component="nav">
                        {getPizzaOfTheDay()}
                    </List>
                </div>
                <Button id="btnOrder" variant="outlined" onClick={orderPizza}>
                    <Link to="/confirmation">
                        Peça já sua Pizza do Dia!
                    </Link>
                </Button>
                <p className='subtitle'>E acumule pontos!</p>
            </div>
        </div>
    );
} 

const orderPizza = () => {
    props.setCurrentPizza(recomendation);
}
const getPizzaOfTheDay = () => {
    return (<>            
        <Divider />
        <ListItem button>
            <ListItemText 
                primary={Tamanho[recomendation.tamanho!]} 
                secondary='Tamanho' 
            />
        </ListItem>
        <Divider />
        <ListItem button>
            <ListItemText 
                primary={Sabor[recomendation.sabor!.primeiroSabor!]} 
                secondary='Sabor' 
            />
        </ListItem>
        <Divider />
        <ListItem button>
            <ListItemText 
                primary={
                    recomendation.borda!.recheada 
                        ? RecheioBorda[recomendation.borda!.recheioBorda!] 
                        : 'Borda Normal'
                } 
                secondary='Borda'
            />
        </ListItem>
        <Divider />
    </>);
}

export default PizzaOfTheDay;