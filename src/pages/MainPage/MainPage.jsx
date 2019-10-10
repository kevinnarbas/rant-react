import React from 'react'
import SearchList from '../../components/SearchList/SearchList'
import {Container, Row, Col} from 'react-bootstrap'

const MainPage = () => (
  <>
    <h1>RANT</h1>
    <Container>
      <Row>
        <Col>
          <SearchList />
        </Col>
      </Row>
    </Container>
  </>
)

export default MainPage