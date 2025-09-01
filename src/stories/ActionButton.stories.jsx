import ActionButton from '../components/ActionButton/ActionButton';
import foodIcon from '../../assets/food.png';
import toyIcon from '../../assets/toy.png';
import medicineIcon from '../../assets/medicine.png';

export default {
  title: 'Components/ActionButton',
  component: ActionButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: { control: 'text' },
    text: { control: 'text' },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    variant: { 
      control: { type: 'select' },
      options: ['pink', 'baby-blue']
    },
  },
};

export const Default = {
  args: {
    icon: foodIcon,
    text: 'Feed me',
    variant: 'pink',
  },
};

export const WithToy = {
  args: {
    icon: toyIcon,
    text: 'Play with me',
    variant: 'baby-blue',
  },
};

export const WithMedicine = {
  args: {
    icon: medicineIcon,
    text: 'Give me medicine',
    variant: 'pink',
  },
};

export const BabyBlueVariant = {
  args: {
    icon: foodIcon,
    text: 'Feed me',
    variant: 'baby-blue',
  },
};


