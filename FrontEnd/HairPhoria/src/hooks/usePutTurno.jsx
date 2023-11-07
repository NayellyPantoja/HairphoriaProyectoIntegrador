import { useState } from "react";
import axios from "axios";

export const usePutTurno = () => {
    const [isEditTurno, setIsEditTurno] = useState(false);

    const editTurno = async (turnoUpdate, turnoId) => {
        console.log("turno actualizado", turnoUpdate);
        console.log("turno id", turnoId)
        const url = `http://52.91.14.141:8080/turnos/${turnoId}`;
        try {
            setIsEditTurno(true);
            const token = sessionStorage.getItem("token");
            const response = await axios.put(url, turnoUpdate, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                console.log("Turno editado exitosamente");
            }
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setIsEditTurno(false);
        }
    };

    return { editTurno, isEditTurno };
};