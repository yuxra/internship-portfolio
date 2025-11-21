import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/editPortofolio.css";

function EditPortfolio() {
  const { id } = useParams();
  const navigate = useNavigate();
  const baseURL = "http://localhost:5083";

  const [form, setForm] = useState({
    title: "",
    description: "",
    imageUrl: "",
    videoLink: "",
    framework: "",
    language: "",
    createdAt: "",
    preview: "",
  });

  const [loading, setLoading] = useState(true);

  // ==================================================
  // LOAD DATA PORTFOLIO BY ID
  // ==================================================
  useEffect(() => {
    fetch(`${baseURL}/api/Portfolios/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
          title: data.title ?? "",
          description: data.description ?? "",
          imageUrl: data.imageUrl ?? "", // backend image (base64/string)
          videoLink: data.videoLink ?? "",
          framework: data.framework ?? "",
          language: data.language ?? "",
          createdAt: data.createdAt ?? "",
          preview: "", // preview kosong saat awal
        });
        setLoading(false);
      })
      .catch((err) => console.error("Error load:", err));
  }, [id]);

  // ==================================================
  // HANDLE TEXT INPUT
  // ==================================================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ==================================================
  // HANDLE IMAGE UPLOAD (store base64 in frontend)
  // ==================================================
  const handleImageUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch(`${baseURL}/api/Portfolios/upload`, {
      method: "POST",
      body: formData,
    });
    if (!res.ok) throw new Error("Upload gagal");

    const data = await res.json();
    setForm(prev => ({
      ...prev,
      imageUrl: data.url,
      preview: data.url, // preview langsung dari URL backend
    }));
  } catch (err) {
    console.error(err);
  }
};


  // ==================================================
  // HANDLE SAVE (PUT)
  // ==================================================
const handleSave = () => {
  const token = localStorage.getItem("token");
  const payload = {
    title: form.title,
    description: form.description,
    imageUrl: form.imageUrl, // sekarang URL, bukan base64
    videoLink: form.videoLink,
    framework: form.framework,
    language: form.language,
    createdAt: form.createdAt,
  };

  fetch(`${baseURL}/api/Portfolios/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(payload),
  })
    .then(res => {
      if (!res.ok) throw new Error("Gagal update");
      navigate("/portfolio");
    })
    .catch(err => console.error(err));
};

  if (loading) return <p>Loading...</p>;

  return (
    <div className="edit-container">
      <h1 className="edit-title">Edit Portfolio</h1>

      <div className="edit-card">
        <label>Title</label>
        <input name="title" value={form.title} onChange={handleChange} />

        <label>Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
        />

        <label>Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {(form.preview || form.imageUrl) && (
  <img src={form.preview || form.imageUrl} className="preview-img" />
)}


        <label>Video Link</label>
        <input
          name="videoLink"
          value={form.videoLink}
          onChange={handleChange}
        />

        <label>Framework</label>
        <input
          name="framework"
          value={form.framework}
          onChange={handleChange}
        />

        <label>Language</label>
        <input
          name="language"
          value={form.language}
          onChange={handleChange}
        />

        <label>Created At</label>
        <input
          type="datetime-local"
          name="createdAt"
          value={form.createdAt ? form.createdAt.substring(0, 16) : ""}
          onChange={handleChange}
        />

        <button onClick={handleSave} className="save-btn">
          Save
        </button>
      </div>
    </div>
  );
}

export default EditPortfolio;
