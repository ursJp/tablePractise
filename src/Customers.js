import React from "react";
import Customer from "./Customer";

const Customers = ({ customers }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Names</th>
            <th>Email</th>
          </tr>
        </thead>
      </table>
      <tbody>
        <td>
          {customers.map((customer) => {
            return <Customer key={customer.id} customer={customer} />;
          })}
        </td>
      </tbody>
    </div>
  );
};
export default Customers;
