import Cat from '../components/Cat/Cat';

const meta = {
  title: 'Components/Cat',
  component: Cat,
  argTypes: {
    catState: {
      control: { type: 'select' },
      options: ['normal', 'hungry', 'sick', 'dead'],
    },
  },
};

export default meta;

const Template = (args) => <Cat {...args} />;

// Story för normal
export const Normal = Template.bind({});
Normal.args = {
  catState: 'normal',
};

// Story för hungrig
export const Hungry = Template.bind({});
Hungry.args = {
  catState: 'hungry',
};

// Story för sjuk
export const Sick = Template.bind({});
Sick.args = {
  catState: 'sick',
};

// Story för död
export const Dead = Template.bind({});
Dead.args = {
  catState: 'dead',
};
