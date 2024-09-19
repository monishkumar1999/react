
import { IMGURL } from "./utill/constant";
const RestaruntComponent = (infos) => {
const {info}=infos.infos;
// console.log(info);

  return (
    <div className="card col col-sm-4" style={{ width: '18rem' }}>
      <img src={IMGURL+info.cloudinaryImageId} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{info.name}</h5>
        <p className="card-text">
        {info.costForTwo}
        </p>

       
        <div className="mb-3">
            <span className="text-warning">{} ★</span> {info.avgRating}
          </div>

        <a href="#" className="btn btn-warning"> 
          order     
        </a>
      </div>
    </div>
  );
};

export default RestaruntComponent;
