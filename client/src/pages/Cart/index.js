import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class Cart extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column>
                    <Header as="h1">Cart</Header>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Cart;