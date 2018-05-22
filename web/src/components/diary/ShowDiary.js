import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col } from 'antd';

class ShowDiary extends Component {
    render() {
        const diaries = this.props.diaries.map((item, index) => {
            return (

                <div key={index} style={{ marginTop: 20 }}>
                    {

                        <Card title={item.time} style={{ margin: "10px" }}>
                            <div>
                                <Row >
                                    <Col offset={18}>
                                        <span>
                                        {item.content}                                            
                                        </span>
                                    </Col>
                                </Row>
                            </div>
                        </Card>

                        
                    }
                </div>)
        });

        return (
            <div>
                {diaries}
            </div>
        )
    }
}
export default ShowDiary;
