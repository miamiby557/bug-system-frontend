import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Card, Divider} from 'antd';
import {query} from "./actions";
import {getPrincipal} from "../../lib/identity";

class Home extends PureComponent {
    componentDidMount() {
        const {dispatch} = this.props;
        const p = getPrincipal();
        dispatch(query(p.id));
    }

    render() {
        const {
            mainDto
        } = this.props;
        return (
            <div>
                <div>
                    {/*<Divider orientation="left">所有未解决的任务</Divider>*/}
                    <Divider/>
                    <h3>所有未解决的任务</h3>
                    <div style={{background: '#ECECEC', padding: '30px', float: 'left'}}>
                        <Card title="执行器" bordered={false} style={{width: 300}} extra={<a href="/executor">详情</a>}>
                            <h2>{mainDto.executorBugCount || 0} 个</h2>
                            <h1>其中紧急 {mainDto.executorBugCountEmergency || 0} 个</h1>
                        </Card>
                    </div>
                    <div style={{background: '#ECECEC', padding: '30px', float: 'left'}}>
                        <Card title="设计器" bordered={false} style={{width: 300}} extra={<a href="/designer">详情</a>}>
                            <h2>{mainDto.designerBugCount || 0} 个</h2>
                            <h1>其中紧急 {mainDto.designerBugCountEmergency || 0} 个</h1>
                        </Card>
                    </div>
                    <div style={{background: '#ECECEC', padding: '30px', float: 'left'}}>
                        <Card title="管控平台" bordered={false} style={{width: 300}} extra={<a href="/oc">详情</a>}>
                            <h2>{mainDto.ocBugCount || 0} 个</h2>
                            <h1>其中紧急 {mainDto.ocBugCountEmergency || 0} 个</h1>
                        </Card>
                    </div>
                    {/*<Divider orientation="left">所有关于我未解决的任务</Divider>*/}
                    <Divider/>
                    <h3>关于我的任务</h3>
                    <div style={{background: '#ECECEC', padding: '30px', float: 'left'}}>
                        <Card title="所有未解决任务" bordered={false} style={{width: 300}}>
                            <h2>{mainDto.myBugCount || 0} 个</h2>
                            <h1>其中紧急 {mainDto.myBugCountEmergency || 0} 个</h1>
                            <h1>其中设计器 {mainDto.myBugCountDesigner || 0} 个</h1>
                            <h1>其中执行器 {mainDto.myBugCountExecutor || 0} 个</h1>
                            <h1>其中管控平台 {mainDto.myBugCountOc || 0} 个</h1>
                        </Card>
                    </div>
                    <div style={{background: '#ECECEC', padding: '30px', float: 'left'}}>
                        <Card title="本周已修复" bordered={false} style={{width: 300}}>
                            <h2>{mainDto.myBugWeekFinishedCount || 0} 个</h2>
                            <h1>其中紧急 {mainDto.myBugWeekFinishedCountEmergency || 0} 个</h1>
                            <h1>其中设计器 {mainDto.myBugWeekFinishedCountDesigner || 0} 个</h1>
                            <h1>其中执行器 {mainDto.myBugWeekFinishedCountExecutor || 0} 个</h1>
                            <h1>其中管控平台 {mainDto.myBugWeekFinishedCountOc || 0} 个</h1>
                        </Card>
                    </div>
                    {/*<Divider orientation="left">所有今周已解决的任务</Divider>*/}
                    <Divider/>
                    <h3>本周已解决的任务</h3>
                    <div style={{background: '#ECECEC', padding: '30px', float: 'left'}}>
                        <Card title="执行器" bordered={false} style={{width: 300}}>
                            <h2>{mainDto.executorWeekSolvedCount || 0} 个</h2>
                            <h1>其中紧急 {mainDto.executorWeekSolvedCountEmergency || 0} 个</h1>
                        </Card>
                    </div>
                    <div style={{background: '#ECECEC', padding: '30px', float: 'left'}}>
                        <Card title="设计器" bordered={false} style={{width: 300}}>
                            <h2>{mainDto.designerWeekSolvedCount || 0} 个</h2>
                            <h1>其中紧急 {mainDto.designerWeekSolvedCountEmergency || 0} 个</h1>
                        </Card>
                    </div>
                    <div style={{background: '#ECECEC', padding: '30px', float: 'left'}}>
                        <Card title="管控平台" bordered={false} style={{width: 300}}>
                            <h2>{mainDto.ocWeekSolvedCount || 0} 个</h2>
                            <h1>其中紧急 {mainDto.ocWeekSolvedCountEmergency || 0} 个</h1>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.home
    };
};

export default connect(mapStateToProps)(Home);
