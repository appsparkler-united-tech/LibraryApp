import React from 'react';
import TextInput from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    placeholder: { control: 'text' },
  },
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text here...',
};

export const SearchPlaceholder = Template.bind({});
SearchPlaceholder.args = {
  placeholder: 'Search your Read',
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  placeholder: 'Type something...',
};
