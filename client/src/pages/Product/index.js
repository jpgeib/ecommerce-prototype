import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class Product extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column>
                    <Header as="h1">Product</Header>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Product;