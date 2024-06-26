import './index.scss'
import { useEffect, useState, useContext } from 'react'
import BasketOrder from '@/components/main/basket-order'
import About from '@/components/main/about'
import Delivery from '@/components/main/delivery'
import { DataContext } from '@/context'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { SmsModal } from '@/components'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { useAxiosFunction, useInputValue } from '@/hooks'
import {
  clickStoreProduct,
  prodsItemsIsArray,
  storeItemsCount,
  storeTotalCost,
  toastNotification,
  getProducts,
  postOrder,
} from '@/helpers'
import { Helmet } from 'react-helmet-async'

const inputs = {
  name: '',
  number: '',
  email: '',
  street: '',
  home: '',
  entrance: '',
  floor: '',
  apartment: '',
  doorPhone: '',
  delivery_time: 'soon',
  delivery_type: 'delivery',
}

export const Basket = () => {
  let prods = JSON.parse(localStorage.getItem('cart'))
  const [products, setProducts] = useState([])
  // eslint-disable-next-line
  const [data, error, loading, axiosFetch] = useAxiosFunction()
  // eslint-disable-next-line
  const [data2, error2, loading2, axiosFetch2] = useAxiosFunction()
  const { value, change } = useInputValue(inputs)
  const [tempData, setTempData] = useState({})
  const navigate = useNavigate()
  const getProductRef = useRef([])
  const {
    context,
    getStoreItems,
    getSubmitInputValues,
    showModal,
    getSendTypes,
  } = useContext(DataContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: 'all' })

  useEffect(() => {
    getProducts(axiosFetch)
    // eslint-disable-next-line
  }, [])

  const uniqueProducts = Array.from(
    new Set(prods?.map((prod) => prod._id)),
  ).map((id) => prods?.find((prod) => prod._id === id))
  getProductRef.current = uniqueProducts

  // unique product
  useEffect(() => {
    const compareArrays = (a, b) => {
      const cloneA = a
      const cloneB = b
      return JSON.stringify(cloneA) !== JSON.stringify(cloneB)
    }
    if (compareArrays(products, getProductRef.current)) {
      setProducts(getProductRef.current)
    }
    // eslint-disable-next-line
  }, [context, prods])

  // short url
  const items = data?.data?.products
  const totalProdsCost = storeTotalCost(
    JSON.parse(localStorage.getItem('cart')),
  )
  const isToken = localStorage.getItem('token')

  const handleSubmitProduct = () => {
    if (!isToken) {
      toast.error('Please login to confirm products!')
      showModal({ hidden: true, type: 'register' })
      return
    }

    getSubmitInputValues()
    let values = {}
    for (const i in value) {
      if (value[i] !== '') {
        values[i] = value[i]
      }
    }
    const data = {
      products: prodsItemsIsArray(products, prods),
      ...values,
    }
    data.lease = context?.values?.lease
    data.payment = context?.values?.pay
    if (context?.values?.comment) {
      data.comment = context?.values.comment
    }
    setTempData(data)
    getSendTypes({ smsMailModal: true })
  }

  useEffect(() => {
    if (context?.types?.smsCode === 'success') {
      postOrder(axiosFetch2, tempData)
    }
    // eslint-disable-next-line
  }, [context])

  useEffect(() => {
    if (error2) {
      // toast error
      toastNotification(3, 'error', error2)
      getSendTypes({ smsCode: 'error' })
    } else if (data2?.data) {
      // toast success
      localStorage.removeItem('cart')
      toastNotification(3, 'success', data2?.data)
      getSendTypes({ smsCode: 'done' })
      navigate('/order')
    }
    // eslint-disable-next-line
  }, [data2, error2])

  return (
    <div className="basket">
      <Helmet>
        <title>Куда пицца | Ваш заказ</title>
      </Helmet>
      <SmsModal
        context={context}
        showModal={showModal}
        getSendTypes={getSendTypes}
      />
      {error ? (
        <h2 className="error_msg">{JSON.stringify(error)}</h2>
      ) : (
        <div className="basket__box">
          <h1 className="basket__title">Ваш заказ</h1>
          {!prods?.length ? (
            <div className="basket__not-fount--box">
              <div>
                <h1>Товар не найден!</h1>
              </div>
            </div>
          ) : (
            <>
              <ul className="basket__list">
                {products?.map((prod) =>
                  storeItemsCount(prod._id, prods) > 0 ? (
                    <li className="basket__item" key={prod._id}>
                      <div className="basket__img--block">
                        <img src={prod.image} alt={prod.name} />
                      </div>
                      <div className="basket__second--box">
                        <div className="basket__description--block">
                          <h3>{prod.description}</h3>
                          <p>{prod.description}</p>
                        </div>
                        <div className="basket__button-price--box">
                          <div>
                            <button
                              onClick={() =>
                                clickStoreProduct(
                                  { item: prod, type: 'decrement' },
                                  prods,
                                  getStoreItems,
                                )
                              }
                            >
                              -
                            </button>
                            <span>{storeItemsCount(prod._id, prods)}</span>
                            <button
                              onClick={() =>
                                clickStoreProduct(
                                  { item: prod, type: 'increment' },
                                  prods,
                                  getStoreItems,
                                )
                              }
                            >
                              +
                            </button>
                          </div>
                          <h4>{prod.price} ₽</h4>
                        </div>
                      </div>
                    </li>
                  ) : (
                    ''
                  ),
                )}
              </ul>
              <div className="basket__promo-box">
                <form className="basket__form-box">
                  <input
                    type="text"
                    className="basket__input"
                    placeholder="Промокод"
                    required
                  />

                  <button type="submit"></button>
                </form>
                <h4>Итого: {storeTotalCost(prods)} ₽</h4>
              </div>
              <BasketOrder
                data={items}
                title="Добавить к заказу?"
                category={'Закуски'}
              />
              <BasketOrder data={items} title="Соусы" category={'Соусы'} />
              <form
                className="basket__form"
                onSubmit={handleSubmit(handleSubmitProduct)}
              >
                <About
                  value={value}
                  change={change}
                  register={register}
                  errors={errors}
                />
                <Delivery
                  value={value}
                  change={change}
                  register={register}
                  errors={errors}
                />
                <div className="delivery__checkout">
                  <h3>Итого: {totalProdsCost} ₽</h3>
                  <button type="submit" className="btn">
                    Оформить заказ
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  )
}
