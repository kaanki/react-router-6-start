const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h1>Dashboard</h1>
      <h4>Hello, {user.name}</h4>
    </section>
  );
};
export default Dashboard;
