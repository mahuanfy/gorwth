import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col } from 'antd';
import moment from 'moment';
const dateFormat = 'YYYY-MM-DD';

class ShowDiary extends Component {
    render() {
        const diaries = this.props.diaries.map((item, index) => {
            return (

                <div key={index} style={{ marginTop: 20 }}>
                    {
                        <Card title={moment(item.time).format(dateFormat) + "的成长日志"} style={{ margin: "10px" }}>
                            <div>
                                <Row >
                                    <Col >
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
