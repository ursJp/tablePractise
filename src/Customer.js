const Customer = ({ customer: { name, email } }) => {
  return (
    <>
      <table>
        <tr>
          <td>{name}</td>
          <td>{email}</td>
        </tr>
      </table>
    </>
  );
};
export default Customer;
