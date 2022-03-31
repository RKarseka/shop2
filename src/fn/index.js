import { axiosDelId, axiosPost } from '../axios';
import { ORDERS_URL } from '../const';

export const toggleBtn = async (item, id, setArrFn, arr, URL) => {
  try {
    if (id) {
      setArrFn(arr.filter(({ itemId }) => itemId !== item.itemId));
      await axiosDelId(URL, Number(id));
      return false;
    } else {
      const newId = await axiosPost(URL, item);

      setArrFn((prev) => [...prev, { ...item, id: newId }]);

      return newId;
    }
  } catch (err) {
    console.log(err);
    if (err?.response?.status === 429) {
      alert('Палехче! Не так часто жмякай!');
    }
  }
};

export const getId = (itemId, arr) =>
  itemId && arr.find((i) => i.itemId === itemId)?.id;

export const postOrder = async (cartSum, cart) => {
  const order = {};
  order.sum = cartSum;
  order.items = cart.map((i) => i.title);
  try {
    return await axiosPost(ORDERS_URL, order);
  } catch (error) {
    console.log(error);
  }
};
