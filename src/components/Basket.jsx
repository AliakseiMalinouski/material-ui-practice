import { ShoppingBasket } from "@mui/icons-material";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";
import BasketItem from "./BasketItem";

export const Basket = (props) => {

    const {
        cartOpen,
        closeCart = Function.prototype,
        order,
        removeFromOrder,
    } = props;

    return (
        <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary='Корзина'/>
                </ListItem>
                <Divider/>
                {!order.length ? 
                <ListItem>Корзина</ListItem>   :
                <>
                    {
                        order.map((item) => (
                            <BasketItem key={item.key} removeFromOrder={removeFromOrder} {...item}/>
                        )) 
                    }
                    <Divider/>
                    <ListItem>
                        <Typography>
                            Total
                            {
                                order.reduce((acc,item) => {
                                    return acc + item.price + item.quantity
                                }, 0)
                            }
                        </Typography>
                    </ListItem>
                </>
            }
            </List>
        </Drawer>
    )
}