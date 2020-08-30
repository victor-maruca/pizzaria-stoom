import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForward from '@material-ui/icons/ArrowForward';
import database from '../../Repository/PizzaRepository'
import { Tamanho } from '../../MockBackend/models';
import Divider from '@material-ui/core/Divider';
import { IProps } from '../../App';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './selecionarTamanho.css';

const useStyles = makeStyles({
    outerDiv: {
        width: '100%',
        height: '100vh'
    }
});  

var props: IProps;

function SelecionarTamanho(_props: IProps) {
    const classes = useStyles();
    let [state, setState] = useState(null);
    getPizzaSizes(setState);
    props = _props;
    return (
        <div className={classes.outerDiv}>
            <div className="bg-img-tamanho"></div>
            <div className="bg-text-tamanho">
                <h1>Que bom que você nos escolheu pra montar sua pizza favorita!</h1>
                <p className="subtitle">Faremos nosso melhor pra entregar ela quentinha pra você.</p>
                <br/>
                <p>O primeiro passo é escolher o tamanho. Temos os seguintes tamanhos disponíveis:</p>
                <div className='list-container'>
                    <List component="nav">
                        <Divider />
                        {state}
                    </List>
                </div>
            </div>
        </div>
    );
}

const setTamanho = (tamanho: Tamanho) => {
    let pizza = props.currentPizza;
    if(pizza) {
        pizza.tamanho = tamanho;
    } else {
        pizza = {
            tamanho: tamanho,
            sabor: undefined,
            borda: undefined
        }
    }
    props.setCurrentPizza(pizza);
}

const getPizzaSizes = (setState: any) => {
    database.tamanhos().then(tamanhos =>
        setState(
            //@ts-ignore
            tamanhos.map(tamanho => {
                return (<>
                    <Link to="/massa">
                        <ListItem onClick={() => setTamanho(tamanho)} button>
                            <ListItemText primary={Tamanho[tamanho]} />
                            <ListItemIcon>
                                <ArrowForward />
                            </ListItemIcon>
                        </ListItem>
                    </Link>
                    <Divider />
                </>
                );
            })
        )
    );
}

export default SelecionarTamanho;

