import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";

import { startClock } from "../src/store/actions";
import Examples from "../src/components/examples";
import Header from "../src/components/Header";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Examples />
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link>
    </>
  );
};

export default Index;
