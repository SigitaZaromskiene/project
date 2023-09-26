import { useContext, useState } from "react";
import { Store } from "../../store";
import { sectionCreate } from "../../actions";

function Edit() {
  const { store, dispatch } = useContext(Store);
  const [input, setInput] = useState(store.data.title);

  console.log(input);

  const edit = () => {
    dispatch(
      sectionCreate({
        input,
      })
    );
    setInput("");
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card m-5">
            <div className="card-header">Rajonas</div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Redaguoti</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
                <div className="form-text">
                  Pridėkite naujo rajono pavadinimą
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Rajono herbas
                </label>
                <input
                  className="form-control form-control-sm"
                  id="formFile"
                  type="file"
                />
                <div className="form-text">
                  Pridėkite naujo rajono herbo paveikslėlį
                </div>
              </div>

              <button className="m-1 btn btn-danger">
                Ištrinti paveikslėlį
              </button>
              <button type="button" className="btn btn-primary" onClick={edit}>
                Keisti
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
