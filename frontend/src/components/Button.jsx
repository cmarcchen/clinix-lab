export function Button({ children }) {
  return (
    <button className="text-white bg-blue-600 p-2 rounded-lg hover:bg-blue-500 active:translate-y-1">
      {children}
    </button>
  );
}
