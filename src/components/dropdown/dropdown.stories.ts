import type {Meta, StoryObj} from "@storybook/angular";
import {fn} from "@storybook/test";
import {DropdownComponent} from "./dropdown.component";
import {FormControl} from "@angular/forms";

const meta: Meta<DropdownComponent> = {
  title: 'Building Blocks/Dropdown',
  component: DropdownComponent,
  argTypes: {
  },
  args: { onSelectionChange: fn() },
};

export default meta;
type Story = StoryObj<DropdownComponent>

/**
 * The Primary story of the dropdown
 * */
export const Primary: Story = {
  args: {
    label: 'Job',
    options: [
      {value: 'KERTESZ', displayName: 'Kertesz'},
      {value: 'PEK', displayName: 'Pek'},
      {value: 'HENTES', displayName: 'Hentes'}
    ],
    control: new FormControl('')
  },
};
