import type {Meta, StoryObj} from "@storybook/angular";
import {fn} from "@storybook/test";
import {ModalComponent} from "./modal.component";

const meta: Meta<ModalComponent> = {
  title: 'Building Blocks/Modal',
  component: ModalComponent,
  argTypes: {
  },
  args: { onDelete: fn(), isOpen: true },
};

export default meta;
type Story = StoryObj<ModalComponent>

/**
 * ASD
 * */
export const Primary: Story = {
  args: {
  },
};
