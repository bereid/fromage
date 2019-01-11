import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import ListItem from '@material-ui/core/ListItem';
import { NavLink } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  menu: {
    position: 'fixed',
    margin: '1em',
  },
  logo: {
    display: 'block',
    width: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
  },
  h3: {
    textAlign: 'center',
  }
}

const Menu = () => (
  <Paper style={styles.menu}>
    <img src="http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Cheese-icon.png" alt="logo" style={styles.logo}></img>
    <h3 style={styles.h3}>Welcome<br /> 
      to Fromage</h3>
    <MenuList>
      <ListItem
        button
        component={NavLink}
        to={'/create'}
        activeStyle={{ background: 'rgba(240, 58, 85, 0.7' }}
        className="nav-link"
      >

        <ListItemText primary='Create Workshop' />
      </ListItem>
      <ListItem
        button
        component={NavLink}
        to={'/dashboard'}
        activeStyle={{ background: 'rgba(240, 58, 85, 0.7' }}
        className="nav-link"
      >
        <ListItemText primary='Dashboard' />
      </ListItem>
    </MenuList>
  </Paper>
);

export default Menu;