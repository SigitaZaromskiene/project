import { useContext } from "react";
import { Store } from "../../store";
import { useEffect } from "react";

function List() {
  const { store } = useContext(Store);

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
                    {li.title}
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
