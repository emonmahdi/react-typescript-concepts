import { useEffect, useState } from "react";

interface Users {
  id: number;
  name: string;
  email: string;
}

const FetchData: React.FC = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: Users[] = await res.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log("Fetch data failed");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading)
    return (
      <p
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          color: "#555",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        Loading...
      </p>
    );

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        All Users
      </h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              backgroundColor: "#fff",
              marginBottom: "10px",
              padding: "12px 15px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (
              (e.currentTarget.style.backgroundColor = "#e6f7ff"),
              (e.currentTarget.style.transform = "scale(1.02)")
            )}
            onMouseLeave={(e) => (
              (e.currentTarget.style.backgroundColor = "#fff"),
              (e.currentTarget.style.transform = "scale(1)")
            )}
          >
            <strong style={{ color: "#0070f3" }}>{user.name}</strong>
            <br />
            <span style={{ color: "#555" }}>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
