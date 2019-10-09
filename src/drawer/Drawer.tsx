import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

interface NavigationDrawerProps {
  open: boolean;
  items: LinkElement[];
  onClose: () => void;
}

interface LinkElement {
  path: string;
  name: string;
}

export const NavigationDrawer = React.memo<NavigationDrawerProps>((props) => {
  return (
    <Drawer
      open={props.open}
      onClose={props.onClose}
    >
        <List>
          {props.items.map((linkElement) =>
            <ListItem key={linkElement.name}>
              <Link to={linkElement.path}>
                <Button>
                  {linkElement.name}
                </Button>
              </Link>
            </ListItem>)}
        </List>
      <Button
        onClick={props.onClose}
      >
        Close nav pane
      </Button>
    </Drawer>

  )
})