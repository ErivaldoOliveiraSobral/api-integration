import React, { useEffect, useState } from "react";
import { axiosGateway } from "../../../services";
import Carros from "../presentaion";

const CarrosContainer = () => {
  const [carros, setCarros] = useState();
  const [payload, setPayload] = useState({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const { data } = await axiosGateway.get("/carros");
    setCarros(data);
  }, []);

  const handleSubmit = async () => {
    const { data } = await axiosGateway.post("/carros", payload);
    setCarros([...carros, data]);
  };

  const handleDelete = async (id, index) => {
    await axiosGateway.delete(`/carros/${id}`);
    const newArr = [...carros];
    newArr.splice(index, 1);
    setCarros(newArr);
  };

  const handleUpdate = async (carro) => {
    await axiosGateway.put(`/carros/${carro.id}`, carro);
  };

  const handleChange = ({ target }) => {
    setPayload({
      ...payload,
      [target.name]: target.value,
    });
  };

  const handleEdit = ({ target }, index) => {
    const newCarros = [...carros];
    newCarros[index][target.name] = target.value;
    setCarros(newCarros);
  };

  const props = {
    carros: carros,
    onChange: handleChange,
    onSubmit: handleSubmit,
    onEdit: handleEdit,
    onUpdate: handleUpdate,
    onDelete: handleDelete,
  };

  return <Carros {...props} />;
};

export default CarrosContainer;
