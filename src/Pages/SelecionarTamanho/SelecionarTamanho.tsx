import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForward from '@material-ui/icons/ArrowForward';
import database from '../../Repository/PizzaRepository'
import { Tamanho } from '../../MockDatabase/models';
import Divider from '@material-ui/core/Divider';
import './selecionarTamanho.css';

const useStyles = makeStyles({
    outerDiv: {
        width: '100%',
        height: '100vh'
    }
});  

function SelecionarTamanho() {
    const classes = useStyles();
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
                        {getPizzaSizes()}
                    </List>
                </div>
            </div>
        </div>
    );
}

const getPizzaSizes = () => {
    return database.tamanhos().map(tamanho => {
        console.log(tamanho);
        return (
            <>
                <ListItem button>
                    <ListItemText primary={Tamanho[tamanho]} />
                    <ListItemIcon>
                        <ArrowForward />
                    </ListItemIcon>
                </ListItem>
                <Divider />
            </>
        )
    });
}

export default SelecionarTamanho;

