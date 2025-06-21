import { useEffect, useState } from "react";
import TraerPersonas from "../components/TraerPersonas";

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos (por ejemplo 1 segundo)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout); // Limpieza
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>Cargando personas...</h2>
        </div>
      ) : (
        <TraerPersonas />
      )}
    </div>
  );
}

export default Index;
