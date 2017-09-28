
const RowTable = (props) => {
  const _tds = props.items.map((item, index) => <td key={index}> {item} </td>);
  return (
    <tr>
      {_tds}
    </tr>
  )
}

const RTable = ({ seats }) => {
  return (
    <table width="300" height="200" border="3" className="table table-bordered text-center">
      <RowTable items={seats[0]} />
      <RowTable items={seats[1]} />
      <RowTable items={seats[2]} />
      <RowTable items={seats[3]} />
    </table>
  );
}

const Drawrender = () => {
  return (
    <div className="container-fluid">
      <h1 className=" page-header text-center">RESERVAR BUS</h1>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div id="tablero">
              <RTable seats={seats} />
            </div>
            <div id="mostrar"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon">
                  DNI N°
                </div>
                <input className="form-control" id="buscar" name="numdni" type="number" />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button" id="buscar">Buscar</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon">
                  Nombre
                </div>
                <input className="form-control" type="text" placeholder="Nombre" name="nombre" id="nombre" required />
              </div>
              <div className="input-group">
                <div className="input-group-addon">
                  Apellido
                </div>
                <input className="form-control" type="text" placeholder="Apellido" name="apellido" id="apell" required />
              </div>
              <div className="input-group">
                <div className="input-group-addon">
                  DNI N°
                  </div>
                <input className="form-control" type="number" placeholder="DNI" name="eldni" id="eldni" required />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <button type="button" className="btn btn-success" id="agregar" name="button">Reservar</button>
            <button type="button" className="btn btn-success" id="print" name="button">Listar</button>
            <button type="button" className="btn btn-danger" id="cancela">Cancelar</button>
            <button type="button" className="btn btn-info" id="consulta" name="button">ok</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div id="lista">
              <h1>Lista de Pasajeros</h1>
              <div>
                {listPairs(seats)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function listPairs(seats) {
  console.log("seats: ", seats);
  let newSeats = [];
  let passengers = [
    { Item: 4, Nombre: "Aydee", Apellido: "Quispe", Dni: 75460953 },
    { Item: 7, Nombre: "Mily", Apellido: "Mendoza", Dni: 67467651 },
    { Item: 3, Nombre: "Karina", Apellido: "Yucra", Dni: 46460954 },
    { Item: 8, Nombre: "Jhon", Apellido: "Benavente", Dni: 24460953 },
    { Item: 2, Nombre: "Luis", Apellido: "Herrera", Dni: 25460675 }
  ];
  return passengers.map((passengers, index) => {
    return (
      <div key={index} className="list">
        <p>Asiento N°: {passengers.Item}</p>
        <p>Nombre: {passengers.Nombre}</p>
        <p>Apellido: {passengers.Apellido}</p>
        <p>DNI N°: {passengers.Dni}</p>
      </div>
    );
  });
}

const App = ({ title, seats }) => {
  return (
    <div>
      <Drawrender />
      <h3>{title}</h3>
    </div>
  );
}

let seats = [
  [4, 8, 12, 16, 20, 24, 28, 32],
  [3, 7, 11, 15, 19, 23, 27, 31],
  [2, 6, 10, 14, 18, 22, 26, 30],
  [1, 5, 9, 13, 17, 21, 25, 29]
]

ReactDOM.render(
  <App title={'Hola Mundo!'} seats={seats} />,
  document.getElementById("root")
);
