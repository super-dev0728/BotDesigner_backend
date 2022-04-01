import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import * as projectActions from './store/actions'

function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function projectAddRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post('api/v1/projects', transformRequest(params))
        .then(res => {
          dispatch(projectActions.add(transformResponse(res.data)))
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

export function projectUpdateRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.patch(`api/v1/projects/${params.id}`, transformRequest(params))
        .then(res => {
          dispatch(projectActions.add(transformResponse(res.data)))
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

export function projectRemoveRequest(id) {
  return dispatch => {
    Http.delete(`api/v1/projects/${id}`)
      .then(() => {
        dispatch(projectActions.remove(id))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function projectListRequest(params) {

  let { pageNumber = 1, url = 'api/v1/projects' } = params

  return dispatch => {
    if (pageNumber > 1) {
      url = url + `?page=${pageNumber}`
    }

    Http.get(url)
      .then((res) => {
        dispatch(projectActions.list(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function projectEditRequest(id) {
  return dispatch => {
    Http.get(`api/v1/projects/${id}`)
      .then((res) => {
        dispatch(projectActions.add(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function projectFetchRequest(id) {
  return dispatch => {
    Http.get(`api/v1/projects/${id}`)
      .then((res) => {
        dispatch(projectActions.add(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}
