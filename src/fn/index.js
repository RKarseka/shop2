import { axiosDelId, axiosPost } from '../axios';
// import { ORDERS_URL } from '../const';

export const toggleBtn = async (item, id, setArrFn, arr, type) => {
  try {
    if (id) {
      // await axiosDelId(URL, Number(id));

      setArrFn(arr.filter(({ itemId }) => itemId !== item.itemId));
      return false;
    } else {
      // const newId = await axiosPost(URL, item);
      // setArrFn((prev) => [...prev, { ...item, id: newId }]);
      // return newId;
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
  order.rows = [...cart];
  try {
    // return await axiosPost(ORDERS_URL, order);
  } catch (error) {
    console.log(error);
  }
};

export const scrollOff = (
  open
  // , fn
) => {
  // fn(open);
  if (open) {
    document.body.style.overflowY = 'hidden';
    document.body.style.top = `-${window.scrollY}px`;

    document.body.style.position = 'fixed';
  } else {
    document.body.style.overflowY = 'visible';
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
};
