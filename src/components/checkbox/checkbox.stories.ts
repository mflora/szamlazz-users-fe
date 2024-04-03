import type {Meta, StoryObj} from "@storybook/angular";
import {fn} from "@storybook/test";
import {CheckboxComponent} from "./checkbox.component";

const meta: Meta<CheckboxComponent> = {
  title: 'Building Blocks/CheckBox',
  component: CheckboxComponent,
  argTypes: {
  },
  args: { onCheckedChange: fn() },
};

export default meta;
type Story = StoryObj<CheckboxComponent>


export const Primary: Story = {
  args: {

  }
}
