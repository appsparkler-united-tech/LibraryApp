import { StoryFn, Meta } from '@storybook/react';
import TextInput from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    placeholder: { control: 'text' },
  },
} as Meta<typeof TextInput>;

const Template: StoryFn<typeof TextInput> = (args) => <TextInput {...args} />;

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
