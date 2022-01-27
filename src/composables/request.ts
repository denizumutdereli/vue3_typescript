import { ref, Ref, UnwrapRef } from 'vue'

export interface Result<T> {
  data: Ref<UnwrapRef<T | null>>
  error: Ref<Error | null>
  loading: Ref<boolean>
}

export const useRequest = <T>(promise: Promise<T>, initialData: T | null = null): Result<T> => {
  const data = ref<T | null>(initialData)
  const error = ref<Error | null>(null)
  const loading = ref<boolean>(true)

  // Handle internal requests
  promise.then(
    val => {
      data.value = val as UnwrapRef<T>
      loading.value = false
    },
    err => {
      error.value = err
      loading.value = false
    }
  )

  return { data, error, loading }
}