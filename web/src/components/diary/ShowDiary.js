import React, {Component} from 'react';
import {Card, Row, Col, Popconfirm, message, Tooltip} from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';


class ShowDiary extends Component {
    confirm(diaryId) {
        const userId = this.props.userId;
        this.props.deleteDiary(diaryId, userId);
        message.success('Delete Success!');
    }
    cancel(e) {
        console.log(e);
        // message.error('Click on No');
    }

    render() {
        const text = <span>Delete Diary!</span>;
        const diaries = this.props.diaries.map((item, index) => {
            return (

                <div key={index} style={{marginTop: 20}}>
                    {
                        <Card title={moment(item.time).format(dateFormat) + "的成长日志"} style={{margin: "10px"}}
                              extra={<Popconfirm title="Are you sure delete this diary?" onConfirm={this.confirm.bind(this,item.id)}
                                                 onCancel={this.cancel.bind(this)}
                                                 okText="Yes" cancelText="No">
                                  <Tooltip placement="topLeft" title={text}>
                                      {/*<Button>Delete</Button>*/}
                                      <a href="">Delete</a>
                                  </Tooltip>

                              </Popconfirm>}>

                            <div>
                                <Row>
                                    <Col>
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
