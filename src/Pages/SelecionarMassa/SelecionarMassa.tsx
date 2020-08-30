import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowBack from '@material-ui/icons/ArrowBack';
import database from '../../Repository/PizzaRepository'
import { RecheioBorda } from '../../MockBackend/models';
import Divider from '@material-ui/core/Divider';
import { IProps } from '../../App';
import { Link } from 'react-router-dom';
import './selecionarMassa.css';
import { useState } from 'react';

const useStyles = makeStyles({
    outerDiv: {
        width: '100%',
        height: '100vh'
    }
});  

var props: IProps;

function SelecionarMassa(_props: IProps) {
    const classes = useStyles();
    let [state, setState] = useState(null);
    getBordas(setState);
    props = _props;
    return (
        <div className={classes.outerDiv}>
            <div className="bg-img-massa"></div>
            <div className="bg-text-massa">
                <h1>Temos as melhores bordas recheadas da região!</h1>
                <p className="subtitle">Se você não sabe qual escolher, a sugestão do cheff é a borda especial de Catupiry Original, você não vai se arrepender ;)</p>
                <br/>
                <p>As opções de bordas que temos disponíveis no momento são as seguintes:</p>
                <div className='list-container'>
                    <List component="nav">
                        <Divider />
                        <Link to="/sabor">
                            <ListItem onClick={() => setMassa(undefined)} button>
                                <ListItemIcon>
                                    <ArrowBack />
                                </ListItemIcon>
                                <ListItemText primary='SEM RECHEIO' />
                            </ListItem>
                        </Link>
                        <Divider />
                        {state}
                    </List>
                </div>
            </div>
        </div>
    );
}

const setMassa = (borda?: RecheioBorda) => {
    let pizza = props.currentPizza;
    if(pizza) {
        if(borda) {
            pizza.borda = {
                recheada: true,
                recheioBorda: borda
            };
        } else {
            pizza.borda = {
                recheada: false
            };
        }
    } else {
        if(borda) {
            pizza = {
                tamanho: undefined,
                sabor: undefined,
                borda: {
                    recheada: true,
                    recheioBorda: borda
                }
            }
        } else {
            pizza = {
                tamanho: undefined,
                sabor: undefined,
                borda: {
                    recheada: false
                }
            }
        }
    }
    props.setCurrentPizza(pizza);
}

const getBordas = (setState: any) => {
    database.bordas().then(bordas => {
        setState(
            //@ts-ignore
            bordas.map(borda => {
                return (
                    <>  
                        <Link to="/sabor">
                            <ListItem onClick={() => setMassa(borda)} button>
                                <ListItemIcon>
                                    <ArrowBack />
                                </ListItemIcon>
                                <ListItemText primary={RecheioBorda[borda]} />
                            </ListItem>
                        </Link>
                        <Divider />
                    </>
                )
            })
        )
    });
}

export default SelecionarMassa;

