import React from "react";
import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "Bilim ve Teknoloji Kulübü"}</title>
        <link rel="icon" href="../../favicon.ico" />
      </Head>
    </>
  );
};

export default PageHead;
