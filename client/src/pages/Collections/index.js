import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class Collection extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column>
                    <Header as="h1">Collection</Header>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Collection;