"use client"

import React, { useEffect, useState } from 'react';
import { Button, Form, FormProps, Input, Modal } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

type FieldType = {
    company: string;
    jobtype1: string;
    jobtype1_description: string;
    jobtype2: string;
    jobtype2_description: string;
    jobtype3: string;
    jobtype3_description: string;
    email_setup_link: string;
    messenger_invite_link: string;
    messenger_name_example: string;

};

const Setting: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const getParams = () => {
        const storedParams = localStorage.getItem('params');
        if (storedParams) {
            form.setFieldsValue(JSON.parse(storedParams));
        }
    }
    
    const showModal = () => {
        setIsModalOpen(true);
        getParams();
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        localStorage.setItem('params', JSON.stringify(values));
        setIsModalOpen(false);
    };

    return (
        <>
            <SettingOutlined className="text-2xl text-indigo-600" onClick={showModal} />
            <Modal title="회사 내부 상황에 맞게 설정해주세요."
            open={isModalOpen} footer={null} onCancel={() => setIsModalOpen(false)}
            >
                <Form
                    form={form}
                    name="basic"
                    className='w-full'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="회사명"
                        name="company"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="직무1"
                        name="jobtype1"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="직무1 설명"
                        name="jobtype1_description"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="직무2"
                        name="jobtype2"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="직무2 설명"
                        name="jobtype2_description"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="직무3"
                        name="jobtype3"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="직무3 설명"
                        name="jobtype3_description"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="이메일 셋업 링크"
                        name="email_setup_link"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="메신저 초대 링크"
                        name="messenger_invite_link"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="메신저 이름 예시"
                        name="messenger_name_example"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item className='flex justify-end'>
                        <Button type="primary" htmlType="submit">
                            {'저장'}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Setting;