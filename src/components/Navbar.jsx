import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div style={{display:"flex" , justifyContent:"space-between" ,paddingRight:"100px" }}>
        <img
          src="/download.png"
          height="50px"
          width="70px"
          alt=""
          style={{ marginLeft: "65px" }}
        />

        <div style={{ display: "flex", gap:"30px", marginTop: "20px" }}>
          <a href="/home" style={{textDecoration:'none', fontWeight:'600', fontSize:"18px", color:"black"}}>Menu</a>
          <a href="/home" style={{textDecoration:'none',  fontWeight:"600", fontSize:"18px", color:"black" }}>NIKIta</a>
          <a href="/home" style={{textDecoration:'none' ,fontWeight:"600", fontSize:"18px", color:"black"}}>Tushar</a>
          <a href="/home" style={{textDecoration:'none', fontWeight:"600", fontSize:"18px", color:"black"}}>Contact</a>
        </div>

       <Button text="Login " width="70px"/>
      </div>
    </>
  );
};

export default Navbar;
