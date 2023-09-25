import { useContext } from "react";
import { Store } from "../../store";
import { useEffect } from "react";
import { actionsList } from "../../store";

function List() {
  const { store, dispatch } = useContext(Store);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card m-5">
            <div className="card-header">Sriciu sarasas</div>
            <div className="card-body">
              <ul className="list-group">
                {store?.data?.map((li) => (
                  <li className="list-group-item" key={li.id}>
                    <div className="li-bin">
                      <div className="li-bin-content">{li.title}</div>
                      <div className="li-bin-buttons">
                        <button
                          className="btn btn-danger"
                          onClick={() => dispatch(actionsList["delete"](li.id))}
                        >
                          Istrinti
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
