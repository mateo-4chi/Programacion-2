import { getConnection, sql, queries } from "../database";

export const getPedidos = async (req, res) => {
    try {
         const pool = await getConnection();
         const result = await pool.request().query(queries.getAllPedidos);

         res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewPedido = async (req, res) => {
    const {id_pedido, id_mesa, fecha_hora} = req.body;

    if (id_pedido == null || id_mesa == null || fecha_hora == null){
        return res.status(400).json({msg: 'Bad request. Please Fill all fields'})
    };

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("id_pedido", sql.Int, id_pedido)
            .input("id_mesa", sql.Int, id_mesa)
            .input("fecha_hora", sql.Date, fecha_hora)
            .query(queries.createNewPedido);

        console.log(result);

        res.json({id_pedido, id_mesa, fecha_hora});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getPedidoById = async (req, res) => {
    const {id_pedido} = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("id_pedido",sql.Int, id_pedido)
            .query(queries.getPedidoById);
        res.send(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deletePedidoById = async (req, res) => {
    const {id_pedido} = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("id_pedido", sql.Int, id_pedido)
            .query(queries.deletePedidoById);
    
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getTotalPedidos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getTotalPedidos);
        
        console.log(result);
    
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updatePedidoById = async (req, res) => {
    const {id_mesa, fecha_hora} = req.body;
    const {id_pedido} = req.params;

    if ( id_mesa == null || fecha_hora == null ){
        return res.status(400).json({msg: 'Bad request. Please Fill all fields'})
    };

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("id_mesa", sql.Int, id_mesa)
            .input("fecha_hora", sql.Date, fecha_hora)
            .input("id_pedido", sql.Int, id_pedido)
            .query(queries.updatePedidoById);
        
        res.json({id_mesa, fecha_hora});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


