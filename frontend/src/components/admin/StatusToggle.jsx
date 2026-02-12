import api from "../../api/axios";

export default function StatusToggle({ blog, onChange }) {
  const toggleStatus = async () => {
    await api.put(`/blogs/${blog._id}`, {
      status: blog.status === "published" ? "draft" : "published"
    });
    onChange();
  };

  return (
    <button
      onClick={toggleStatus}
      className={`px-2 py-1 rounded text-xs ${
        blog.status === "published"
          ? "bg-green-100 text-green-700"
          : "bg-gray-100 text-gray-700"
      }`}
    >
      {blog.status}
    </button>
  );
}
