def crearTabla(tabla,nombre):
    archivoHTML=tabla.to_html()
    archivo=open(f"./tablas/{nombre}.html","w")
    archivo.write(archivoHTML)
    archivo.close()