import {
  SiAmazonaws,
  SiEthereum,
  SiGit,
  SiJavascript,
} from '@icons-pack/react-simple-icons';
import React from 'react';

export const Icon: React.FC<{ icon: string }> = (iconName) => {
  switch (iconName.icon) {
    case 'Blockchain':
      return <SiEthereum />;
    case 'Programming Languages/Tools':
      return <SiJavascript />;
    case 'Software Development':
      return <SiGit />;
    default:
      return;
  }
};
