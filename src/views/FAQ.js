import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'
const axios = require('axios');
class FAQ extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      content: null,
      urlGitHubFile: "https://bryantson.github.io/reactjs-tutorials/react-markdown-viewer/docs/walkthrough.md"
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

  // render(<ReactMarkdown># Hello, * world * !</ReactMarkdown >, document.body)
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
                  <ReactMarkdown escapeHtml={false} source={content} />
                  {/* <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div> */}
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
