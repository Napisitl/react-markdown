import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ReactMarkDown from "react-markdown";
const axios = require('axios');
class FAQ extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      content: null,
      urlGitHubFile: "https://github.com/serverless/serverless/blob/master/docs/getting-started.md"
    }
  }

  // urlGitHubFile: "https://bryantson.github.io/reactjs-tutorials/react-markdown-viewer/docs/walkthrough.md"
  componentDidMount() {

    axios.get(this.state.urlGitHubFile)
      .then(response => {
        console.log("Get ReadMe Sccess ", response.data);
        this.setState({ content: response.data })
      }).catch(error => {
        console.error("Error in axios call readme file")
      });

  }

  render() {

    const { content } = this.state;

    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12}>
              <Card>
                <CardBody>
                  {/* <ReactMarkDown source={content} /> */}
                  <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default FAQ;
