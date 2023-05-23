import { useState } from "react";

export default function App() {
  const [data, setData] = useState("deeva");
  const [size, setSize] = useState(480);

  const getQR = async () => {
    let data = await fetch(
      "https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100"
    );
    let convertedData = await data.json();
    console.log(convertedData);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>QR Code Generator</h1>
          <h2>
            Enter a link or a keyword with a size to have a QR code generated for
            it.
          </h2>
        </div>
      </div>

      <div className="row">
        <div className="col-8">
          <input
            className="form-control"
            value={data}
            placeholder="Keyword"
            onChange={(event) => {
              setData(event.target.value);
            }}
          />
        </div>
        <div className="col-4 d-flex">

          <select className="rounded  w-100" value={size} onChange={(event) => {
            setSize(event.target.value);
          }}>
            <option className="dropdown-item" value={100}>Very low</option>
            <option className="dropdown-item" value={200}>Low </option>
            <option className="dropdown-item" value={480}>Medium</option>
            <option className="dropdown-item" value={720}>High</option>
            <option className="dropdown-item" value={1000}>Ultra High </option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-6 text-center m-auto">
          <img
            className="w-75"
            src={`https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${size}x${size}`}
          />
        </div>
      </div>

    </div>
  );
}
