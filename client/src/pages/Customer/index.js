import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class Customer extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column>
                    <Header as="h1">Customer</Header>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Customer;