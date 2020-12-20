import React from 'react';
import Timeline from '../assets/img/timeline.PNG'
import { Grid, Container } from 'semantic-ui-react'

class About extends React.Component {
    render() {
        return (
            <Container textAlign='justified'>
                <Grid>
                    <Grid.Column>
                        <h1 style={{ marginLeft: '10px', marginTop: '50px', color: '#00f6f6' }}>
                            About me
                        </h1>
                        <h3 style={{ marginLeft: '10px', marginTop: '26px' }}>Software developer passionate about my work, technology and striving to do my best work to make world a better place. 
                        Well-organised person, problem solver, independent employee with high attention to detail. 
                        Fan of Football, Cricket, outdoor activities and, recently, Chess. 
                        Like to spend time reading about technological breakthroughs and learn new skills. 
                        I am driven by urge to get better at things I do and see my work having real time affect and that is why this line of work, 
                        I can see things that I build coming to life and being useful to other people in real time. 
                        There is never a day when I get bored doing what I do. 
                        Everyday is different, each day brimgs with it new challenge. 
                        Someday it can be really challanging bug in backend with payment solutions, 
                        compatibility issue or planning a multi country architecture, other day it can be a creative problem in front end. 
                        I like to be involved end to end in the project, I believe that way I can contribute more and have better inputs for my team.</h3>
                        <h1 style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={Timeline} alt="logo" style={{
                                width: "550px",
                                verticalAlign: "bottom",
                            }} />
                        </h1>
                    </Grid.Column>
                </Grid>
            </Container>    
        )
    }
}

export default About;
