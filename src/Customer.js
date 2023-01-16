const Customer = ({ customer: { id, name, email } }) => {
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
};
export default Customer;
