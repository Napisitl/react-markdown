import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ReactMarkdown from "react-markdown";
import MarkdownPreview from '@uiw/react-markdown-preview';
import gfm from 'remark-gfm'
const axios = require('axios');
class FAQ extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      content: null,
      // urlGitHubFile: "https://github.com/Napisitl/react-markdown/blob/master/docs/APIProjects.md"
      urlGitHubFile: "https://sslabs-utility.s3-ap-southeast-1.amazonaws.com/docs/APIProjects.md"
    }
  }

  //https://github.com/Napisitl/react-markdown/blob/master/docs/other_file.md
  //https://sslabs-utility.s3-ap-southeast-1.amazonaws.com/docs/APIProjects.md
  //https://github.com/Napisitl/react-markdown/blob/master/docs/FAQs.md
  //urlGitHubFile: "https://bryantson.github.io/reactjs-tutorials/react-markdown-viewer/docs/walkthrough.md"

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
                  {/* <ReactMarkdown escapeHtml={true} source={content} /> */}
                  {/* <MarkdownPreview source={content} /> */}
                  {/* <ReactMarkdown
                    className="result"
                    source={content}
                    skipHtml={false}
                    escapeHtml={false}
                  // plugins={[toc]}
                  /> */}
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
