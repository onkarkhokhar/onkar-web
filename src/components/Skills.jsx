import React from 'react';
import { Grid, Container } from 'semantic-ui-react'
import SkillAndExp from '../assets/img/skillandexperience.PNG'
class Skills extends React.Component {
    componentDidMount = () => {
        eval(
            `try {
               TagCanvas.Start(
                 'myCanvas',
                 '',
                 {textColour: 'white' ,outlineColour: '#0000'}
               );
             }
             catch(e) {
               document.getElementById('myCanvasContainer').style.display = 'none';
             }`
           );
    }
    render() {
        return (
            <Container textAlign='justified'>
                <Grid columns={2} style={{ color: 'white' }}>
                    <Grid.Column xs={12} sm={12} md={6}>
                        <h1 style={{  marginLeft: '100px', marginTop: '50px', color: '#00f6f6' }}>
                            <img src={SkillAndExp} alt="logo" style={{
                                width: "300px",
                                verticalAlign: "bottom",
                            }} />
                        </h1>
                        <Container textAlign='justified'>
                            <h4 style={{ marginLeft: '10px' }}> Developer specializing in full-stack development facilitating object-oriented programming and
                            robust experience in open source frameworks such as ReactJs, React-Native, NodeJs, Django and data-driven projects. Experience working with blockchain and smart contracts based web applications, using Ethereum,Solidity and Steller blockchain. 
                            Designed, developed and implemented Rest APIs and MVC architecture and built Single page applications.
                            Delievered production projects with multi-country architecture, complex payment solutions and localization specfic to particular region. Fast learner, accustomed to working in agile teams and individually in remote or office environment.
                            Experience in SDLC preparing Requirement specification documentation, effective problem-solving skills, outstanding interpersonal skills and verbal communication skills.</h4>
                        </Container>
                    </Grid.Column>
                    <Grid.Column  xs={12} sm={12} md={6}>
                    <Container textAlign='justified'>
                        <div id="myCanvasContainer">
                            <canvas width="520" height="520" id="myCanvas">
                                <ul>
                                    <li>
                                        <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">HTML 5</a>
                                    </li>
                                    <li><a data-weight="25" href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">CSS 3</a></li>
                                    <li><a data-weight="25" href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a></li>
                                    <li><a data-weight="24" href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank">REST</a></li>
                                    <li><a data-weight="21" href="https://en.wikipedia.org/wiki/Ajax_(programming)" target="_blank">AJAX</a></li>
                                    <li><a data-weight="14" href="https://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a></li>
                                    <li><a data-weight="13" href="https://en.wikipedia.org/wiki/XML" target="_blank">XML</a></li>
                                    <li><a data-weight="27" href="https://en.wikipedia.org/wiki/React_(web_framework)" target="_blank">ReactJs</a></li>
                                    <li><a data-weight="26" href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">Python</a></li>
                                    <li><a data-weight="22" href="https://en.wikipedia.org/wiki/Django_(web_framework)" target="_blank">Django</a></li>
                                    <li><a data-weight="22" href="https://en.wikipedia.org/wiki/MySQL" target="_blank">MySQL</a></li>
                                    <li><a data-weight="21" href="https://en.wikipedia.org/wiki/Node.js" target="_blank">Node JS</a></li>
                                    <li><a data-weight="17" href="https://en.wikipedia.org/wiki/Git" target="_blank">Git</a></li>
                                    <li><a data-weight="20" href="https://simple.wikipedia.org/wiki/Blockchain" target="_blank">Blockchain</a></li>
                                    <li><a data-weight="23" href="https://simple.wikipedia.org/wiki/Ethereum" target="_blank">Ethereum</a></li>
                                    <li><a data-weight="15" href="https://en.wikipedia.org/wiki/Solidity" target="_blank">Solidity</a></li>
                                    <li><a data-weight="20" href="https://en.wikipedia.org/wiki/Stellar_(payment_network)" target="_blank">Stellar</a></li>
                                    <li><a data-weight="19" href="https://en.wikipedia.org/wiki/React_Native" target="_blank">React-Native</a></li>
                                    <li><a data-weight="19" href="https://www.rinkeby.io/" target="_blank">Rinkeby</a></li>
                                    <li><a data-weight="19" href="http://mongoosejs.com/" target="_blank">Mongo DB</a></li>
                                    <li><a data-weight="19" href="https://www.geeksforgeeks.org/mern-stack/" target="_blank">MERN</a></li>
                                    <li><a data-weight="19" href="https://www.openpay.co/" target="_blank">Openpay</a></li>
                                    <li><a data-weight="19" href="http://expressjs.com/" target="_blank">Express.js</a></li>
                                    <li><a data-weight="19" href="https://www.entrepreneur.com/article/286006" target="_blank">Payment Solutions</a></li>
                                    <li><a data-weight="19" href="https://www.npmjs.com/" target="_blank">npm</a></li>
                                    <li><a data-weight="19" href="https://www.postgresql.org/" target="_blank">PostGresSQL</a></li>
                                    <li><a data-weight="19" href="https://mochajs.org/" target="_blank">Mocha</a></li>
                                    <li><a data-weight="19" href="https://aws.amazon.com/" target="_blank">AWS</a></li>
                                    <li><a data-weight="13" href="https://jwt.io/" target="_blank">JWT</a></li>
                                    <li><a data-weight="14" href="https://en.wikipedia.org/wiki/Application_programming_interface" target="blank">API</a></li>
                                    <li><a data-weight="19" href="https://www.apachefriends.org/download.html" target="_blank">Xampp</a></li>
                                </ul>
                            </canvas>
                        </div>
                        </Container>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default Skills;
