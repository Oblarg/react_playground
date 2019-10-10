import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

interface NavPaneProps {
  open: boolean;
  items: LinkElement[];
  onClose: () => void;
}

interface LinkElement {
  path: string;
  name: string;
}

export const NavPane = React.memo<NavPaneProps>((props) => {
  return (
    <Drawer
      open={props.open}
      onClose={props.onClose}
    >
      <List>
        {props.items.map((linkElement) =>
          <ListItem key={linkElement.name}>
            <Button component={Link} to={linkElement.path}>
              {linkElement.name}
            </Button>
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