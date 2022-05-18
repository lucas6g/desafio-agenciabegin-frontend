import { Children, ReactNode, useState } from 'react';
import {
  Container,
  TabButton,
  TabContent,
  TabsButtonContainer
} from './TabsStyles';

type TabsProps = {
  children: ReactNode;
  tabs: {
    label: string;
  }[];
};

export function Tabs({ tabs, children }: TabsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const childrens = Children.toArray(children);
  const handleSelectTab = (selectedTabIndex: number) => {
    setSelectedIndex(selectedTabIndex);
  };

  return (
    <Container>
      <TabsButtonContainer>
        {tabs.map((tab, index) => {
          return (
            <TabButton
              onClick={() => {
                handleSelectTab(index);
              }}
              key={tab.label}
              isSelected={index === selectedIndex}
            >
              <span>{tab.label}</span>
            </TabButton>
          );
        })}
      </TabsButtonContainer>

      {childrens.map((mapedChild, index) => {
        return (
          <TabContent isSelected={index === selectedIndex} key={index}>
            {mapedChild}
          </TabContent>
        );
      })}
    </Container>
  );
}
