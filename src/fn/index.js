import { axiosDelId, axiosPost } from '../axios';

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
