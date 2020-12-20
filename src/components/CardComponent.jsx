import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleImageCard = ({ name, link, MetaContetnt, description, content, pic }) => (
  <Card color='teal'>
    <Image src={pic} wrapped ui={false} />
    <Card.Content>
      <Card.Header style={{color: 'teal'}}><a data-weight="25" href={link} target="_blank">{name}</a></Card.Header>
      <Card.Meta style={{color: '#FF69B4'}}>{MetaContetnt}</Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='world' />
        {content}
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleImageCard