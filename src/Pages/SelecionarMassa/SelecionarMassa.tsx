import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowBack from '@material-ui/icons/ArrowBack';
import database from '../../Repository/PizzaRepository'
import { RecheioBorda } from '../../MockDatabase/models';
import Divider from '@material-ui/core/Divider';
import './selecionarMassa.css';

const useStyles = makeStyles({
    outerDiv: {
        width: '100%',
        height: '100vh'
    }
});  

function SelecionarMassa() {
    const classes = useStyles();
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
                        <ListItem button>
                            <ListItemIcon>
                                <ArrowBack />
                            </ListItemIcon>
                            <ListItemText primary='SEM RECHEIO' />
                        </ListItem>
                        <Divider />
                        {getBordas()}
                    </List>
                </div>
            </div>
        </div>
    );
}

const getBordas = () => {
    return database.bordas().map(borda => {
        return (
            <>
                <ListItem button>
                    <ListItemIcon>
                        <ArrowBack />
                    </ListItemIcon>
                    <ListItemText primary={RecheioBorda[borda]} />
                </ListItem>
                <Divider />
            </>
        )
    });
}

export default SelecionarMassa;

