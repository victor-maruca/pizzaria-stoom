import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForward from '@material-ui/icons/ArrowForward';
import database from '../../Repository/PizzaRepository'
import { Sabor } from '../../MockDatabase/models';
import Divider from '@material-ui/core/Divider';
import './selecionarSabor.css';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
    outerDiv: {
        width: '100%',
        height: '100vh'
    }
});  

function SelecionarSabor() {
    const classes = useStyles();
    return (
        <div className={classes.outerDiv}>
            <div className="bg-img-sabor"></div>
            <div className="bg-text-sabor">
                <h1>Chegou a hora que todo mundo gosta, escolher o Recheio!</h1>
                <p className="subtitle">Todos nossos ingredientes são de altíssima qualidade, então não se preocupe, não tem como errar.</p>
                <br/>
                <p>Esses são os recheios que temos disponíveis:</p>

                <div className='list-container'>
                    <List component="nav">
                        <Divider/>
                        {getSabores()}
                    </List>
                </div>
            </div>
        </div>
    );
}

const getSabores = () => {
    return database.sabores().map(sabor => {
        return (
            <>
                <ListItem button>
                    <ListItemText primary={Sabor[sabor]} />
                    <ListItemIcon>
                        <ArrowForward />
                    </ListItemIcon>
                </ListItem>
                <Divider />
            </>
        )
    });
}

export default SelecionarSabor;

