import { useState } from 'react';

export default function UploadForm() {
  const [path, setPath] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const req = {
      method: 'POST',
      body: formData,
    };
    try {
      const res = await fetch('/api/uploads', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const image = await res.json();
      setPath(image);
      console.log(image);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <div className="row min-vh-100 pb-5 justify-content-center align-items-center">
        <div className="col col-md-8">
          <h3 className="text-center mb-5">React File Uploads</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Caption:
                <input
                  required
                  autoFocus
                  type="text"
                  id="caption"
                  name="caption"
                  className="form-control bg-light"
                />
              </label>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <input
                required
                type="file"
                name="image"
                accept=".png, .jpg, .jpeg, .gif"
              />
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
            </div>
          </form>
          {path && <img src={path.url} alt={path.url} />}
        </div>
      </div>
    </div>
  );
}
