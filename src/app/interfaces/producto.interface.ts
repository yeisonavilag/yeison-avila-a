export interface Producto {
    id: number;
    nombre: string;
    plataforma: string;
    descripcion: string;
    precio: number;
    img: string;
    cantidad: number;
}

export interface Lista_Productos {
    productos?: Producto[];

}