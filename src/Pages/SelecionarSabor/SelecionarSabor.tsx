import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForward from '@material-ui/icons/ArrowForward';
import database from '../../Repository/PizzaRepository'
import { Sabor } from '../../MockBackend/models';
import Divider from '@material-ui/core/Divider';
import './selecionarSabor.css';
import { IProps } from '../../App';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    outerDiv: {
        width: '100%',
        height: '100vh'
    }
});  
var props: IProps;

function SelecionarSabor(_props: IProps) {
    const [state, setState] = React.useState(null);
    getSabores(state, setState);
    const classes = useStyles();
    props = _props;
    return (
        <div className={classes.outerDiv}>
            <div className="bg-img-sabor"></div>
            <div className="bg-text-sabor">
                <h1>Chegou a hora que todo mundo gosta, escolher o Recheio!</h1>
                <p className="subtitle">Todos nossos ingredientes são de altíssima qualidade, então não se preocupe, não tem como errar.</p>
                <br/>
                <p>Esses são os recheios que temos disponíveis:</p>
                <div className='list-container'>
                   {state}
                </div>
            </div>
        </div>
    );
}

const setSabor = (state: any, sabor?: Sabor) => {
    let pizza = props.currentPizza;
    if(state.checked) {
        if(pizza) {
            pizza.sabor = {
                doisSabores: true,
                primeiroSabor: state.primeiroSabor,
                segundoSabor: state.segundoSabor
            }
        } else {
            pizza = {
                tamanho: undefined,
                borda: undefined,
                sabor: {
                    doisSabores: true,
                    primeiroSabor: state.primeiroSabor,
                    segundoSabor: state.segundoSabor
                }
            }
        }
    } else {
        if(pizza) {
            pizza.sabor = {
                doisSabores: false,
                primeiroSabor: sabor!
            }
        } else {
            pizza = {
                tamanho: undefined,
                borda: undefined,
                sabor: {
                    doisSabores: false,
                    primeiroSabor: sabor!
                }
            }
        }
    }
    props.setCurrentPizza(pizza);
}

const getSabores = (state: any, setState: any) => {
    database.sabores().then(sabores => {
        setState(
            <List component="nav">
                <Divider/>
                {
                    //@ts-ignore
                    sabores.map(sabor => {
                        return (
                            <>
                                <Link to="/confirmation">
                                    <ListItem onClick={() => setSabor(state, sabor)} button>
                                        <ListItemText primary={Sabor[sabor]} />
                                        <ListItemIcon>
                                            <ArrowForward />
                                        </ListItemIcon>
                                    </ListItem>
                                </Link>
                                <Divider />
                            </>
                        )
                    })
                }
            </List>
        )
    });
}

export default SelecionarSabor;

