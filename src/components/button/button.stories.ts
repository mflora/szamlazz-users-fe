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
 * This is the primary appearance of the button. If the buttonStyle parameter is unset at the parent component, this will be the appearance of the button.
 * */
export const Primary: Story = {
  args: {
  },
};

/**
 * This is the secondary appearance of the button. If the buttonStyle parameter is set as "secondary" at the parent component, this will be the appearance of the button.
 * */
export const Secondary: Story = {
  args: {
    buttonStyle: 'secondary'
  },
};

/**
 * This is the secondary appearance of the button. If the buttonStyle parameter is set as "secondary-ghost" at the parent component, this will be the appearance of the button.
 * */
export const SecondaryGhost: Story = {
  args: {
    buttonStyle: 'secondary-ghost'
  },
};


/**
 * Button with icon. If both the label and the iconDefinition parameters are set at the parent component. Accepts all free FontAwesome icons.
 * */
export const WithIcon: Story = {
  args: {
    iconDefinition: faDragon
  },
};

/**
 * Icon button. If the label parameter unset and the iconDefinition parameter is set at the parent component. Accepts all free FontAwesome icons.
 * */
export const JustIcon: Story = {
  args: {
    iconDefinition: faDragon,
    label: ''
  }
}

/**
 * This is the disabled appearance of the button. If the disabled parameter is set to true at the parent component, this will be the appearance of the button.
 * */
export const Disabled: Story = {
  args: {
    disabled: true
  }
}
