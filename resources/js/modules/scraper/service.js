import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import * as scraperActions from './store/actions'

function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function scraperAddRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post('api/v1/scrapers/${params.projectId}/${params.id}', transformRequest(params))
        .then(res => {
          dispatch(scraperActions.add(transformResponse(res.data)))
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

export function scraperUpdateRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.patch(`api/v1/scrapers/${params.id}`, transformRequest(params))
        .then(res => {
          dispatch(scraperActions.add(transformResponse(res.data)))
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

export function scraperRemoveRequest(id) {
  return dispatch => {
    Http.delete(`api/v1/scrapers/${id}`)
      .then(() => {
        dispatch(scraperActions.remove(id))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function scraperListRequest(params) {

  let { pageNumber = 1, url = 'api/v1/scrapers/${params.projectId}' } = params

  return dispatch => {
    if (pageNumber > 1) {
      url = url + `?page=${pageNumber}`
    }

    Http.get(url)
      .then((res) => {
        dispatch(scraperActions.list(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function scraperEditRequest(id) {
  return dispatch => {
    Http.get(`api/v1/scrapers/${id}`)
      .then((res) => {
        dispatch(scraperActions.add(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function scraperFetchRequest(id) {
  return dispatch => {
    Http.get(`api/v1/scrapers/${id}`)
      .then((res) => {
        dispatch(scraperActions.add(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}
