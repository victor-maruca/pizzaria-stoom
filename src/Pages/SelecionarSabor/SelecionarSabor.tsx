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
import { SaborPizza } from '../../MockBackend/models';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    outerDiv: {
        width: '100%',
        height: '100vh'
    }
});  
var props: IProps;

function SelecionarSabor(_props: IProps) {
    const [state, setState] = React.useState({
        checked: false,
        primeiroSabor: null,
        segundoSabor: null
    });

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

                <Switch
                    checked={state.checked}
                    onChange={() => exibirSegundoSabor(state, setState)}
                />

                <div className='list-container'>
                    {getSabores(state, setState)}
                </div>
            </div>
        </div>
    );
}

const exibirSegundoSabor = (state: any, setState: any) => {
    setState({checked: !state.checked});
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
    if(state.checked) {
        return (<div>
            <div className="container-dois-sabores">
                <div>
                    <p>Primeiro sabor:</p>
                    <FormControl component="fieldset">
                        <List className="list-dois-sabores" component="nav">
                            <Divider/>
                            <RadioGroup 
                                name="sabor1" 
                                value={state.primeiroSabor} 
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setState({
                                        checked: state.checked,
                                        primeiroSabor: (event.target as HTMLInputElement).value,
                                        segundoSabor: state.segundoSabor
                                    });
                                 }}>
                                {database.sabores().map(sabor => {
                                    return (
                                        <>
                                            <ListItem button>
                                                <ListItemText primary={Sabor[sabor]} />
                                                <ListItemIcon>
                                                    <FormControlLabel value={Sabor[sabor]} control={<Radio />} label='' />
                                                </ListItemIcon>
                                            </ListItem>
                                            <Divider />
                                        </>
                                    )})
                                }
                            </RadioGroup>
                        </List>
                    </FormControl>
                </div>
                <div>
                    <p>Segundo sabor:</p>
                    <FormControl component="fieldset">
                        <List className="list-dois-sabores" component="nav">
                            <Divider/>
                            <RadioGroup 
                                name="sabor2" 
                                value={state.segundoSabor} 
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setState({
                                        checked: state.checked,
                                        primeiroSabor: state.primeiroSabor,
                                        segundoSabor: (event.target as HTMLInputElement).value
                                    });
                                 }}>
                                {database.sabores().map(sabor => {
                                    return (
                                        <>
                                            <ListItem button>
                                                <ListItemText primary={Sabor[sabor]} />
                                                <ListItemIcon>
                                                    <FormControlLabel value={Sabor[sabor]} control={<Radio />} label='' />
                                                </ListItemIcon>
                                            </ListItem>
                                            <Divider />
                                        </>
                                    )})
                                }
                            </RadioGroup>
                        </List>
                    </FormControl>
                </div>
            </div>
            <Link to="/confirmation">
                <Button id="btnOrder" variant='outlined' onClick={() => {setSabor(state, undefined)}}>Confirmar e Pedir</Button>
            </Link>
        </div>);   
    } else {
        return (
            <List component="nav">
                <Divider/>
                {database.sabores().map(sabor => {
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
                    )})
                }
            </List>
        );
    }
}

export default SelecionarSabor;

