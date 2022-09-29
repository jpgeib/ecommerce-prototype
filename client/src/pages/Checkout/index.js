import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class Checkout extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column>
                    <Header as="h1">Checkout</Header>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Checkout;