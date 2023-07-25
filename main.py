import pandas as pd
from data.platos import platosPopulares
from data.creartabla import crearTabla
from data.reservas import reservas
from data.proveedores import proveedores

tablaPlatos=pd.DataFrame(platosPopulares)
print(tablaPlatos)
crearTabla(tablaPlatos,"tablaplatospopulares")

tablareservas=pd.DataFrame(reservas)
print(reservas)
crearTabla(tablareservas,"reservas")

tablaproveedores=pd.DataFrame(proveedores)
print(proveedores)
crearTabla(tablaproveedores,"proveedores")

