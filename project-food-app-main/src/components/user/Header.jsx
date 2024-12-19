import React from "react";
const Header=()=>{
    return(
        <>
  <section id="header" className="p-4">
  <div className="row">
    <div className="logo col-md-2 fs-4">
      <span className="text-dark fs-1">Food Mood</span>{" "}
      <span className="text-dark fs-1"></span>
    </div>
    <div className="search-box col-md-8">
      <div className="input-group p-1">
        <input
          type="text"
          name="search"
          placeholder="search here.."
          className="form-control"
        />
      </div>
    </div>
    <div className="social-media col-md-2 fs-4">
      <span className="bi bi-facebook" />
      <span className="bi bi-instagram" />
      <span className="bi bi-twitter" />
      <span className="bi bi-whatsapp" />
      <span className="bi bi-linkedin" />
    </div>
  </div>
</section>

        </>
    )
}

export default Header