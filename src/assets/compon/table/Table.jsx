import React, { useState } from "react";
import customersData from "./customers.json";
import './table.css'

const Table = () => {
  const [search, setSearch] = useState("");
  const filteredCustomers = customersData.filter(customer =>
    customer.customer_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="table-container">
      <div className="search-inps">
      <h2>All Customers</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />
      <select name="Newest" id="new">
        <option value="Newest" selected>Newest</option>
        <option value="Newest" selected>Newest</option>
        <option value="Newest" selected>Newest</option>
      </select>
      </div>
      <table>
        <thead>
          <tr className="tr">
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer, index) => (
            <tr key={index} className="bold">
              <td className="n">{customer.customer_name}</td>
              <td className="c">{customer.Company}</td>
              <td className="pn">{customer.phoneNumber}</td>
              <td>{customer.Email}</td>
              <td>{customer.Country}</td>
              <td><button className={customer.Status.toLowerCase()}>{customer.Status}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
