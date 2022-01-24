import React from 'react';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@mui/material/AppBar';
import muiTabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LoginForm from './Login/Login'
import RegForm from './Registration/Registration'
import styled from 'styled-components'
import styles from '../../../styles/AuthModal.module.scss';
import {Button} from '@material-ui/core';


const Tabs = styled(muiTabs)({
  background: '#303F9F'
})


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function AuthModal(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  

  return (
    <div className={styles.modal}>
      <div className={styles.modal__container}>
        <Box sx={{ bgcolor: 'background.paper', width: 440 }}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab color="primary" label="Вход" {...a11yProps(0)} />
              <Tab label="Регистрация" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <Box sx={{ bgcolor: 'background.paper', width: 440, padding: '20px' }}>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <LoginForm setIsVisibleModal={props.setIsVisibleModal}/>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <RegForm setIsVisibleModal={props.setIsVisibleModal}/>
              </TabPanel>
            </SwipeableViews>
          </Box>
          <Button fullWidth onClick={() => props.setIsVisibleModal(false)}>Закрыть окно</Button>
        </Box>
      </div>
    </div>
  );
}
