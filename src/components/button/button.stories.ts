import type {Meta, StoryObj} from "@storybook/angular";
import {fn} from "@storybook/test";
import {ButtonComponent} from "./button.component";
import {faDragon} from "@fortawesome/free-solid-svg-icons";

const meta: Meta<ButtonComponent> = {
  title: 'Building Blocks/Button',
  component: ButtonComponent,
  argTypes: {
    // backgroundColor: {
    //   control: 'color',
    // },
  },
  args: { onClick: fn(), label: 'Button' },
};

export default meta;
type Story = StoryObj<ButtonComponent>

/**
 * ASD
 * */
export const Primary: Story = {
  args: {
  },
};

export const Secondary: Story = {
  args: {
    buttonType: 'secondary'
  },
};

export const SecondaryGhost: Story = {
  args: {
    buttonType: 'secondary-ghost'
  },
};

export const WithIcon: Story = {
  args: {
    iconName: faDragon
  },
};

export const JustIcon: Story = {
  args: {
    iconName: faDragon,
    label: ''
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}
