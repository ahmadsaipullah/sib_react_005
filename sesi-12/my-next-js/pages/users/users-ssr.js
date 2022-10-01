import Link from "next/link";

const UsersSsr = (props) => {
  return (
    <div className="ssr">
      <table border="50px">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.users?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="back">
        <h1>
          <Link href="/">Back</Link>
        </h1>
      </div>
    </div>
  );
};

export async function getServerSideProps(content) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: { users },
  };
}

export default UsersSsr;
