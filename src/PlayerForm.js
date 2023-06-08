import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Button,
  Modal,
} from "antd";

const { Option } = Select;

const PlayerForm = ({ onFinish }) => {
  const handleFinish = (values) => {
    onFinish(values); // Process the form values here
    Modal.success({
      content: "Zawodnik został pomyślnie zapisany!",
    });
  };

  return (
    <Form name="manager" onFinish={handleFinish} autoComplete="off">
      <br />
      <Form.Item
        name="id"
        rules={[
          {
            required: true,
            message: "Please input the player id!",
          },
        ]}
      >
        <InputNumber placeholder="Player ID" />
      </Form.Item>

      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: "Please input the player name!",
          },
        ]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      <Form.Item
        name="surname"
        rules={[
          {
            required: true,
            message: "Please input the player surname!",
          },
        ]}
      >
        <Input placeholder="Surname" />
      </Form.Item>

      <Form.Item
        name="points"
        rules={[
          {
            required: true,
            message: "Please input the player points!",
          },
        ]}
      >
        <InputNumber placeholder="Points" />
      </Form.Item>
      <Form.Item
        name="weight"
        rules={[
          {
            required: true,
            message: "Please input the player weight!",
          },
        ]}
      >
        <InputNumber placeholder="Weight" />
      </Form.Item>
      <Form.Item
        name="height"
        rules={[
          {
            required: true,
            message: "Please input the player height!",
          },
        ]}
      >
        <InputNumber placeholder="Height" />
      </Form.Item>
      <Form.Item
        name="nationality"
        rules={[
          {
            required: true,
            message: "Please select the player nationality!",
          },
        ]}
      >
        <Select placeholder="Select a nationality" allowClear>
          <Select.Option value="PL">Polish</Select.Option>
          <Select.Option value="US">American</Select.Option>
          <Select.Option value="DE">German</Select.Option>
          <Select.Option value="FR">French</Select.Option>
          <Select.Option value="ES">Spanish</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="birthDate"
        rules={[
          {
            required: true,
            message: "Please select the player birth date!",
          },
        ]}
      >
        <DatePicker placeholder="Select a birth date" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Zapisz
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PlayerForm;
