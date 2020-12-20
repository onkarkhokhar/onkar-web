import React from 'react';
import { Tab, Icon, Menu } from 'semantic-ui-react';
import Logo from '../assets/img/O.png';
import Home from './Home';
import About from './AboutMe'
import Skills from './Skills'
import Work from './MyWork'
import './css/style.css'

const panes = [
    {
        menuItem: <img src={Logo} alt="logo" style={{
                        width: "70px",
                        verticalAlign: "bottom",
                        marginRight: '120px'
                    }} />,
        render: () => <Tab.Pane attached={true} style={{ background: 'black', color: 'white', display:'flex', borderColor:'black' }}><Home /></Tab.Pane>,
    },
    {
        menuItem: <Icon link name='home' size='big' style={{ marginTop:'20px', color:'#0BFFFF' }}/>,
        render: () => <Tab.Pane attached={true} style={{ background: 'black', color: 'white', display:'flex', borderColor:'black' }}><Home /></Tab.Pane>,
    },
    {
        menuItem: <Icon link name='user secret' size='big' style={{ marginTop:'20px', color:'#0BFFFF', marginLeft:'50px' }}/>,
        render: () => <Tab.Pane attached={true} style={{ background: 'black', color: 'white', display:'flex', borderColor:'black' }}><About /></Tab.Pane>,
    },
    {
        menuItem: <Icon link name='settings' size='big' style={{ marginTop:'20px', color:'#0BFFFF', marginLeft:'50px' }}/>,
        render: () => <Tab.Pane attached={true} style={{ background: 'black', color: 'white', display:'flex', borderColor:'black' }}><Skills /></Tab.Pane>,
    },
    {
        menuItem: <Icon link name='code' size='big' style={{ marginTop:'20px', color:'#0BFFFF', marginLeft:'50px' }}/>,
        render: () => <Tab.Pane attached={true} style={{ background: 'black', color: 'white', display:'flex', borderColor:'black' }}><Work /></Tab.Pane>,
    },
    {
        menuItem: <Menu.Item key='messages' className="to-right"><a data-weight="25" href="https://www.linkedin.com/in/onkar-singh-333ab9137/" target="_blank"><Icon link name='linkedin' size='big' style={{ color:'#0BFFFF', borderColor:'black' }} /></a></Menu.Item>,
        render: () => <Tab.Pane attached={true} style={{ background: 'black', color: 'white', display:'flex', borderColor:'black' }}><Home /></Tab.Pane>
    },
    {
        menuItem:<Menu.Item key='messages' className="to-right-git"><a data-weight="25" href="https://github.com/onkarkhokhar" target="_blank"><Icon link name='github' size='big' style={{ color:'#0BFFFF', borderColor:'black' }} /></a></Menu.Item> ,
        render: () => <Tab.Pane attached={true} style={{ background: 'black', color: 'white', display:'flex', borderColor:'black' }}><Home /></Tab.Pane>
    },
]
class App extends React.Component {
    state = {
        colors: 'red'

    }


    render() {
        const { color } = this.state.colors;

        return (
            <div style={{ background: 'black', color: 'white' }}>
                <Tab menu={{ color, inverted: true, attached: true, tabular: true }} panes={panes} />
            </div>
        )
    }
}

export default App;
