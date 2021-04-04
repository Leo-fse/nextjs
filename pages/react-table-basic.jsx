import React from "react";
import { Layout } from "../components/Layout";
import { FilteringTable } from "../components/Table/FilteringTable";

export default function reactTable() {
  return (
    <Layout>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      <FilteringTable />
    </Layout>
  );
}
