import React, { Fragment } from "react";
import Search from "../../components/users/Search";
import Users from "../../components/users/Users";

const UsersPage = () => {
  return (
    <Fragment>
      <h2>Users</h2>
      <Search />
      <Users />
    </Fragment>
  );
};

export default UsersPage;
