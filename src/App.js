import './App.css';

import React, { useEffect, useRef } from 'react'

// import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';


import orange from './orange.png';
import banana from './banana.jpg';
import pear from './pear.jpg';

function App() {

  const tableRowNum = 20;
  const tableColNum = 40;

  function tableCreate(object, numRow, numCol){
    // var body = document.body;
    var tbl  = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '1px solid black';

    for(var i = 0; i < numRow; i++){
        var tr = tbl.insertRow();
        for(var j = 1; j < numCol; j++){
            if(i === numRow && j === numCol){
                break;
            } else {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('Cell'));
                td.style.border = '1px solid black';
                if((i%2===0 && j%2===1) || (i%2===1 && j%2===0)){
                  td.style.backgroundColor="#49BBE9";
                } else{
                  td.style.backgroundColor="#A4DDF4";
                }
            }
        }
    }
    object.appendChild(tbl);
    // body.appendChild(tbl);
  }

  let tabRef = useRef(null);
  useEffect(() => {
    if(tabRef.current)
      tableCreate(tabRef.current, tableRowNum, tableColNum)
  }, [tabRef]
  );

  return (
    <div className="App">
      <header className="App-header" responsive>
        <div>
          Example page header
        </div>
      </header>
      <body className="App-body" responsive> 
        <div>
        <Tabs defaultActiveKey="home" className="MainTabs">
          <Tab eventKey="home" title="Home" tabClassName = "TabCase">
            <div>Home tab of example page</div>
          </Tab>
          <Tab eventKey="images" title="Images" tabClassName = "TabCase">
            {/* <div>Images</div> */}
            <Tab.Container id="image-tabs" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Rounded</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Circle</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Thumbnail</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Fluid</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content className="imgTab">
                    <Tab.Pane eventKey="first">
                      <Image src={orange} rounded />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Image src={orange} roundedCircle />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Image src={orange} thumbnail />
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Image src={orange} fuid />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Tab>
          <Tab eventKey="carousel" title="Carousel" tabClassName = "TabCase">
            <Carousel className="CarouselClass">
              <Carousel.Item>
                <img
                  className="CarouselImg"
                  src={banana}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="CarouselImg"
                  src={orange}
                  alt="Second slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="CarouselImg"
                  src={pear}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Tab>
          <Tab eventKey="table" title="Table" tabClassName = "TabCase">
            <div ref={tabRef}
            style={{
              width: "100vw",
              height: "75vh",
              overflow: "scroll"
            }}></div>
          </Tab>
        </Tabs>
        </div>
      </body>
      <footer className="App-footer" responsive>
        <div align="right"
        style={{
          marginRight: "10px"
        }}>
          Glazko Andrey K4113c, PIS1.2
        </div>
      </footer>
    </div>
  );
}

export default App;
