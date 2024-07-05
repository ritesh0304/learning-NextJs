// src/components/DashboardLayout.js
export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login,
  }: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode,
    login: React.ReactNode,
  }) {
    const isLogged=true;
    return isLogged ? (
      <>
        <div>{users}</div>
        <div>{children}</div>
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>{revenue}</div>
          </div>
          <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
        </div>
      </>
    ):(
      <div>{login}</div>
    );
  }
  