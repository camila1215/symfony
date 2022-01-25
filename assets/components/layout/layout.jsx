/*import '../../styles/layout.scss';
import React, {useState , useEffect} from 'react';
import instance from "./instance";
import Card from '@mui/material/Card';
import Loader from "./loader";
import { Box, CardContent, Icon, Modal, Paper, Tab, Tabs, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";

export const icon= {
    "AUX.ENFERMERÍA": 'healing',
    "COORD.CULTURA": 'accessibility_new',
    "COORD.DEPORTES": 'sports',
    "TRAB.SOCIAL": 'groups',
    "MEDICO GENERAL": 'local_hospital',
    "PSICÓLOGO": 'psychology',
    "ODONTÓLOGO": 'mood',
    "ADMINISTRADOR": 'settings',
    "ASESOR ESPIRITUAL": 'spa',
    "COORD. GIMNASIO": 'fitness_center',
    "SEROLOGÍA": 'security'
};

export const Header = () =>{
    return(
        <header className={'header'}>
            <Box className={'img'}><img src="https://publicimages.ufpso.edu.co/img/ufpso/logo/actual/logoufps.png"/></Box>
        </header>

    )
}

const useStyles = makeStyles(theme => ({
    iconHead: { 
        "& .MuiTabs-indicator": {backgroundColor: "white"},
        "& .Mui-selected" : {color :'white !important' , background : '#cf080d' }
    }
  }))

export const HeaderUser = ({open}) => {
    const [loader, setLoader] = useState(true);
    const [menuHeader, setMenuHeader] = useState([]);
    const a = window.location.pathname.split('/');
    const  classes = useStyles();
    useEffect(() => {
        setLoader(true);
        instance.get('/api/informacionPersonal').then(res=>{
            setMenuHeader(res.data);
            setLoader(false);
        }); 
      }, []);
      if(loader){
        return <Loader />
      }
    return(
        <header className={'header'}>
            <Box className={'img'}><img src="https://publicimages.ufpso.edu.co/img/ufpso/logo/actual/logoufps.png"/></Box>
                <Tabs scrollButtons="auto"  
                    className={classes.iconHead}
                    variant="scrollable" sx={{ margin:'0 auto' }} value={a[1]} onChange={(e, n)=>{
                    window.location =  '/'+e.currentTarget.dataset.valor;
                    }} >
                {menuHeader.map(res=>{
                    return (<Tab label={<Typography style={{fontSize: '0.9em'}} component={'span'}>{res.PROFECION}</Typography>} 
                                data-valor={res.ENLACE}
                                value={res.ENLACE.split('/')[0]}
                                icon={<Icon >{icon[res.PROFECION]}</Icon>} 
                                key={'tab'+ res.PROFECION}
                                sx={{color: 'white', fontSize: '0.7em',minHeight:'auto' , paddingTop: '0' , paddingBottom: '0'}}
                                />);
                })}
            </Tabs>
            <Box sx={{minWidth:(!open) ? '3.5em' : '16.5em' }} />

        </header>
    )
}
export const  Footer = () =>  {
    return (
        <footer className={'footer'}>
            <div style={{borderRight: '1px solid #a0a0a0'}}>
                <img style={{maxWidth: "2.5em"}} src={require('../../images/ordenador2.svg')} />
                <div className={'desarrollado'}>
                    <span>Desarrollado por:</span>
                    <span>DIVISIÓN DE SISTEMAS - 2021 </span>
                </div>
            </div>
            <div className={"logoFoot"}>
                <img src={require('../../images/ufpso/logoufps2.png')}/>
            </div>
        </footer>
    )
}

export function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}
        >
            <Card> 
                <CardContent>
                    {value === index && ( children)}     
                </CardContent>
            </Card>
        </Box>
    );
}

export const  b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    let byteCharacters = atob(b64Data);
    let byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);
        let byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        byteArrays.push(new Uint8Array(byteNumbers));
    }
    let blob = new Blob(byteArrays, {type: contentType});
    return URL.createObjectURL(blob);
};

export function ModalDefault({title,content ,close ,  tam = 'bigFlot'}){
    const [open , setOpen] = useState(true);
    return (
        <Modal open={open} onClose={() => { setOpen(false); close()}} className={"modalCenter"} >
            <Paper className= {tam} >
                <Box className={"modalHeader"} >
                    <Box className={"iconLateral"}><Box /></Box>
                    <Typography component={'h3'} >{title}</Typography>
                </Box>
                <Box className={"modalContent"}>
                    {content}
                </Box>
            </Paper>
        </Modal>
    );
}
*/