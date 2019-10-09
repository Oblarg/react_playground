import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';

interface NavigationDrawerProps {
    show: boolean;
    items: LinkElement[];
    close: () => void;
}

interface LinkElement {
    path: string;
    name: string;
}

export const NavigationDrawer = React.memo<NavigationDrawerProps>((props) => {
    return (
        <Drawer
            open={props.show}
            onClose={props.close}
        >
            <List>
                {{ props.items }.map((linkElement) =>
                    <ListItem key={linkElement.name}>
                        <Link to={linkElement.path}>
                            <Button>
                                {linkElement.name}
                            </Button>
                        </Link>
                    </ListItem>)}
            </List>
        </Drawer>

    )
})