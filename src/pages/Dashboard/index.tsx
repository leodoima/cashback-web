import React from 'react';

import Desktop from '../../components/Desktop';
import numberUsers from '../../assets/temp/NumberUsers.svg';
import numberCompanies from '../../assets/temp/NumberCompanies.svg';
import numberTransactions from '../../assets/temp/NumberTransactions.svg';
import numberValue from '../../assets/temp/NumberValue.svg';

import {Top} from './styles';

const Dashboard: React.FC = () => {
  return (
      <Desktop>
        <Top>
          <img src={numberUsers} alt=""/>
          <img src={numberCompanies} alt=""/>
          <img src={numberTransactions} alt=""/>
          <img src={numberValue} alt=""/>
        </Top>
      </Desktop>
  );
}

export default Dashboard;
