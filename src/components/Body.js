import RestaruntComponent from "./RestaruntComponent";
import React, { useState, useEffect } from "react";
import Shimmer from "./utill/shimmer";

const Body = () => {
  const [resLists, setRestlist] = useState([]);

  const [searchList, setSearch] = useState("");

  const [copy, setCopy] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const fetchedData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const data = await fetchedData.json();

      setRestlist(
        data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );

      setCopy(
        data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (resLists.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col-md-3 mb-2 mb-md-0">
          <button
            className="btn btn-primary w-100"
            onClick={() => {
              const filteredData = copy.filter((res) => {
                return res.info.avgRating > 4;
              });
              setCopy(filteredData);
            }}
          >
            High Rating
          </button>
        </div>

        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchList}
              onChange={(typedData) => {
                setSearch(typedData.target.value);
              }}
            />
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => {
                const filtredData = resLists.filter((res) => {
                 return(res.info.name.toLowerCase().includes(searchList.toLowerCase()))
                });

                if(filtredData.length>0){
                  setCopy(filtredData)
                }
               else{
                console.log('nothing')
               }
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        {copy.map((res) => (
          <div className="col-md-4 mb-4" key={res.info.id}>
            <RestaruntComponent infos={res} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
