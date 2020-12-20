import React from 'react';
import { Button, Card, Grid } from 'semantic-ui-react'
import CardComponent from './CardComponent'
import LeapLogo from '../assets/img/leap_blue_logo.png'
import SmartsalesLogo from '../assets/img/smartSalesLogo.png'
import SmartConsignment from '../assets/img/ro.PNG'
import SoldLogo from '../assets/img/logo.png'

class Work extends React.Component {
    render() {
        return (
            <div  style={{ marginTop:'20px' }}>
                <Card.Group style= {{ display:'flex', justifyContent:'center' }}>
                    <CardComponent
                        name = "Leap"
                        link = "https://mexicosmartsales.factr.me/leap/welcome-page"
                        MetaContetnt = "E-Medical Project"
                        description = "A blockchain based project developed to provide inclusive medical services to doctors, hospitals and patient"
                        content = "Colombia, Mexico"
                        pic = {LeapLogo}
                    />
                    <CardComponent
                        name = "Smartsales"
                        link = "https://smartsales.factr.me/welcome-page"
                        MetaContetnt = "E-Commerce Project"
                        description = "A MERN stack project, designed to accomodate delicate deliveries and standards of health industry in Latin America."
                        content = "Colombia, Peru, Chile"
                        pic = {SmartsalesLogo}
                    />
                    <CardComponent
                        name = "Smart Consignment"
                        link = "https://www.roadlaunch.com/"
                        MetaContetnt = "Logisitics Project"
                        description = "A HyperLedger and smart-contracts based project designed to manage and track real-time multi-location inventory for user"
                        content = "USA, Peru, Colombia"
                        pic = {SmartConsignment}
                    />
                    <CardComponent
                        name = "Sold"
                        link = "https://soldwallet.com/"
                        MetaContetnt = "Real Estate Project"
                        description = "SOLD is used to track deals from start to finish with real-time Smart Contracts, & provides a focused solution for brokerages, agents, and property investors."
                        content = "Canada"
                        pic = {SoldLogo}
                    />
                    <CardComponent
                        name = "Leap"
                        MetaContetnt = "E-Medical Project"
                        description = "A blockchain based project developed to provide inclusive medical services to doctors, hospitals and patient"
                        content = "Colombia, Mexico"
                        pic = {LeapLogo}
                    />
                    <CardComponent
                        name = "Leap"
                        MetaContetnt = "E-Medical Project"
                        description = "A blockchain based project developed to provide inclusive medical services to doctors, hospitals and patient"
                        content = "Colombia, Mexico"
                        pic = {LeapLogo}
                    />
                    <CardComponent
                        name = "Leap"
                        MetaContetnt = "E-Medical Project"
                        description = "A blockchain based project developed to provide inclusive medical services to doctors, hospitals and patient"
                        content = "Colombia, Mexico"
                        pic = {LeapLogo}
                    />
                    <CardComponent
                        name = "Leap"
                        MetaContetnt = "E-Medical Project"
                        description = "A blockchain based project developed to provide inclusive medical services to doctors, hospitals and patient"
                        content = "Colombia, Mexico"
                        pic = {LeapLogo}
                    />
                </Card.Group>
            </div>
        )
    }
}

export default Work;