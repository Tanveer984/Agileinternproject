import { useState } from "react";
import { Modal, Button, Container, Badge } from "react-bootstrap";
import { AiOutlineClose, AiOutlineWallet } from "react-icons/ai";
import { BiCheckCircle } from "react-icons/bi";
import { IoMdCopy } from "react-icons/io";
import data from "./data";

function Card() {
  const [show, setShow] = useState(false);

  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let obj = {
    Date: new Date().getDate(),
    Month: Months[new Date().getMonth()].slice(0, 3),
    Year: new Date().getFullYear(),
    Hour: new Date().getHours() % 12 || 12,
    Minute: new Date().getMinutes(),
    Second: new Date().getSeconds()
  };

  return (
    <Container className="fade-dialog text-light">
      {show ? (
        <>
          <Modal.Dialog className=" text-secondary mt-5  m-auto bg ">
            <Modal.Header className="d-flex justify-content-between">
              <p className="m-2 p-2" style={{ width: "50%" }}>
                Money added to wallet from bank Account.
                <br />
                <span className="text-light">
                  ₹ {data[0].bankDetails[0].TransectionAmount}
                </span>
                <br />
                <span>
                  {obj.Date} {obj.Month} {obj.Year} {obj.Hour}:{obj.Minute}:
                  {obj.Second}
                </span>
              </p>
              <p className="me-4" style={{ cursor: "pointer" }}>
                <AiOutlineClose />
              </p>
            </Modal.Header>
            <Badge
              className="bg-success d-flax text-wrap"
              style={{ paddingTop: "1rem", cursor: "pointer" }}
              onClick={() => setShow(!show)}
            >
              <BiCheckCircle /> <span>Transaction Completed !</span>
              <p>Tap to view this Transaction</p>
            </Badge>
            <Modal.Body>
              <div className="rounded border border-secondary m-3">
                <div className=" mt-3 d-flex justify-content-between p-2">
                  <span style={{ lineHeight: "20px" }}>
                    <h6 className="m-1 transecDiv">From</h6>
                    <h5 className="text-light">
                      {data[0].senderDetails[0].sender}
                    </h5>
                    <p>
                      Bank {data[0].senderDetails[0].bank}, IFSC{" "}
                      {data[0].senderDetails[0].ifsc}
                    </p>
                    <p>A/c No - {data[0].senderDetails[0].accountNo}</p>
                    <p>
                      {obj.Date} {obj.Month} {obj.Year} {obj.Hour}:{obj.Minute}:
                      {obj.Second}
                    </p>
                  </span>
                  <span
                    className="rounded-circle border mt-3 border-secondary p-1"
                    style={{ width: "35px", height: "35px" }}
                  >
                    SM
                  </span>
                </div>

                <div className=" mt-3 d-flex justify-content-between p-2">
                  <span style={{ lineHeight: "20px" }}>
                    <h6 className="m-1 transecDiv">TO</h6>
                    <h5 className="text-light">
                      {data[0].receiverdetails[0].receiver}
                    </h5>
                    <p>{data[0].receiverdetails[0].wallet}</p>
                    <p>Ref No.{data[0].receiverdetails[0].refno}</p>
                    <p>
                      {obj.Date} {obj.Month} {obj.Year} {obj.Hour}:{obj.Minute}:
                      {obj.Second}
                    </p>
                  </span>
                  <span className="text-success m-2">
                    <AiOutlineWallet
                      style={{ width: "30px", height: "30px" }}
                    />
                  </span>
                </div>
                <span className="p-2 fs-5 text-light text-wrap">
                  <p>Payment Mode:{}UPI</p>
                  <p>
                    {" "}
                    Transaction No:{data[0].receiverdetails[0].refno}
                    <IoMdCopy style={{ color: "#ce9e34", width: "50px" }} />
                  </p>
                </span>
              </div>
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-center mt-2 mb-2">
              <Button className="me-2 text-light text-center" variant="warning">
                HELP
              </Button>
              <Button
                className="ms-2 text-light text-center"
                variant="outline-dark"
              >
                SHARE
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </>
      ) : (
        <>
          <Modal.Dialog className=" text-secondary mt-5  m-auto bg ">
            <Modal.Header className="d-flex justify-content-between">
              <p className="m-2 p-2" style={{ width: "50%" }}>
                Money added to wallet from bank Account.
                <br />
                <span className="text-light">
                  ₹ {data[0].bankDetails[0].TransectionAmount}
                </span>
                <br />
                <span>
                  {obj.Date} {obj.Month} {obj.Year} {obj.Hour}:{obj.Minute}:
                  {obj.Second}
                </span>
              </p>
              <p className="me-4" style={{ cursor: "pointer" }}>
                <AiOutlineClose />
              </p>
            </Modal.Header>
            <Badge
              className="bg-success d-flax text-wrap mb-4"
              style={{ paddingTop: "1rem", cursor: "pointer" }}
              onClick={() => setShow(!show)}
            >
              <BiCheckCircle /> <span>Transaction Completed !</span>
              <p>Tap to view this Transaction</p>
            </Badge>
          </Modal.Dialog>
        </>
      )}
    </Container>
  );
}

export default Card;
