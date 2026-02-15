import { TabButton } from '../styles';

const tabs = ['All', 'Fruit', 'Vegetable'];

interface Props {
  active: string;
  onChange: (tab: string) => void;
}

export const Tabs = ({ active, onChange }: Props) => (
  <div>
    {tabs.map(tab => (
      <TabButton
        key={tab}
        active={tab === active}
        onClick={() => onChange(tab)}
      >
        {tab}
      </TabButton>
    ))}
  </div>
);
