function App() {
  return (
    <div className="row container-fluid d-flex flex-row vh-100 p-0 m-0">
    <section className="botonera col-8">
      <ul className="align-content-center align-items-start list-unstyled row ">
        <li className="col-lg-3 col-4">
          <button className="boton gt30 btn-block btn btn-lg btn-warning border-none rounded">Equipos
            asignados a mayores de 30</button>
        </li>
        <li className="col-lg-3 col-4">
          <button className="boton tarragona btn btn-lg btn-warning border-none rounded">Equipos
            asignados a personas de Tarragona</button>
        </li>
        <li className="col-lg-3 col-4">
          <button className="boton provincias btn btn-lg btn-warning border-none rounded">Provincias
            donde hay equipos</button>
        </li>
        <li className="col-lg-3 col-4">
          <button className="boton puestos btn btn-lg btn-warning border-none rounded">Puestos
            de
            trabajadores con
            equipo</button>
        </li>
        <li className="col-lg-3 col-4">
          <button className="boton edad-media btn btn-lg btn-warning border-none rounded">Media
            de
            edad
            de
            trabajadores</button>
        </li>
        <li className="col-lg-3 col-4">
          <button className="boton orden-edad btn btn-lg btn-warning border-none rounded">Equipos
            ordenados por
            edad</button>
        </li>
        <li className="col-lg-3 col-4">
          <button className="boton sobremesa btn btn-lg btn-warning border-none rounded">Equipos
            de
            tipo
            sobremesa</button>
        </li>
        <li className="col-lg-3 col-4">
          <button
            className="boton trabajadores-portatil btn btn-lg btn-warning border-none rounded">Trabajadores
            con equipo
            portatil</button>
        </li>
        <li className="col-lg-3 col-4">
          <button className="boton equipos-tipo btn btn-lg btn-warning border-none rounded">Equipos
            organizados por
            tipo</button>
        </li>
        <li className="col-lg-3 col-4">
          <button
            className="boton portatiles-tarragona btn btn-lg btn-warning border-none rounded">Equipos
            portatiles
            asignados
            en
            Tarragona</button>
        </li>
        <li className="col-lg-3 col-4">
          <button className="boton resumen btn btn-lg btn-warning border-none rounded">Resumen
            de
            equipos
            asignados</button>
        </li>
      </ul>
    </section>
    <section
      className="container-console d-flex flex-row justify-content-center align-items-center p-0 col-4">
      <div className="recuadro p-1 consola overflow-auto rounded">
      </div>
    </section>
  </div>
  );
}

export default App;
