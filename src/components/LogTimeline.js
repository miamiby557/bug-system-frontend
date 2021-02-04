import React from 'react';
import {Timeline} from 'antd';

const LogTimeline = ({dataSource = []}) => {
    return (
        <Timeline>
            {dataSource &&
            dataSource.map((item, index) => {
                let options = {};
                if (index === 0) {
                    options = {color: "green"};
                }
                return (<Timeline.Item {...options} key={index}>
                    {item.operation}</Timeline.Item> );

            })}
        </Timeline>
    );
};

export default LogTimeline;
