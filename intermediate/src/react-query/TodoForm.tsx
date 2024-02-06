import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useRef } from 'react'
import { Todo } from './TodoList'

const TodoForm = () => {
  const queryClient = useQueryClient()

  const addTodo = useMutation({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
        .then((res) => res.data),

    onSuccess: (savedTodo, newTodo) => {
      // console.log(savedTodo)
      // queryClient.invalidateQueries({
      //   queryKey: ['todos'],
      // })
    },
  })

  const ref = useRef<HTMLInputElement>(null)

  return (
    <form
      className='row mb-3'
      onSubmit={(event) => {
        event.preventDefault()

        if (ref.current && ref.current.value)
          addTodo.mutate({
            id: 0,
            title: ref.current?.value,
            completed: false,
            userId: 1,
          })
      }}
    >
      <div className='col-10'>
        <input ref={ref} type='text' className='form-control ' />
      </div>
      <div className='col'>
        <button className='btn btn-primary'>Add</button>
      </div>
    </form>
  )
}

export default TodoForm