import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navbar extends Component {

    state = {};

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    };

    render() {

        const { activeItem } = this.state;

        return (
            <Menu>
                <Menu.Item
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                >
                    Home
                </Menu.Item>
                <Menu.Item
                    name="contact"
                    active={activeItem === "contact"}
                    onClick={this.handleItemClick}
                >
                    Contact
                </Menu.Item>
                <Menu.Item
                    name="collection"
                    active={activeItem === "collection"}
                    onClick={this.handleItemClick}
                >
                    Collection
                </Menu.Item>
                <Menu.Item
                    name="product"
                    active={activeItem === "product"}
                    onClick={this.handleItemClick}
                >
                    Product
                </Menu.Item>
                <Menu.Item
                    name="cart"
                    active={activeItem === "cart"}
                    onClick={this.handleItemClick}
                >
                    Cart
                </Menu.Item>
                <Menu.Item
                    name="checkout"
                    active={activeItem === "checkout"}
                    onClick={this.handleItemClick}
                >
                    Checkout
                </Menu.Item>
                <Menu.Item
                    name="customer"
                    active={activeItem === "customer"}
                    onClick={this.handleItemClick}
                >
                    Customer
                </Menu.Item>
                <Menu.Item
                    name="gift-card"
                    active={activeItem === "gift-card"}
                    onClick={this.handleItemClick}
                >
                    Gift Card
                </Menu.Item>
            </Menu>
        );
    };
};

export default Navbar;