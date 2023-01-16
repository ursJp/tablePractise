import React from "react";
import Customer from "./Customer";

const Customers = ({ customers }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Names</th>
            <th>Email</th>
          </tr>
        </thead>
      </table>
      <tbody>
        {customers.map((customer) => {
          return <Customer key={customer.id} customer={customer} />;
        })}
      </tbody>
    </div>
  );
};
export default Customers;
