import axiosConfig from 'src/settings/axios'

const GET_REQUEST = async (url: string, params: {} = {}, headers: {} = {}) => {
  try {
    const response = await axiosConfig({
      url,
      method: 'GET',
      params,
      headers,
    })

    if (response.status === 200) {
      return {
        ...response,
        success: true,
      }
    } else {
      return {
        ...response,
        success: false,
      }
    }
  } catch (error) {
    // TODO: Добавить логирование ошибок апи-запросов
    return {
      ...error?.response,
      success: false,
    }
  }
}

const POST_REQUEST = async (url: string, data: {} = {}, headers: {} = {}) => {
  try {
    const response = await axiosConfig({
      url,
      method: 'POST',
      data,
      headers,
    })

    if (response.status === 200) {
      return {
        ...response,
        success: true,
      }
    } else {
      return {
        ...response,
        success: false,
      }
    }
  } catch (error) {
    // TODO: Добавить логирование ошибок апи-запросов
    return {
      ...error?.response,
      success: false,
    }
  }
}

const PUT_REQUEST = async (url: string, data: {} = {}, headers: {} = {}) => {
  try {
    const response = await axiosConfig({
      url,
      method: 'PUT',
      data,
      headers,
    })

    if (response.status === 200) {
      return {
        ...response,
        success: true,
      }
    } else {
      return {
        ...response,
        success: false,
      }
    }
  } catch (error) {
    // TODO: Добавить логирование ошибок апи-запросов
    return {
      ...error?.response,
      success: false,
    }
  }
}

const DELETE_REQUEST = async (url: string, headers: {} = {}) => {
  try {
    const response = await axiosConfig({
      url,
      method: 'DELETE',
      headers,
    })

    if (response.status === 200) {
      return {
        ...response,
        success: true,
      }
    } else {
      return {
        ...response,
        success: false,
      }
    }
  } catch (error) {
    // TODO: Добавить логирование ошибок апи-запросов
    return {
      ...error?.response,
      success: false,
    }
  }
}

export { GET_REQUEST, POST_REQUEST, PUT_REQUEST, DELETE_REQUEST }
