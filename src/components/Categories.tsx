import { Container, Col, Row } from "react-grid-system";
export default function Grid() {
  return (
    <Container className="w-full my-4">
      <Row className="">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
          <h1 className="m-0 relative  inline-block max-w-full font-bold text-20xl">
            Top Categories
          </h1>
          <div className="h-[58px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border cursor-pointer">
            <div className=" flex-1 flex flex-row items-start justify-start gap-[15px]">
              <img
                className="h-[50px] w-[50px] carousel-prev relative min-h-[50px]"
                loading="lazy"
                alt=""
                src="/group-23.svg"
              />
              <div className="h-[50px] w-[50px] relative min-h-[50px] flex items-center justify-center cursor-pointer">
                <img
                  className="h-[45px] w-[50px] carousel-next  object-contain absolute left-[0px] top-[10px] [transform:scale(1.36)]"
                  loading="lazy"
                  alt=""
                  src="/group-24-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row>
        <p className="text-black mb-6 mt-2">
          These are the top categories that are trending right now.
        </p>
      </Row>
      <Row className="">
        <Col md={3} className="flex flex-col h-full gap-14 justify-around">
          <Row className="">
            <div className="justify-center  flex flex-row h-[200px]  w-[280px] rounded-xl [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.71),_rgba(255,_255,_255,_0)),_linear-gradient(180deg,_rgba(255,_255,_255,_0.2),_rgba(205,_200,_200,_0))]">
              <div className="flex justify-between flex-col  h-full p-6">
                <div className="bg-white text-darkorange w-12 p-1 text-center rounded-full shadow-[0px_7px_8px_rgba(0,_0,_0,_0.25)]">
                  35
                </div>
                <div className="flex flex-col text-white  ">
                  <p className="font-bold text-5xl">Weapons</p>
                  <p className="text-gray-200 text-2xl">Worefall</p>
                </div>
              </div>
              <img
                className="justify-center my-auto items-center relative   max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/skullpngimage-1@2x.png"
              />
            </div>
          </Row>
          <Row>
            <div className="justify-center  flex flex-row h-[200px] w-[280px] rounded-xl [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.71),_rgba(255,_255,_255,_0)),_linear-gradient(180deg,_rgba(255,_255,_255,_0.2),_rgba(205,_200,_200,_0))]">
              <div className="flex justify-between flex-col  h-full p-6">
                <div className="bg-white text-darkorange w-12 p-1 text-center rounded-full shadow-[0px_7px_8px_rgba(0,_0,_0,_0.25)]">
                  35
                </div>
                <div className="flex flex-col text-white  ">
                  <p className="font-bold text-5xl">Weapons</p>
                  <p className="text-gray-200 text-2xl">Worefall</p>
                </div>
              </div>
              <img
                className="justify-center my-auto items-center relative   max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/skullpngimage-1@2x.png"
              />
            </div>
          </Row>
        </Col>
        <Col md={5}>
          <div className=" h-[460px]  rounded-xl [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.71),_rgba(255,_255,_255,_0)),_linear-gradient(180deg,_rgba(255,_255,_255,_0.2),_rgba(205,_200,_200,_0))]">
            <img
              className="absolute right-16 top-10 h-[85%]  max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/toppng@2x.png"
            />
            <div className="flex justify-between flex-col  h-full p-8">
              <div className="bg-white text-darkorange w-12 p-1 text-center rounded-full shadow-[0px_7px_8px_rgba(0,_0,_0,_0.25)]">
                35
              </div>
              <div className="flex flex-col text-white  ">
                <p className="font-bold text-5xl">Statues</p>
                <p className="text-gray-200 text-2xl">Roman</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={3} className="flex flex-col justify-between">
          <div className="flex justify-between items-center p-4 rounded-xl w-[400px] h-[220px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.71),_rgba(255,_255,_255,_0)),_linear-gradient(180deg,_rgba(255,_255,_255,_0.2),_rgba(205,_200,_200,_0))]">
            <div className="flex  justify-between flex-col  h-full p-2 ">
              <div className="bg-white text-darkorange w-12 p-1 text-center rounded-full shadow-[0px_7px_8px_rgba(0,_0,_0,_0.25)]">
                35
              </div>
              <div className="flex flex-col text-white ">
                <p className="font-bold text-5xl">Table</p>
                <p className=" text-2xl">Furniture</p>
              </div>
            </div>
            <img src="./table.png" className="h-[150px]"></img>
          </div>
          <div className="flex justify-between p-4 rounded-xl w-[400px] h-[220px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.71),_rgba(255,_255,_255,_0)),_linear-gradient(180deg,_rgba(255,_255,_255,_0.2),_rgba(205,_200,_200,_0))]">
            <div className="flex  justify-between flex-col  h-full p-2 ">
              <div className="bg-white text-darkorange w-12 p-1 text-center rounded-full shadow-[0px_7px_8px_rgba(0,_0,_0,_0.25)]">
                35
              </div>
              <div className="flex flex-col text-white ">
                <p className="font-bold text-5xl ">Chair</p>
                <p className=" text-2xl">Furniture</p>
              </div>
            </div>
            <img src="./chair.png" className="h-full"></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
