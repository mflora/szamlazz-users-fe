import {TableComponent} from "./table.component";
import {Meta, StoryObj} from "@storybook/angular";
import {faDragon, faUser} from "@fortawesome/free-solid-svg-icons";

const meta: Meta<TableComponent> = {
  title: 'Building Blocks/Table',
  component: TableComponent,

}

export default meta;

type Story = StoryObj<TableComponent>;

export const Primary: Story = {
  args: {
    data: [
      {'Név': 'Gipsz Jakab',
        'Foglalkozás': 'Pék',
        'Aktív': true,
      },
      {'Név': 'Kovács Mária',
        'Foglalkozás': 'Hentes',
        'Aktív': true,
      },
      {'Név': 'Tóth József',
        'Foglalkozás': 'Kertész',
        'Aktív': false,
      }
    ],
    actionButtons: [faDragon, faUser]
  }
}

export const EmptyTable: Story = {
  args: {
    data: []
  }
}

export const MoreData: Story = {
  args: {
    data: [
      {'Név': 'Gipsz Jakab',
        'Foglalkozás': 'Pék',
        'Aktív': true,
      },
      {'Név': 'Kovács Mária',
        'Foglalkozás': 'Hentes',
        'Aktív': true,
      },
      {'Név': 'Tóth József',
        'Foglalkozás': 'Kertész',
        'Aktív': false,
      },
      {'Név': 'Balogh Béla',
        'Foglalkozás': 'Kertész',
        'Aktív': false,
      },
      {'Név': 'Nagy Béla',
        'Foglalkozás': 'Kertész',
        'Aktív': false,
      },
      {'Név': 'Kiss Béla',
        'Foglalkozás': 'Kertész',
        'Aktív': false,
      },
    ],
    actionButtons: [faDragon, faUser]
  }
}
