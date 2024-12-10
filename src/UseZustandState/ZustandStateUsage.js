import { create } from "zustand";

const useUserStore = create((set) => ({
    user: null,
    login: () =>
        set({ user: { name: "John Doe", email: "john.doe@example.com" }}),

    logout: () => set({ user: null }),
}));

const UserStateProfileZustand = () => {
    const { user, login, logout } = useUserStore();

    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.name}!</p>
                    <p>Emaila: {user.email}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                <p>Please log in</p>
                    <button onClick={login}>Login</button>
                </div>
            )}
        </div>
    );
};

export default UserStateProfileZustand;