import { createRouter, createWebHistory } from 'vue-router';
import ProductosLista from "@/components/ProductosLista.vue";
import OrdenLista from "@/components/OrdenLista.vue";
import CrearOrden from "@/components/CrearOrden.vue";

const routes = [
    { path:'/productos', ProductosLista },
    { path:'/orden', OrdenLista },
    { path:'/crear-orden', CrearOrden }
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
);

export default router