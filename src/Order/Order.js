import React from "react";
import styled from "styled-components";
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from "../FoodDialog/FoodDialog";
import { formatPrice } from "../Data/FoodData";
import { getPrice } from "../FoodDialog/FoodDialog";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid  from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Checkbox, FormControlLabel, Container } from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  ${({ editable }) =>
    editable
      ? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  `
      : `
    pointer-events: none; 
  `}
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`;

export function Order({ orders, setOrders, setOpenFood}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    };
    const handleClick = () => {
      setOpen(true);
    };

  const handleClose = (event, reason) => {
    setOpen(false);
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);
  const Delivery = 5;
  const tax = subtotal * 0.07;
  const total = subtotal + tax + Delivery;

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  }; 

  return (
    
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Your order's looking pretty empty.</OrderContent>
      ) : (
        <OrderContent>
          {" "}
          <OrderContainer> Your Order: </OrderContainer>{" "}
          {orders.map((order, index) => (
            <OrderContainer editable>
              <OrderItem
                onClick={() => {
                  setOpenFood({ ...order, index });
                }}
              >
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteItem(index);
                  }}
                >
                  🗑
                </div>
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
              <DetailItem>
                {order.toppings
                  .filter((t) => t.checked)
                  .map((topping) => topping.name)
                  .join(", ")}
              </DetailItem>
              {order.choice && <DetailItem>{order.choice}</DetailItem>}
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Sub-Total</div>
              <div>{formatPrice(subtotal)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Tax</div>
              <div>{formatPrice(tax)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Delivery</div>
              <div>{formatPrice(Delivery)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Total</div>
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
        </OrderContent>
      )}
      <DialogFooter>
        <div>
          <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
            Buy It Now
          </Button>
          </div>
      </DialogFooter>
      <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            
            <DialogTitle id="alert-dialog-title">
              {"important to read before continuing"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Insert your personal data
                <br>
                </br>
                <Grid container spacing={3}>
               <Grid item xs={12} sm={6}>
               
                <TextField
                 required
                 id= "firstName"
                 name="firstName"
                 label="FirstName"
                 fullWidth
                 autoComplete/>
             </Grid>
             <Grid item xs={12} sm={6}>
             <TextField
                 required
                 id= "lastName"
                 name="lastName"
                 label="LastName"
                 fullWidth
                 autoComplete/>
             </Grid>
             <Grid item xs={12} sm={6}>
             <TextField
                 required
                 id= "address1"
                 name="address1"
                 label="Address line 1"
                 fullWidth
                 autoComplete="billing address-line1"/>
             </Grid>
             <Grid item xs={12} sm={6}>
             <TextField
                 required
                 id= "numberphone"
                 name="numberphone"
                 label="Numberphone"
                 fullWidth
                 autoComplete/>
             </Grid>
          </Grid>
          <br></br>
          Are you sure you want to proceed with your purchase?
                <OrderContent>
                  {" "}
                  <OrderContainer> Your Order: </OrderContainer>{" "}
                  <OrderContainer>
                    <OrderItem>
                      <div />
                      <div>Sub-Total</div>
                      <div>{formatPrice(subtotal)}</div>
                    </OrderItem>
                    <OrderItem>
                      <div />
                      <div>Tax</div>
                      <div>{formatPrice(tax)}</div>
                    </OrderItem>
                    <OrderItem>
                      <div />
                      <div>Delivery</div>
                      <div>{formatPrice(Delivery)}</div>
                    </OrderItem>
                    <OrderItem>
                      <div />
                      <div>Total</div>
                      <div>{formatPrice(total)}</div>
                    </OrderItem>
                  </OrderContainer>
                </OrderContent>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                NO
              </Button>  
              <Button variant="outlined" color="primary" onClick={handleClick} >
                Yes
              </Button>
              </DialogActions> 
           </Dialog>
          
    </OrderStyled>
  );
  
}
  /*    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success">
    This is a success message!
  </Alert>
</Snackbar>
</div>*/
