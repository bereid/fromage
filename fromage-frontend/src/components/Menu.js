import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItem from '@material-ui/core/ListItem';
import { NavLink } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  menu: {
    position: 'fixed',
    margin: '1em',
  }
}

const Menu = () => (
  <Paper style={styles.menu}>
    <MenuList>
      <ListItem
        button
        component={NavLink}
        to={'/create'}
        activeStyle={{ background: '#FFB74D' }}
        className="nav-link"
      >

        <ListItemText primary='Create Workshop' />
      </ListItem>
      <ListItem
        button
        component={NavLink}
        to={'/dashboard'}
        activeStyle={{ background: '#FFB74D' }}
        className="nav-link"
      >

        <ListItemText primary='Dashboard' />
      </ListItem>
    </MenuList>
  </Paper>
);

export default Menu;