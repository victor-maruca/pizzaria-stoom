import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './confirmation.css';
import Button from '@material-ui/core/Button';
import { IProps } from '../../App';
import { Tamanho, Borda, RecheioBorda, SaborPizza, Sabor } from '../../MockBackend/models';

const useStyles = makeStyles({
    outerDiv: {
        width: '100%',
        height: '100vh'
    }
});  

function Confirmation(props: IProps) {
    const classes = useStyles();

    return (
        <div className={classes.outerDiv}>
            <div className="bg-img-confirmation"></div>
            <div className="bg-text-confirmation">
                <h1>Falta pouco!</h1>
                <p className="subtitle">Só precisamos confirmar seu pedido final e ele já vai pro forno!</p>
                <br/>
                <p>Seu pedido ficou assim:</p>
                <div className='list-container'>
                    <List component="nav">
                        <Divider />
                        <ListItem button>
                            <ListItemText 
                                primary={Tamanho[props.currentPizza!.tamanho!]} 
                                secondary='Tamanho' 
                            />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText 
                                primary={props.currentPizza!.borda!.recheada ? RecheioBorda[props.currentPizza!.borda!.recheioBorda!] : 'Normal' } 
                                secondary='Borda' 
                            />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText 
                                primary={getStringSabor(props.currentPizza!.sabor!)} 
                                secondary='Sabor' 
                            />
                        </ListItem>
                        <Divider />
                    </List>
                </div>
                <Button id='btnOrder' variant='outlined'>
                    CONFIRMAR E FAZER PEDIDO
                </Button>
            </div>
        </div>
    );
}

function getStringSabor(sabor: SaborPizza) {
    let str = '';
    if(sabor.doisSabores) {
        str = `Meia ${Sabor[sabor.primeiroSabor]} | Meia ${Sabor[sabor.segundoSabor!]}`
    } else {
        str = Sabor[sabor.primeiroSabor]
    }
    return str;
}

export default Confirmation;

