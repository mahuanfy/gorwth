import React, { Component } from 'react';
import { Card, Input, DatePicker, Row, Col, Button } from 'antd';

const { TextArea } = Input;
const dateFormat = 'YYYY/MM/DD';

class AddDiary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.time,
            content: '',
            userId:this.props.userId
        }
    }
 

    render() {
        const diary = {...this.state};
        return (
            <div>
                <Card title={this.props.title} style={{ margin: "10px" }}>
                    <div>
                        <Row>
                            <Col span={3}></Col>
                            <Col span={18}>时间：<DatePicker defaultValue={this.props.time} format={dateFormat} onChange={(date, dateString) => {
                                this.setState({ time: dateString })
                            }} />
                            </Col>
                            <Col span={3}></Col>
                        </Row>
                        <Row style={{ margin: "10px 0px" }}>
                            <Col span={3}></Col>
                            <Col span={18}>内容：<TextArea placeholder={this.props.content} autosize={{ minRows: 4, maxRows: 6 }} onChange={e =>
                                this.setState({content: e.target.value})
                            } /></Col>
                            <Col span={3}></Col>
                        </Row>
                        <Row >
                            <Col offset={18}>
                                <Button type="primary" style={{ margin: "0 20px" }} onClick={this.props.submitDiary.bind(this, diary,this.props.userId)}>提交</Button>
                                <Button type="primary">重置</Button>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </div >
        )
    }
}

export default AddDiary;