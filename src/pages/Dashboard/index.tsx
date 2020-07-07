import React, { useState, useEffect, useCallback } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';

import { FoodsContainer } from './styles';

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

const Dashboard: React.FC = () => {
  const [foods, setFoods] = useState<IFoodPlate[]>([]);
  const [editingFood, setEditingFood] = useState<IFoodPlate>({} as IFoodPlate);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function loadFoods(): Promise<void> {
      const response = await api.get('foods', {});
      const registeredFoods = response.data;
      setFoods(registeredFoods);
    }
    loadFoods();
  }, []);

  const handleAddFood = useCallback(
    async (food: Omit<IFoodPlate, 'id' | 'available'>): Promise<void> => {
      try {
        const response = await api.post('foods', { ...food, available: true });
        const newFood = response.data as IFoodPlate;
        setFoods(value => value.concat(newFood));
      } catch (err) {
        console.log(err);
      }
    },
    [],
  );

  const handleUpdateFood = useCallback(
    async (food: Omit<IFoodPlate, 'id' | 'available'>): Promise<void> => {
      const response = await api.put(`foods/${editingFood.id}`, {
        ...food,
        available: editingFood.available,
      });
      const newFood = response.data as IFoodPlate;
      setFoods(value =>
        value.map(foodValue => {
          if (foodValue.id === newFood.id) {
            return newFood;
          }
          return foodValue;
        }),
      );
    },
    [editingFood],
  );

  const handleDeleteFood = useCallback(async (id: number): Promise<void> => {
    await api.delete(`foods/${id}`);
    setFoods(food => food.filter(value => value.id !== id));
  }, []);

  const toggleModal = useCallback((): void => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const toggleEditModal = useCallback((): void => {
    setEditModalOpen(!editModalOpen);
  }, [editModalOpen]);

  const handleEditFood = useCallback(
    (food: IFoodPlate): void => {
      setEditModalOpen(!editModalOpen);
      setEditingFood(food);
    },
    [editModalOpen],
  );

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;
