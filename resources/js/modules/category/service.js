import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import * as categoryActions from './store/actions'

function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function categoryAddRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post('api/v1/categories', transformRequest(params))
        .then(res => {
          dispatch(categoryActions.add(transformResponse(res.data)))
          return resolve()
        })
        .catch((err) => {
          const statusCode = err.response.status;
          const data = {
            error: null,
            statusCode,
          };

          if (statusCode === 422) {
            const resetErrors = {
              errors: err.response.data,
              replace: false,
              searchStr: '',
              replaceStr: '',
            };
            data.error = Transformer.resetValidationFields(resetErrors);
          } else if (statusCode === 401) {
            data.error = err.response.data.message;
          }
          return reject(data);
        })
    })
  )
}

export function categoryUpdateRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.patch(`api/v1/categories/${params.id}`, transformRequest(params))
        .then(res => {
          dispatch(categoryActions.add(transformResponse(res.data)))
          return resolve()
        })
        .catch((err) => {
          const statusCode = err.response.status;
          const data = {
            error: null,
            statusCode,
          };

          if (statusCode === 422) {
            const resetErrors = {
              errors: err.response.data,
              replace: false,
              searchStr: '',
              replaceStr: '',
            };
            data.error = Transformer.resetValidationFields(resetErrors);
          } else if (statusCode === 401) {
            data.error = err.response.data.message;
          }
          return reject(data);
        })
    })
  )
}

export function categoryRemoveRequest(id) {
  return dispatch => {
    Http.delete(`api/v1/categories/${id}`)
      .then(() => {
        dispatch(categoryActions.remove(id))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function categoryListRequest(params) {

  let { pageNumber = 1, url = 'api/v1/categories' } = params

  return dispatch => {
    if (pageNumber > 1) {
      url = url + `?page=${pageNumber}`
    }

    Http.get(url)
      .then((res) => {
        dispatch(categoryActions.list(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function categoryEditRequest(id) {
  return dispatch => {
    Http.get(`api/v1/categories/${id}`)
      .then((res) => {
        dispatch(categoryActions.add(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function categoryFetchRequest(id) {
  return dispatch => {
    Http.get(`api/v1/categories/${id}`)
      .then((res) => {
        dispatch(categoryActions.add(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}
