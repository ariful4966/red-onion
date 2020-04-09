import React from "react";

import { Container } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { Tabs } from "@yazanaabed/react-tabs";
import Breakfast from "../FoodTab/Breakfast";
import Lunch from "../FoodTab/Lunch";
import Dinner from "../FoodTab/Dinner";
import { Link } from "react-router-dom";


const FoodSection = () => {
    return (
        <div>
            <Container>
                <div className="foodMenu">
                    <Tabs
                        activeTab={{
                            id: "tab1"
                        }}
                    >
                        <Tabs.Tab id="tab3" title="Breakfast">
                            <div style={{ padding: 10 }}><Breakfast></Breakfast></div>
                        </Tabs.Tab>
                        <Tabs.Tab id="tab1" title="Lunch">
                            <div style={{ padding: 10 }}><Lunch></Lunch></div>
                        </Tabs.Tab>
                        <Tabs.Tab id="tab2" title="Dinner">
                            <div style={{ padding: 10 }}><Dinner></Dinner></div>
                        </Tabs.Tab>
                    </Tabs>
                    <Button variant="contained"
                        color="default">
                            <Link to="/checkout">Checkout Your Food</Link>
                        </Button>
                </div>
            </Container>
        </div>
    );
};

export default FoodSection;