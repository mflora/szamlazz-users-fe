import type {Meta, StoryObj} from "@storybook/angular";
import {fn} from "@storybook/test";
import {InputComponent} from "./input.component";

const meta: Meta<InputComponent> = {
  title: 'Building Blocks/Input                                                                      ',
  component: InputComponent,
  argTypes: {
  },
  args: { onValueChange: fn() },
};

export default meta;
type Story = StoryObj<InputComponent>


export const Primary: Story = {
  args: {

  }
}
