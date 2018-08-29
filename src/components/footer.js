import React from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'reactstrap'

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="col-sm-3">.col 1</Col>
          <Col className="col-sm-3">.col 2</Col>
          <Col className="col-sm-3">.col 3</Col>
          <Col className="col-sm-3">.col 4</Col>
        </Row>
        <Row>
          <Col className="col text-center">
            <p>
              &copy;
              {new Date().getFullYear()} EadsGraphic
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Footer
