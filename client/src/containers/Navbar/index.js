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
                    as={Link}
                    to="/"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                >
                    Home
                </Menu.Item>
                <Menu.Item
                    name="contact"
                    as={Link}
                    to="/contact"
                    active={activeItem === "contact"}
                    onClick={this.handleItemClick}
                >
                    Contact
                </Menu.Item>
                <Menu.Item
                    name="collection"
                    as={Link}
                    to="/collection"
                    active={activeItem === "collection"}
                    onClick={this.handleItemClick}
                >
                    Collection
                </Menu.Item>
                <Menu.Item
                    name="product"
                    as={Link}
                    to="/product"
                    active={activeItem === "product"}
                    onClick={this.handleItemClick}
                >
                    Product
                </Menu.Item>
                <Menu.Item
                    name="cart"
                    as={Link}
                    to="/cart"
                    active={activeItem === "cart"}
                    onClick={this.handleItemClick}
                >
                    Cart
                </Menu.Item>
                <Menu.Item
                    name="checkout"
                    as={Link}
                    to="/checkout"
                    active={activeItem === "checkout"}
                    onClick={this.handleItemClick}
                >
                    Checkout
                </Menu.Item>
                <Menu.Item
                    name="customer"
                    as={Link}
                    to="/customer"
                    active={activeItem === "customer"}
                    onClick={this.handleItemClick}
                >
                    Customer
                </Menu.Item>
                <Menu.Item
                    name="gift-card"
                    as={Link}
                    to="/gift-card"
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