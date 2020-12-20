import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

class LoaderExampleSizes extends React.Component {
    render() {
        return (
            <div>
            {
                this.props.visible &&
                    <Segment>
                        <Dimmer active>
                            <Loader size='mini'>Sending your message</Loader>
                        </Dimmer>
                    </Segment>

            }
            </div>
        )
    }
};

export default LoaderExampleSizes;