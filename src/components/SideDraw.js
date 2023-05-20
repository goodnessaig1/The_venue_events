import React from 'react'
import { Drawer, List, ListItem } from '@material-ui/core';
import { scroller } from 'react-scroll';

const sideDraw = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        })
        props.onClose(false)
    }

  return (
    <Drawer
    anchor='right'
    open={props.open}
    onClose={()=> props.onClose(false)}
    >

        <List component="nav">
            <ListItem Button onClick={()=> scrollToElement('Featured')}>
                Event starts in
            </ListItem>

            <ListItem Button onClick={()=> scrollToElement('venue_info')}>
                Venue Info
            </ListItem>

            <ListItem Button onClick={()=> scrollToElement('Highlights')}>
                Highlights
            </ListItem>
            <ListItem Button onClick={()=> scrollToElement('pricing')}>
                Pricing
            </ListItem>
            <ListItem Button onClick={()=> scrollToElement('location')}>
                Location
            </ListItem>
        </List>

    </Drawer>
  );
};

export default sideDraw;