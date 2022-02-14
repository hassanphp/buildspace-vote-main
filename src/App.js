import React, { useContext, useEffect, useCallback } from 'react';
import Header from "./component/Header";
import AppRouter from "./AppRouter";
import useLoadProposals from './utils/useLoadProposals';
import { UserContext } from "./contexts/UserContext";

const App = () => {
  const proposals = useLoadProposals();
  const { state } = useContext(UserContext);

  // useEffect(() => {
  //   proposals.then((res) => {
  //     res.loadProposals(state.address);
  //   });
  // }, [proposals,state.address, state.userVoteCount]);


  const loadProposals = useCallback(() => {
    proposals.then((res) => {
      res.loadProposals(state.address);
    });
  }, []);

  useEffect(() => {
    loadProposals();
  }, [loadProposals]);


  return (
    <>
      <Header />
      <AppRouter/>
    </>
  );
}

export default App;