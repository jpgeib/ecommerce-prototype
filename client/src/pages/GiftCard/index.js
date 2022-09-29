import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class GiftCard extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column>
                    <Header as="h1">GiftCard</Header>
                </Grid.Column>
            </Grid>
        );
    }
}

export default GiftCard;