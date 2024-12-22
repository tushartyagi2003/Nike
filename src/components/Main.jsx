import Button from "./Button";

const Main = () => {
  return (
    <div style={{display:"flex",alignItems:"center", justifyContent:"center", width:"1325px", marginLeft:"100px"}}>
         
      <div style={{
        maxHeight:"400px", marginLeft:"100px"
      }}>
        <h1 className="big">YOUR FEET DESERVE THE BEST</h1>

        <p>
          YOUR FEET DESERVE THE BEST YOUR FEET DESERVE THE BEST AND WE’RE HERE
          TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE
          TO HELP YOU WITH OUR SHOES. 
        </p>
       <div style={{display:"flex", gap:"20px"}}>
       <Button text="Shop Now" width="100px"/>
       <Button text="category" width="100px"/>
       </div>

        <p>also available on</p>
        <div  style={{display:"flex", gap:"20px"}}>
        <img src="/amazon.svg" alt="" />
        <img src="/flipkart-icon.svg" style={{height:"20px", width:"20px", marginTop:"9px"}} alt="" />
        </div>
      </div>


      <div>
        <img src="/newshoe.png"  style={{height:"500px", width:"700px", transform: "translateY(60px)", paddingTop:"30px"}} alt="" />
      </div>
    </div>
  );
};

export default Main;
